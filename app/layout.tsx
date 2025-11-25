import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const ppNeueWorld = localFont({
  src: '../public/fonts/PPNeueWorld-Medium.woff2',
  variable: '--font-headline',
  display: 'swap',
  preload: true,
});

const ppWriter = localFont({
  src: '../public/fonts/PPWriter-RegularItalic.otf',
  variable: '--font-writer',
  display: 'swap',
  preload: true,
});

const whyteLight = localFont({
  src: '../public/fonts/Whyte-Light.woff2',
  variable: '--font-sans',
  display: 'swap',
  preload: true,
});

const aeonikMedium = localFont({
  src: '../public/fonts/Aeonik-Medium.woff2',
  variable: '--font-aeonik-medium',
  weight: '500',
  display: 'swap',
  preload: true,
});

const aeonikRegular = localFont({
  src: '../public/fonts/Aeonik-Regular.woff2',
  variable: '--font-aeonik-regular',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "Justin Beaulieu - Product & UX/UI Designer",
  description: "Product & UX/UI Designer portfolio showcasing digital product and design solutions.",
  keywords: ["UX Designer", "UI Designer", "Product Designer", "Digital Design", "Portfolio"],
  authors: [{ name: "Justin Beaulieu" }],
  creator: "Justin Beaulieu",
  openGraph: {
    type: "website",
    title: "Justin Beaulieu - Product & UX/UI Designer",
    description: "Product & UX/UI Designer portfolio showcasing digital product and design solutions.",
    siteName: "Justin Beaulieu Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Justin Beaulieu - Product & UX/UI Designer",
    description: "Product & UX/UI Designer portfolio showcasing digital product and design solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ppNeueWorld.variable} ${ppWriter.variable} ${whyteLight.variable} ${aeonikMedium.variable} ${aeonikRegular.variable}`}>
      <body
        className="antialiased"
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        {children}
      </body>
    </html>
  );
}
