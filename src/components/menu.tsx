import Link from "next/link"
import { useTheme } from "next-themes"
import { Menu as HeadlessMenu, Transition } from "@headlessui/react"
import { Fragment, useEffect, useState } from "react"
import { FaHamburger } from "react-icons/fa"
import { FcLandscape, FcNightLandscape } from "react-icons/fc"
import { motion } from "framer-motion"

import { iconVariants } from "@/utils/animation"

interface MenuMobileProps {
  items: { label: string; href: string }[]
}

const MenuMobile = ({ items }: MenuMobileProps) => {
  const [mounted, setMounted] = useState<boolean>(false)
  const { theme, setTheme } = useTheme()

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
    <div className="container flex items-center justify-around p-4 mx-auto">
      <HeadlessMenu>
        <div>
          <HeadlessMenu.Button className="">
            <motion.div key={6} variants={iconVariants} whileHover="whileHover">
              <FaHamburger className="icon-size" />
            </motion.div>
          </HeadlessMenu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <HeadlessMenu.Items className="absolute w-32 mt-2 origin-top-left rounded-md shadow-lg top-10 left-24 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              {items.map((item, i) => (
                <HeadlessMenu.Item key={i}>
                  {({ active }) => (
                    <div
                      className={`${
                        active
                          ? "bg-slate-700 text-slate-100 dark:bg-slate-100 dark:text-slate-700"
                          : "text-slate-700 dark:text-slate-100"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <Link href={item.href}>
                        <a className="text-center">{item.label}</a>
                      </Link>
                    </div>
                  )}
                </HeadlessMenu.Item>
              ))}
            </div>
          </HeadlessMenu.Items>
        </Transition>
      </HeadlessMenu>

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
    </div>
  )
}

export default MenuMobile
