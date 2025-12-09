import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Italiana } from "next/font/google";

const italiana = Italiana({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-italiana",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={italiana.variable}>
      <Component {...pageProps} />
    </div>
  );
}
