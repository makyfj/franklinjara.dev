import { Inter as FontSans } from "next/font/google"
import { Metadata } from "next"

import "../styles/tailwind.css"
import Header from "src/components/common/header"
import { cn } from "src/utils/tailwindcss"
import ThemeProvider from "src/components/theme-provider"
import Footer from "src/components/common/footer"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Franklin Jara | Software Engineer",
  description:
    "Franklin Jara is a Software Engineer @ Cherry Hill Programs and Student @ Adelphi University pursuing a Master's Degree in Computer Science with specialization in Software Engineering.",
  metadataBase: new URL("https://acme.com/api"),
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
  colorScheme: "dark",
  creator: "Franklin Jara",
  publisher: "Franklin Jara",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Franklin Jara | Software Engineer",
    description:
      "Franklin Jara is a Software Engineer @ Cherry Hill Programs and Student @ Adelphi University pursuing a Master's Degree in Computer Science with specialization in Software Engineering.",
    url: "https://franklinjara.dev",
    siteName: "Franklin Jara | Software Engineer",
    images: [
      {
        url: "https://franklinjara.dev/images/Franklin.webp",
        width: 800,
        height: 600,
        alt: "Franklin Jara | Software Engineer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-white font-sans text-slate-900 antialiased dark:bg-slate-900 dark:text-slate-50",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col gap-4">
            <Header />
            <div className="container flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
