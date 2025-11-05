// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // pick what you need
});

export const metadata: Metadata = {
  title: "Resume Builder",
  description: "Create your resume in minutes",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.className} `}>
        {children}
      </body>
    </html>
  );
}
