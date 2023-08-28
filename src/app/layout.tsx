"use client";
import type { Metadata } from "next";
import "@/app/globals.css";
import Provider from "./Provider";
import HeadNavBar from "@/components/HeadNavBar";
import { useEffect, useState } from "react";
import { Coordinates, Position } from "@/types/position";
import UserLocationProvider from "@/context/UserLocationContext";

// export const metadata: Metadata = {
//   title: "Create Own Map",
//   description: "Made By Eyk",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="px-0 py-2 h-screen">
        <Provider>
          <UserLocationProvider>
            <HeadNavBar />
            {children}
          </UserLocationProvider>
        </Provider>
      </body>
    </html>
  );
}
