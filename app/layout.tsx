import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lens | Cross-Cultural Trust Translator",
  description: "Translating institutional trust into social trust through information design. A research-driven approach to accessible nutrition information for non-WEIRD populations.",
  keywords: ["UX design", "cross-cultural design", "information accessibility", "WEIRD bias", "nutrition labels", "trust design"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
