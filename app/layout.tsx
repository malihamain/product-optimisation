import "./globals.css";
import type { ReactNode } from "react";
import Snow from "@/components/products/Snow";

export const metadata = {
  title: "Product Page Optimisation",
  description: "Tech Challenge ",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Snow />
    </html>
  );
}
