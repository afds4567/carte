import type { Metadata } from "next";
import Link from "next/link";
import Vercel from "../../public/vercel.svg";
import "@/app/globals.css";
import Provider from "./Provider";

export const metadata: Metadata = {
  title: "Create Own Map",
  description: "Made By Eyk",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
