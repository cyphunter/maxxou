import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

/**
 * Sitemap dynamique du site vitrine.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/+$/, "");
  const now = new Date();

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/spectacle`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/personnages`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/dates`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/banane-comedy-club`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/a-propos`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/mentions-legales`, lastModified: now, changeFrequency: "yearly", priority: 0.1 },
    { url: `${base}/confidentialite`, lastModified: now, changeFrequency: "yearly", priority: 0.1 },
  ];
}
