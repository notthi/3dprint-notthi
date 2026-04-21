import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [],
      },
    ],
    sitemap: "https://3dprint.notthi.com/sitemap.xml",
    host: "https://3dprint.notthi.com",
  };
}
