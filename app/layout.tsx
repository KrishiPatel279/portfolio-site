import "./globals.css";

export const metadata = {
  title: "Krishi Patel",
  description: "Cyber Security Analyst Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}