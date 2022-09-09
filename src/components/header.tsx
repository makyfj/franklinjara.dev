import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import Link from "next/link"
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
    { label: "Blog", href: "/blog" },
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
          <a className="font-bold">
            <FcHome className="icon-size" />
          </a>
        </Link>
      </motion.li>

      <motion.li
        key={2}
        variants={iconVariants}
        whileHover="whileHover"
        className="font-bold list"
      >
        <Link href="/experience">
          <a className="heading">Experience</a>
        </Link>
      </motion.li>

      <motion.li
        key={3}
        variants={iconVariants}
        whileHover="whileHover"
        className="font-bold list"
      >
        <Link href="/projects">
          <a className="heading">Projects</a>
        </Link>
      </motion.li>

      <motion.li
        key={4}
        variants={iconVariants}
        whileHover="whileHover"
        className="font-bold list"
      >
        <Link href="/contact">
          <a className="heading">Contact</a>
        </Link>
      </motion.li>

      <motion.li
        key={5}
        variants={iconVariants}
        whileHover="whileHover"
        className="font-bold list"
      >
        <Link href="/blog">
          <a className="heading">Blog</a>
        </Link>
      </motion.li>

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
