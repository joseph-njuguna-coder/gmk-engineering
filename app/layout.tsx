import type { Metadata } from "next";
import { headers } from "next/headers";
import { Fira_Sans_Condensed, Noto_Serif_Lao } from "next/font/google";
import InlineScript from "@/components/InlineScript";
import "./globals.css";

const notoSerifLao = Noto_Serif_Lao({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const firaSansCondensed = Fira_Sans_Condensed({
  subsets: ["latin"],
  variable: "--font-fira-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GMK Engineering — Industrial Solutions in Nairobi",
  description:
    "GMK Engineering delivers full-spectrum industrial solutions in Nairobi — mill installation, metal fabrication, electrical panels, generators, and energy auditing for Kenyan industry.",
  openGraph: {
    title: "GMK Engineering — Industrial Solutions in Nairobi",
    description:
      "Full-spectrum industrial engineering in Kenya. Mill installation, metal fabrication, electrical panels, energy auditing, and machine importation.",
    type: "website",
  },
};

const themeInit = `(function(){try{var s=localStorage.getItem("theme");var h=document.documentElement;if(s){h.setAttribute("data-theme",s)}else{h.setAttribute("data-theme","light")}}catch(e){}})()`;

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <html
      lang="en"
      data-theme="light"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${notoSerifLao.variable} ${firaSansCondensed.variable}`}
    >
      <head>
        <InlineScript nonce={nonce} html={themeInit} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}