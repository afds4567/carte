import type { Metadata } from "next";
import "@/app/globals.css";
import Provider from "./Provider";
import HeadNavBar from "@/components/HeadNavBar";

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
      <body className="px-0 py-2 h-screen">
        <Provider>
          <HeadNavBar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
