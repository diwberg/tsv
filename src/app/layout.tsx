
import Header from "./(home)/_components/header";
import Footer from "./(home)/_components/footer";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TSV-TEC | Soluções em Sistemas de Vapor e Vasos de Pressão | Goiânia",
    template: "%s | TSV-TEC"
  },
  description: "TSV-TEC é referência em manutenção, calibração e inspeções para sistemas de geração de vapor, vasos de pressão e acessórios industriais. Atendemos frigoríficos, laticínios, indústrias químicas e alimentícias em todo Brasil.",
  keywords: [
    "sistemas de vapor",
    "vasos de pressão",
    "manutenção industrial",
    "calibração de válvulas",
    "inspeção NR-13",
    "caldeiras",
    "trocadores de calor",
    "válvulas de segurança",
    "instrumentos de pressão",
    "TSV-TEC",
    "Goiânia",
    "engenharia mecânica",
    "ART",
    "NR-12",
    "NR-13",
    "SF International",
    "WDISP WEG"
  ],
  authors: [{ name: "TSV-TEC" }],
  creator: "TSV-TEC",
  publisher: "TSV-TEC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tsv-tec.com.br"), // Substitua pela URL real
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://tsv-tec.com.br",
    title: "TSV-TEC | Excelência em Soluções para Sistemas de Vapor e Vasos de Pressão",
    description: "Especialistas em manutenção, calibração e inspeções para sistemas de geração de vapor, vasos de pressão e acessórios industriais. Atendimento em todo território nacional.",
    siteName: "TSV-TEC",
    images: [
      {
        url: "/og-image.jpg", // Você precisará criar esta imagem
        width: 1200,
        height: 630,
        alt: "TSV-TEC - Soluções em Sistemas de Vapor e Vasos de Pressão",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TSV-TEC | Soluções em Sistemas de Vapor e Vasos de Pressão",
    description: "Referência em manutenção, calibração e inspeções para sistemas industriais. Atendimento nacional com ART emitida.",
    images: ["/twitter-image.jpg"], // Você precisará criar esta imagem
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "seu-codigo-verificacao-google", // Substitua pelo código real do Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ptBR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
