import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Cidade Pet Spa — Banho, tosa e estética pet em São Carlos/SP (Demonstração)",
  description:
    "Conceito comercial não oficial: banho, tosa e estética pet na Rua Dona Alexandrina, 1553, São Carlos/SP. Agende pelo WhatsApp.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Cidade Pet Spa — Cuidado que eles sentem (Demonstração)",
    description:
      "Banho, tosa e estética pet em São Carlos/SP. Agendamento simples pelo WhatsApp.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable} h-full`}>
      <body className="min-h-full bg-cream font-sans text-ink">{children}</body>
    </html>
  );
}
