import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from 'next';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Terra Azul • Oficina de Arquitectura y Construcción en Bogotá',
  description: 'Empresa de arquitectura y construcción en Bogotá. Diseño arquitectónico, renovación de espacios, impermeabilización, domótica y señalización industrial.',
  metadataBase: new URL('https://www.terraazul.co'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Terra Azul • Oficina de Arquitectura y Construcción",
    description: "Empresa de arquitectura y construcción en Bogotá. Diseño arquitectónico, renovación de espacios, impermeabilización, domótica y señalización industrial.",
    url: new URL('https://terraazul.co'),
    siteName: "Terra Azul",
    images: [
      {
        url: "https://terra-azul-s3.s3.us-east-1.amazonaws.com/finished-projects/terra-socials.png",
        width: 1200,
        height: 630,
        alt: "Terra Azul — Arquitectura y Construcción en Bogotá",
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
    <html lang="es-CO">
      <body className={`${plusJakarta.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
