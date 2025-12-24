import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BlezoladProgramming – High-Performance Web Systems",
  description:
    "Backend-heavy platforms, APIs, and scalable web apps built for speed, security and growth.",

  authors: [{ name: "BlezoladProgramming" }],

  openGraph: {
    title: "BlezoladProgramming",
    description:
      "High-performance web systems, APIs & modern platforms built for scale.",
    url: "https://www.facebook.com/profile.php?id=61583227992339",
    siteName: "BlezoladProgramming",
    type: "website",
  },

  metadataBase: new URL("https://your-domain.com"), // replace with your live domain later
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">


      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
<a
  href="https://www.facebook.com/profile.php?id=61583227992339"
  target="_blank"
  className="fixed bottom-6 right-6 z-40 bg-blue-600 p-3 rounded-full shadow-lg hover:scale-110 transition"
>
  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
    <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z"/>
  </svg>
</a>

      </body>
    </html>
  );
}

