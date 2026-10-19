import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

/* Self-hosted Inter Tight (SIL OFL) — carried over from the studio's site
   template; the closest free match to Helvetica Neue. Kept local so the app
   builds and serves with zero third-party font requests. */
const interTight = localFont({
  src: [
    {
      path: "./fonts/inter-tight-latin.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/inter-tight-latin-italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sakshamfit.github.io/kads-labs/"),
  title: "KADS LABS — Design & Build Studio",
  description:
    "KADS LABS creates interactive, thoughtful and tailor-made websites and digital experiences for businesses that want to be different.",
  openGraph: {
    title: "KADS LABS — Design & Build Studio",
    description:
      "We create interactive, thoughtful and tailor-made digital experiences for businesses that want to be different.",
    images: ["/brand/kads-labs-logo.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
