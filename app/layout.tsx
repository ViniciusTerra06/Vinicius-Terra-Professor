import type { Metadata } from "next";
import { DM_Sans, DM_Mono, Space_Grotesk, Great_Vibes } from "next/font/google";
import Header from "./components/header";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
});


export const metadata: Metadata = {
  title: "Vinicius Terra - Desenvolvedor",
  description: "Criando experiências modernas e de alta performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${dmMono.variable} ${spaceGrotesk.variable} ${greatVibes.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
