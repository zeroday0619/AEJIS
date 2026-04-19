import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Acute Compulsive Desire-to-Travel-to-Japan Syndrome Certificate Issuer",
  description: "Parody medical-certificate web app with print support",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="diagnosis">
      <body>{children}</body>
    </html>
  );
}
