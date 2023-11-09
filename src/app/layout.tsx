import { Inter as FontSans } from "next/font/google"
import { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/react"
import { GeistSans } from "geist/font/sans"

import "../styles/tailwind.css"
import Header from "src/components/common/header"
import { cn } from "src/lib/utils"
import ThemeProvider from "src/components/theme-provider"
import Footer from "src/components/common/footer"
import Background from "@/components/bg"

export const viewport: Viewport = {
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: "Franklin Jara | Software Engineer",
  description: "Software Engineer @ Cherry Hill Programs",
  metadataBase: new URL("https://franklinjara.dev"),
  generator: "Franklin Jara",
  applicationName: "Franklin Jara",
  keywords: [
    "Franklin Jara",
    "Software Engineer",
    "Full Stack Developer",
    "Hacker",
    "Coding",
  ],
  authors: [{ name: "Franklin Jara", url: "https://github.com/makyfj" }],
  creator: "Franklin Jara",
  publisher: "Franklin Jara",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Franklin Jara | Software Engineer",
    description: "Software Engineer @ Cherry Hill Programs",
    url: "https://franklinjara.dev",
    siteName: "Franklin Jara | Software Engineer",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/65879341?v=4",
        width: 800,
        height: 600,
        alt: "Franklin Jara | Software Engineer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={GeistSans.className}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Background>
            <div className="flex flex-col gap-4 min-h-screen">{children}</div>
          </Background>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
