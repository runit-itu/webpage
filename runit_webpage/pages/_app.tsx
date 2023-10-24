import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "900",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )} `}
    >
      <Component {...pageProps} />
    </div>
  );
}
