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
  title: 'Terra Azul • Oficina de Arquitectura y Construcción en Bogotá',
  description: 'Empresa de arquitectura y construcción en Bogotá. Diseño arquitectónico, renovación de espacios, impermeabilización, domótica y señalización industrial.',
  metadataBase: new URL('https://www.terraazul.co'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Terra Azul • Oficina de Arquitectura y Construcción",
    description: "Empresa de arquitectura y construcción en Bogotá. Diseño arquitectónico, renovación de espacios, impermeabilización, domótica y señalización industrial.",
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
    <html lang="es-CO">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
