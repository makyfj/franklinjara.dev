"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

import { Button } from "src/components/ui/button"

export function ModeToggle() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, theme } = useTheme()
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      className="p-4 h-16 w-20 rounded-xl transition-color duration-300 hover:border-foreground hover:bg-transparent"
      variant={"outline"}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Moon /> : <Sun />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
