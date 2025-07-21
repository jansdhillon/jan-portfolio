import type { Metadata, Viewport } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";

export const metadata: Metadata = {
  title: "Jan-Yaeger Dhillon",
  description: "My portfolio",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body
        className={`${GeistSans.className} bg-background text-sm md:text-base  flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
          enableSystem
        >
          <div className="flex flex-col min-h-dvh">
            <Nav />
            <main className="w-full flex flex-1 flex-col justify-start mt-20 pb-10">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
      <Analytics />
    </html>
  );
}
