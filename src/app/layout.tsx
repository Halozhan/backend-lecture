import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "나의 웹 앱",
  description: "나의 웹 앱에 의해 생성됨",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header
          style={{
            backgroundColor: "lightblue",
            padding: "1rem",
            textAlign: "center",
            marginBottom: "1rem",
            color: "black",
            fontWeight: "bold",
          }}
        >
          <h1>헤더입니다.</h1>
        </header>
        {children}
        <footer
          style={{
            textAlign: "center",
            padding: "1rem",
            marginTop: "1rem",
            backgroundColor: "lightgreen",
          }}
        >
          This is the footer.
        </footer>
      </body>
    </html>
  );
}
