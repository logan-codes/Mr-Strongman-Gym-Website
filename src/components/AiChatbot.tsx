"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X, Bot, Loader2 } from "lucide-react";
import Groq from "groq-sdk";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

export default function AiChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const initializeGroq = () => {
    const apiKey = process.env.NEXT_PUBLIC_GROQ_API_KEY;
    if (!apiKey) {
      console.error("Groq API key not found");
      return null;
    }
    return new Groq({ apiKey, dangerouslyAllowBrowser: true });
  };

  const getTrainerPersonaPrompt = () => {
    return `You are Strongman AI, a professional gym trainer and fitness expert. Your persona is:
- Knowledgeable about fitness, nutrition, workout plans, and gym equipment
- Motivational and encouraging, but also realistic and safety-conscious
- Professional yet friendly and approachable
- Focuses on evidence-based fitness advice
- Always prioritizes safety and proper form
- Encourages gradual progress and consistency

Guidelines:
- Provide specific, actionable advice when possible
- Include safety warnings for exercises that need them
- Suggest consulting healthcare providers for medical conditions
- Be encouraging but avoid making unrealistic promises
- Keep responses concise but comprehensive (2-4 paragraphs max)
- Use some fitness terminology but explain it when needed
- Be enthusiastic about fitness and healthy lifestyle

Current context: You are helping someone who visited MR Real StrongMan Gym website. They may have questions about workouts, nutrition, gym equipment, or getting started with fitness.`;
  };

  const generateAiResponse = async (userMessage: string) => {
    const groq = initializeGroq();
    if (!groq) {
      return "I apologize, but I'm having trouble connecting to my AI services right now. Please try again later or contact our gym directly for assistance.";
    }

    try {
      const prompt = `${getTrainerPersonaPrompt()}

User message: "${userMessage}"

Please respond as Strongman AI with helpful fitness advice.`;

      const response = await groq.chat.completions.create({
        model: "llama-3.1-8b-instant",
        messages: [
          {
            role: "system",
            content: getTrainerPersonaPrompt()
          },
          {
            role: "user",
            content: userMessage
          }
        ],
        temperature: 0.7,
        max_tokens: 1024
      });

      return response.choices[0]?.message?.content || "I'm having trouble generating a response right now. Please try again.";
    } catch (error) {
      console.error("Groq API error:", error);
      return "I'm experiencing some technical difficulties right now. Please try again in a moment or reach out to our gym staff directly. We're here to help you achieve your fitness goals!";
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const aiResponse = await generateAiResponse(userMessage.text);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error generating response:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", { 
      hour: "numeric", 
      minute: "2-digit",
      hour12: true 
    });
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-6 z-50 flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat with Strongman AI"
      >
        <Bot className="w-6 h-6" />
        <span className="font-semibold hidden sm:inline">Strongman AI</span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-6 z-50 w-80 max-w-[90vw] h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-2xl">
              <div className="flex items-center gap-3">
                <Bot className="w-6 h-6" />
                <div>
                  <div className="font-semibold">Strongman AI</div>
                  <div className="text-xs opacity-90">Your Fitness Trainer</div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.length === 0 ? (
                <div className="text-center text-gray-500 py-8">
                  <Bot className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                  <div className="font-medium mb-2">Welcome to Strongman AI!</div>
                  <div className="text-sm">
                    I'm here to help you with fitness advice, workout tips, and nutrition guidance. Ask me anything!
                  </div>
                </div>
              ) : (
                messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                        message.sender === "user"
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      <div className="text-sm whitespace-pre-wrap">{message.text}</div>
                      <div
                        className={`text-xs mt-1 ${
                          message.sender === "user" ? "text-blue-100" : "text-gray-500"
                        }`}
                      >
                        {formatTime(message.timestamp)}
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-100 text-gray-800 rounded-2xl px-4 py-2">
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span className="text-sm">Strongman AI is typing...</span>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about fitness..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  disabled={isLoading}
                  maxLength={500}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <div className="text-xs text-gray-500 mt-2 text-center">
                Powered by AI • Not a substitute for professional medical advice
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
