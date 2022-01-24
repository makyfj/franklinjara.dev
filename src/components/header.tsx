import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { BsFillMoonFill as Moon, BsFillSunFill as Sun } from "react-icons/bs"
import { FcHome } from "react-icons/fc"
import { GiHamburgerMenu as Hamburger } from "react-icons/gi"
import { motion } from "framer-motion"

import { iconVariants } from "@/utils/animation"

const Header = () => {
  const [mounted, setMounted] = useState<boolean>(false)
  const { theme, setTheme } = useTheme()
  const [menuMobile, setMenuMobile] = useState<boolean>(false)

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

  return (
    <header>
      <div className="hidden sm:visible sm:flex sm:justify-center sm:gap-10 sm:py-5 sm:py-10">
        <NavLinks theme={theme} toggleTheme={toggleTheme} />
      </div>
      <div className="p-4 space-y-2 m-1 sm:hidden text-md">
        <div className="flex">
          <motion.button
            variants={iconVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            onClick={() => setMenuMobile(!menuMobile)}
            className="p-1 bg-slate-300 dark:bg-slate-700 hover:bg-slate-500 dark:hover:bg-slate-500 rounded"
          >
            <Hamburger className="icon-size" />
          </motion.button>
        </div>
        <div
          className={`flex flex-wrap gap-6 justify-center ${
            menuMobile ? "visible" : "hidden"
          }`}
        >
          <NavLinks theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
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
          <a>
            <FcHome className="icon-size" />
          </a>
        </Link>
      </motion.li>

      <motion.li
        key={2}
        variants={iconVariants}
        whileHover="whileHover"
        className="list"
      >
        <Link href="/experience">
          <a className="heading">Experience</a>
        </Link>
      </motion.li>

      <motion.li
        key={3}
        variants={iconVariants}
        whileHover="whileHover"
        className="list"
      >
        <Link href="/projects">
          <a className="heading">Projects</a>
        </Link>
      </motion.li>

      <motion.li
        key={4}
        variants={iconVariants}
        whileHover="whileHover"
        className="list"
      >
        <Link href="/contact">
          <a className="heading">Contact</a>
        </Link>
      </motion.li>

      <motion.li
        key={5}
        variants={iconVariants}
        whileHover="whileHover"
        className="list"
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
          <Moon className="theme-mode" />
        </motion.button>
      ) : (
        <motion.button
          key={6}
          variants={iconVariants}
          whileHover="whileHover"
          onClick={toggleTheme}
        >
          <Sun className="theme-mode" />
        </motion.button>
      )}
    </>
  )
}
