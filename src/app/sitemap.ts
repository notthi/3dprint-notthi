import type { MetadataRoute } from "next";

const baseUrl = "https://3dprint.notthi.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/printers`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/printers/recommend`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/printers/beginners`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/printers/home-use`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/filaments`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/filaments/recommend`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/filaments/pla`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/filaments/petg`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/howto`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/howto/beginners`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/howto/trouble`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  return staticPages;
}
