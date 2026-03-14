import HomePageClient from "@/components/pages/HomePageClient";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": "MR Real StrongMan Gym",
    "image": "https://mrrealstrongman.com/logo/Logo.png",
    "@id": "https://mrrealstrongman.com",
    "url": "https://mrrealstrongman.com",
    "telephone": "+91 88077 79835",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mannachanallur",
      "addressLocality": "Trichy",
      "postalCode": "621005", // Example postal code, adjust if known
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 10.9161, // Estimated default for Mannachanallur
      "longitude": 78.7061
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ],
        "opens": "05:00",
        "closes": "21:30"
      }
    ],
    "sameAs": [
      // Add social links here if known
    ],
    "description": "Premium fitness and unisex gym in Mannachanallur, Trichy. We offer expert coaching, personal training, and top-tier equipment."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePageClient />
    </>
  );
}
