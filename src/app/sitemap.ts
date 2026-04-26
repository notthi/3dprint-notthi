import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";

const baseUrl = "https://3dprint.notthi.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/printers`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/filaments`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/howto`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const articlePages: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${baseUrl}${a.href}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: a.slug === "recommend" ? 0.9 : 0.8,
  }));

  return [...staticPages, ...articlePages];
}
