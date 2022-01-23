import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { BsFillMoonFill as Moon, BsFillSunFill as Sun } from "react-icons/bs"
import { FcHome } from "react-icons/fc"
import { GiHamburgerMenu as Hamburger } from "react-icons/gi"

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
        <div className="flex justify-center">
          <button
            onClick={() => setMenuMobile(!menuMobile)}
            className="p-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-500 dark:hover:bg-slate-500 rounded"
          >
            <Hamburger className="icon-size" />
          </button>
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
      <Link href="/">
        <a>
          <FcHome className="icon-size" />
        </a>
      </Link>

      <Link href="/experience">
        <a className="heading">Experience</a>
      </Link>
      <Link href="/projects">
        <a className="heading">Projects</a>
      </Link>
      <Link href="/contact">
        <a className="heading">Contact</a>
      </Link>
      <Link href="/">
        <a className="heading">Blog</a>
      </Link>
      {theme === "dark" ? (
        <button onClick={toggleTheme}>
          <Moon className="theme-mode" />
        </button>
      ) : (
        <button onClick={toggleTheme}>
          <Sun className="theme-mode" />
        </button>
      )}
    </>
  )
}
