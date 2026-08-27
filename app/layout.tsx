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
  title: "Akala Labs — AI and agents for RCM companies",
  description:
    "Akala Labs helps RCM companies modernize with AI and agents.",
  metadataBase: new URL("https://akalalabs.com"),
  openGraph: {
    title: "Akala Labs",
    description: "We help RCM companies modernize with AI and agents.",
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
