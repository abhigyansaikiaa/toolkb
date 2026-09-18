import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://toolkb.in";
  const now = new Date();

  const routes: { url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    // Homepage
    { url: `${base}`, priority: 1.0, changeFrequency: "weekly" },

    // Primary tool pages
    { url: `${base}/compress-image`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${base}/compress-image-to-20kb`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${base}/compress-image-to-50kb`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${base}/compress-image-to-100kb`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${base}/compress-image-to-200kb`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${base}/signature-compressor`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${base}/signature-to-20kb`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/signature-to-50kb`, priority: 0.8, changeFrequency: "monthly" },

    // Coming soon (indexable, useful content)
    { url: `${base}/resize-image`, priority: 0.7, changeFrequency: "monthly" },

    // Content pages
    { url: `${base}/india-photo-size-requirements`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/about`, priority: 0.5, changeFrequency: "yearly" },
  ];

  return routes.map((r) => ({
    url: r.url,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
