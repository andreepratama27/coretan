import Navbar from "./components/Navbar";
import "./globals.css";

import localFont from "next/font/local";

const virgil = localFont({
  src: "./fonts/Virgil.woff2",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main
          className={`relative w-full h-screen bg-black ${virgil.className}`}
        >
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
