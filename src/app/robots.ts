import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://mrrealstrongman.com"; // Change to production URL later

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/", // Prevent crawling of private/internal sections if any later
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
