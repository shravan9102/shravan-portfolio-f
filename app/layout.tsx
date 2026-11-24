import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
export const viewport = { themeColor: "#060a14" };
const site = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const desc = "Portfolio of Shravan Kumar, showcasing projects and experience in Data Science, Machine Learning, Deep Learning, Generative AI, NLP, and AI Engineering.";
export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: "Shravan Kumar | Data Scientist & AI/ML Engineer",
  description: desc,
  keywords: ["Data Scientist", "AI/ML Engineer", "Machine Learning", "Generative AI", "Python", "Indore"],
  authors: [{ name: "Shravan Kumar" }],
  openGraph: { title: "Shravan Kumar | Data Scientist & AI/ML Engineer", description: desc, type: "website", url: site },
  twitter: { card: "summary", title: "Shravan Kumar | Data Scientist & AI/ML Engineer", description: desc },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className={`${inter.variable} ${display.variable}`}><body className="font-sans"><Providers>{children}</Providers></body></html>);
}
