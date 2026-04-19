import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Acute Episode of Japan Ikitai Syndrome Certificate Issuer",
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
