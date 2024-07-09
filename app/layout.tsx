import ProgressBarProvider from "@/app/components/Providers/ProgressBar";
import cn from "@/lib/cn";
import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hey Türkiye",
  description: " Hi, I’m Hey Türkiye.",
  themeColor: "#8B5CF6",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  icons: "https://assets.streamlinehq.com/image/private/w_68,h_68,ar_1/f_auto/v1/icons/all-icons/star-w1j72yhobtoofsqzecm16.png/star-3ryseu4vcrtnbmmiufevv.png?_a=DAJFJtWIZAAC",
  openGraph: {
    images: "https://assets.streamlinehq.com/image/private/w_68,h_68,ar_1/f_auto/v1/icons/all-icons/star-w1j72yhobtoofsqzecm16.png/star-3ryseu4vcrtnbmmiufevv.png?_a=DAJFJtWIZAAC",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn("flex flex-col", GeistSans.className, GeistSans.variable)}>
        <ProgressBarProvider>
          {children}
        </ProgressBarProvider>
      </body>
    </html>
  );
}
