import type { Metadata } from "next";
import Preloader from "./components/preloader/Index";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhi Portofolio",
  description: "portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Preloader>{children}</Preloader>
      </body>
    </html>
  );
}
