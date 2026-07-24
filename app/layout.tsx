import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Krishi Patel",
    template: "%s | Krishi Patel",
  },
  description:
    "Cyber Security Analyst | Full Stack Developer | Building secure, immersive, and high-performance digital experiences.",
  keywords: [
    "Krishi Patel",
    "Cyber Security",
    "Portfolio",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "GSAP",
    "Tailwind CSS",
  ],
  authors: [
    {
      name: "Krishi Patel",
    },
  ],
  creator: "Krishi Patel",
  applicationName: "Krishi Patel Portfolio",

  openGraph: {
    title: "Krishi Patel",
    description:
      "Cyber Security Analyst | Full Stack Developer | Building secure, immersive, and high-performance digital experiences.",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Krishi Patel",
    description:
      "Cyber Security Analyst | Full Stack Developer",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-background text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}