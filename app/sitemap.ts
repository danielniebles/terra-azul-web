import { MetadataRoute } from "next"
import { SERVICES, PROJECTS } from "./constants"

const BASE = "https://www.terraazul.co"

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceUrls: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${BASE}/servicios/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  const projectUrls: MetadataRoute.Sitemap = PROJECTS.map((p) => ({
    url: `${BASE}/proyectos/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE}/servicios`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/proyectos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...serviceUrls,
    ...projectUrls,
  ]
}
