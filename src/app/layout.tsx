import { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/react"
import { GeistSans } from "geist/font/sans"
import { SpeedInsights } from "@vercel/speed-insights/next"

import "../styles/tailwind.css"
import ThemeProvider from "src/components/theme-provider"
import Background from "@/components/bg"

export const viewport: Viewport = {
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: "Franklin Jara",
  description:
    "Software Engineer with a passion for techno music and a groove for coding",
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
  twitter: {
    title: "Franklin Jara",
    description:
      "Software Engineer with a passion for coding and grooving to some techno beats",
    images: [
      {
        url: "https://franklinjara.dev/img/Dimmer.jpeg",
        width: 800,
        height: 600,
        alt: "Franklin Jara",
      },
    ],
  },
  openGraph: {
    title: "Franklin Jara",
    description:
      "Software Engineer with a passion for coding and grooving to some techno beats",
    url: "https://franklinjara.dev",
    siteName: "Franklin Jara",
    images: [
      {
        url: "https://franklinjara.dev/img/Dimmer.jpeg",
        width: 800,
        height: 600,
        alt: "Franklin Jara",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
          <SpeedInsights />
          <Background>
            <div className="container flex flex-col items-center justify-center min-h-screen gap-4 my-4">
              {children}
            </div>
          </Background>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
