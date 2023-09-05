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
      variant="outline"
      size="sm"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
