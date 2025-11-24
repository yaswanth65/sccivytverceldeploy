import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SCIVYT - Digital Innovation Partner",
  description:
    "Bring the capabilities of your large scale enterprise to the next level",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans text-slate-900 bg-white overflow-x-hidden w-full">
        {children}
      </body>
    </html>
  );
}
