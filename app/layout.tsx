import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Product Page Optimisation",
  description: "Tech Challenge ",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
