import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Akala Labs — Making AGI in healthcare a reality",
  description:
    "Frontier models can process healthcare data. They can't yet reason about it the way a specialist does. Akala Labs exists to close that gap.",
  metadataBase: new URL("https://akalalabs.com"),
  openGraph: {
    title: "Akala Labs",
    description:
      "Frontier models can process healthcare data. They can't yet reason about it the way a specialist does. Akala Labs exists to close that gap.",
    url: "https://akalalabs.com",
    siteName: "Akala Labs",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} min-h-dvh antialiased`}
    >
      <body className="flex min-h-dvh flex-col font-sans">{children}</body>
    </html>
  );
}
