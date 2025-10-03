import type { ReactNode } from 'react'

import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import { Footer } from '@/components/footer'
import { Nav } from '@/components/nav'
import { ThemeProvider } from '@/components/ui/theme-provider'

import appCss from '@/styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Jan-Yaeger Dhillon',
      },
      {
        name: 'description',
        content: 'Jan-Yaeger Dhillon portfolio site',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
          enableSystem
        >
          <div id="top" className="min-h-dvh flex flex-col text-sm md:text-base">
            <Nav />
            <main className="w-full flex flex-1 flex-col justify-start mt-20 pb-10">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  )
}
