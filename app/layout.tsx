import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FormShield – Auto-fill forms with privacy-focused fake data",
  description: "Browser extension that intelligently fills forms with realistic but fake data for testing, privacy protection, or avoiding spam."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f57dbcc3-22a1-47d0-9bc6-aa331cc70cd8"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
