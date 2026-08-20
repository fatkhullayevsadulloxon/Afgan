import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { ROUTES } from "@/lib/routes";
import { SERVICE_SLUGS } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = Object.values(ROUTES).map((path) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));

  const services = SERVICE_SLUGS.map((slug) => ({
    url: `${SITE_URL}${ROUTES.services}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...base, ...services];
}
