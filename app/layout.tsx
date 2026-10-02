import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sacrament Meeting Planner",
    template: "%s | Sacrament Meeting Planner",
  },
  description: "Plan, review, and print sacrament meeting programs.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000"),
  ),
  openGraph: {
    type: "website",
    title: "Sacrament Meeting Planner",
    description: "Plan, review, and print sacrament meeting programs.",
    images: [
      {
        url: "/sacrament-meeting.svg",
        width: 800,
        height: 500,
        alt: "Sacrament meeting planning illustration",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />

          <main className="flex-1">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
