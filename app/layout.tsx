import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CanDigital — Jasa Pembuatan Website Profesional",
  description:
    "CanDigital adalah jasa pembuatan website profesional yang membantu bisnis Anda tampil kredibel dan menarik di era digital. Landing page, company profile, toko online, dan custom web.",
  keywords: "jasa pembuatan website, website profesional, company profile, landing page, e-commerce, web developer Indonesia",
  openGraph: {
    title: "CanDigital — Jasa Pembuatan Website Profesional",
    description: "Kami membantu bisnis Anda tampil profesional di era digital dengan website yang menarik dan berkualitas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
