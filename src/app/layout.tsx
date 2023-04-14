"use client";

import "./globals.css";

import { RoleProvider } from "./RoleContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <RoleProvider>
        <body>{children}</body>
      </RoleProvider>
    </html>
  );
}
