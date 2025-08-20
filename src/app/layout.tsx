import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Admissão Auto Service - Oficina Automotiva em Fortaleza",
  description: "Manutenção e reparos automotivos em Fortaleza com qualidade e preço justo. Conheça a Admissão Auto Service e cuide bem do seu carro!",
  openGraph: {
    title: "Admissão Auto Service - Fortaleza",
    description: "Se você está buscando manutenção e reparos automotivos em Fortaleza, a Admissão Auto Service é a melhor opção. Oferecemos serviços de alta qualidade e preços acessíveis para manter seu veículo em bom estado.",
    images: [
      { url: "/images/hero-img.webp" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preload" fetchPriority="high" as="image" href="/images/hero-img.webp" type="image/webp" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
