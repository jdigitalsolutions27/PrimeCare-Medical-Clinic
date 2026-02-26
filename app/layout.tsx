import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";
import { SiteShell } from "@/components/layout/site-shell";
import { SiteProviders } from "@/components/providers/site-providers";
import { business } from "@/data/business";

const headingFont = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: business.clinicName,
  description: business.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${headingFont.variable} ${bodyFont.variable} font-[family-name:var(--font-body)]`}>
        <SiteProviders>
          <SiteShell>{children}</SiteShell>
        </SiteProviders>
      </body>
    </html>
  );
}
