import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevInterviewBank – Curated Coding Questions by Company & Role",
  description:
    "Real interview questions from FAANG+ companies, filterable by role and level, with solution walkthroughs and difficulty ratings."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="2d408c49-e022-4d97-9215-44d52ac9c869"
        />
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
