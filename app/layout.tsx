import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./legacy.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Portfolio | Muhammad Iqbal Maulana",
  description: "Responsive personal portfolio: skills, education, projects, contact.",
  metadataBase: new URL("https://your-domain.com"),
  openGraph: {
    title: "Portfolio | Muhammad Iqbal Maulana",
    description: "Responsive personal portfolio: skills, education, projects, contact.",
    url: "/",
    siteName: "Iqbal Portfolio",
    images: [
      {
        url: "/profile-picture.jpeg",
        width: 1200,
        height: 630,
        alt: "Muhammad Iqbal Maulana",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Muhammad Iqbal Maulana",
    description: "Responsive personal portfolio: skills, education, projects, contact.",
    images: ["/profile-picture.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts: Merriweather & Source Sans Pro to match original site */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Source+Sans+Pro:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* Font Awesome icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
