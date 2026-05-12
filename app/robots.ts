import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Perplexity-User", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Bytespider", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "cohere-ai", allow: "/" },
      { userAgent: "meta-externalagent", allow: "/" },
    ],
    sitemap: "https://www.lokam.ai/sitemap.xml",
  };
}
