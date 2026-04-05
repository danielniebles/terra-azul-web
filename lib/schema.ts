const BASE = "https://www.terraazul.co"

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Terra Azul",
    description:
      "Empresa de arquitectura y construcción en Bogotá. Diseño arquitectónico, renovación de espacios, impermeabilización, domótica y señalización industrial.",
    url: BASE,
    telephone: "+573113988081",
    email: "contacto@terraazul.co",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bogotá",
      addressRegion: "Cundinamarca",
      addressCountry: "CO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 4.6097,
      longitude: -74.0817,
    },
    areaServed: {
      "@type": "City",
      name: "Bogotá",
    },
    sameAs: [
      "https://www.tiktok.com/@terra.azul1",
      "https://www.instagram.com/terraazul.co/",
      "https://www.linkedin.com/in/terra-azul-8381a1106/",
    ],
    image:
      "https://terra-azul-s3.s3.us-east-1.amazonaws.com/finished-projects/terra-socials.png",
  }
}

export function serviceSchema({
  name,
  description,
  slug,
}: {
  name: string
  description: string
  slug: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${BASE}/servicios/${slug}`,
    provider: {
      "@type": "LocalBusiness",
      name: "Terra Azul",
      url: BASE,
    },
    areaServed: {
      "@type": "City",
      name: "Bogotá",
    },
  }
}

export function breadcrumbSchema(
  crumbs: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${BASE}${crumb.href}`,
    })),
  }
}
