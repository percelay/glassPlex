import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GlasPlex Plastics | Precision Plastic Fabrication",
  description:
    "Commercial-grade plastic fabrication and sheet supply from Sussex, NJ. Fast-turn custom cuts, precision machining, and nationwide logistics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
