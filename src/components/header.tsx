import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { useRouter } from "next/router"
import { FcHome, FcLandscape, FcNightLandscape } from "react-icons/fc"
import { motion } from "framer-motion"

import { iconVariants } from "@/utils/animation"
import { useWindowSize } from "@/hooks/useWindowSize"
import MenuMobile from "./menu"

const Header = () => {
  const [mounted, setMounted] = useState<boolean>(false)
  const { theme, setTheme } = useTheme()

  const { innerWidth } = useWindowSize()

  const items = [
    { label: "Home", href: "/" },
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "https://blog.franklinjara.dev" },
    { label: "Contact", href: "/contact" },
  ]

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  // When mounted on client, now we can show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <header>
      {innerWidth && innerWidth < 650 ? (
        <MenuMobile items={items} />
      ) : (
        <div className="hidden sm:visible sm:flex sm:justify-center sm:gap-10 sm:py-10">
          <NavLinks theme={theme} toggleTheme={toggleTheme} />
        </div>
      )}
    </header>
  )
}

export default Header

interface NavLinksProps {
  theme: string | undefined
  toggleTheme: () => void
}

const NavLinks = ({ theme, toggleTheme }: NavLinksProps) => {
  const { pathname } = useRouter()
  return (
    <>
      <motion.li
        key={1}
        variants={iconVariants}
        whileHover="whileHover"
        whileTap="whileTap"
        className="list"
      >
        <Link href="/">
          <FcHome className="icon-size font-bold" />
        </Link>
      </motion.li>

      <motion.li
        key={2}
        variants={iconVariants}
        whileHover="whileHover"
        className="font-bold list"
      >
        <Link href="/experience">
          <div
            className={`${
              pathname === "/experience" ? "active-heading" : "heading"
            }`}
          >
            Experience
          </div>
        </Link>
      </motion.li>

      <motion.li
        key={3}
        variants={iconVariants}
        whileHover="whileHover"
        className="font-bold list"
      >
        <Link href="/projects">
          <div
            className={`${
              pathname === "/projects" ? "active-heading" : "heading"
            }`}
          >
            Projects
          </div>
        </Link>
      </motion.li>

      <motion.li
        key={4}
        variants={iconVariants}
        whileHover="whileHover"
        className="font-bold list"
      >
        <Link href="/contact">
          <div
            className={`${
              pathname === "/contact" ? "active-heading" : "heading"
            }`}
          >
            Contact
          </div>
        </Link>
      </motion.li>

      <motion.a
        key={5}
        variants={iconVariants}
        whileHover="whileHover"
        className="font-bold list"
      >
        <a
          href="https://blog.franklinjara.dev"
          className="heading"
          target="_blank"
          rel="noreferrer"
        >
          Blog
        </a>
      </motion.a>

      {theme === "dark" ? (
        <motion.button
          key={6}
          variants={iconVariants}
          whileHover="whileHover"
          onClick={toggleTheme}
        >
          <FcNightLandscape className="theme-mode" />
        </motion.button>
      ) : (
        <motion.button
          key={6}
          variants={iconVariants}
          whileHover="whileHover"
          onClick={toggleTheme}
        >
          <FcLandscape className="theme-mode" />
        </motion.button>
      )}
    </>
  )
}
