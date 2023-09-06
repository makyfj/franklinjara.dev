"use client"

import { useWindowSize } from "@/hooks/useWindowSize"
import { Briefcase, ClipboardList, Home, Menu } from "lucide-react"
import Link from "next/link"

import { Button } from "src/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "src/components/ui/dropdown-menu"
import { ModeToggle } from "../mode-toggle"

const Header = () => {
  const { innerWidth } = useWindowSize()
  return (
    <div
      className={`flex items-center my-2 ${
        innerWidth && innerWidth <= 768
          ? "justify-around"
          : "justify-center gap-8"
      }`}
    >
      {innerWidth && innerWidth <= 768 ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" aria-label="Menu">
              <Menu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-auto">
            <Link href="/">
              <DropdownMenuItem className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                <span className="custom-subtle">Home</span>
              </DropdownMenuItem>
            </Link>
            <Link href="/experience">
              <DropdownMenuItem className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                <span className="custom-subtle">Experience</span>
              </DropdownMenuItem>
            </Link>
            <Link href="/projects">
              <DropdownMenuItem className="flex items-center gap-2">
                <ClipboardList className="h-4 w-4" />
                <span className="custom-subtle">Projects</span>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="flex gap-10">
          <Link href="/" className="flex items-center gap-2">
            <Home className="h-6 w-6" />
            <span className="custom-subtle">/</span>
          </Link>
          <Link href="/experience" className="flex items-center gap-2">
            <Briefcase className="h-6 w-6" />
            <span className="custom-subtle">Experience</span>
          </Link>
          <Link href="/projects" className="flex items-center gap-2">
            <ClipboardList className="h-6 w-6" />
            <span className="custom-subtle">Projects</span>
          </Link>
        </div>
      )}
      <ModeToggle />
    </div>
  )
}
export default Header
