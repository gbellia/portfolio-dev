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
  title: "Guilherme Bellia - Desenvolvedor Full Stack",
  description:
    "Portfolio de Guilherme Bellia, desenvolvedor Full Stack especializado em React, Node.js e tecnologias modernas.",
  keywords: [
    "desenvolvedor",
    "full stack",
    "react",
    "node.js",
    "typescript",
    "portfolio",
  ],
  authors: [{ name: "Guilherme Bellia" }],
  creator: "Guilherme Bellia",
  openGraph: {
    title: "Guilherme Bellia - Desenvolvedor Full Stack",
    description:
      "Portfolio de Guilherme Bellia, desenvolvedor Full Stack especializado em React, Node.js e tecnologias modernas.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guilherme Bellia - Desenvolvedor Full Stack",
    description:
      "Portfolio de Guilherme Bellia, desenvolvedor Full Stack especializado em React, Node.js e tecnologias modernas.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
