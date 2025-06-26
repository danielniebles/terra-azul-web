import localFont from "next/font/local";
import "./globals.css";
import { Metadata } from 'next';

const montserrat = localFont({
  src: [
    {
      path: './fonts/Montserrat-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/Montserrat-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: './fonts/Montserrat-Light.ttf',
      weight: '200',
      style: 'normal'
    },
    {
      path: './fonts/Montserrat-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './fonts/Montserrat-SemiBold.ttf',
      weight: '600',
      style: 'normal'
    }
  ],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Terra Azul • Oficina de Arquitectura y Construcción',
  description: 'Empresa del sector de la construcción, con amplia experiencia en diseño arquitectónico, diseño de stands, renovación de espacios, remodelaciones, construcción en seco - instalación de drywall, superboard-. Igualmente, prestamos servicios para la automatización de sistemas de acceso, insonorización de espacios, señalización y pintura de espacios industriales o comerciales con pinturas de alto tráfico.',
  metadataBase: new URL('https://terraazul.co'),
  keywords: ["construccion", "drywall", "arquitectura", "diseño", "remodelaciones", "renovación"],
  openGraph: {
    title: "Terra Azul • Oficina de Arquitectura y Construcción",
    description: "Empresa del sector de la construcción, con amplia experiencia en diseño arquitectónico, diseño de stands, renovación de espacios, remodelaciones, construcción en seco - instalación de drywall, superboard-. Igualmente, prestamos servicios para la automatización de sistemas de acceso, insonorización de espacios, señalización y pintura de espacios industriales o comerciales con pinturas de alto tráfico.",
    url:  new URL('https://terraazul.co'),
    siteName: "Terra Azul",
    images: [
      {
        url: "https://terra-azul-s3.s3.us-east-1.amazonaws.com/finished-projects/terra-socials.png",
        width: 1200,
        height: 630,
        alt: "Terra Azul",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
