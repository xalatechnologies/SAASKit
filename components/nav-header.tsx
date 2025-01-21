"use client"

import { motion } from "framer-motion"
import { Code2, Github, UserCircle } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/lib/auth"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"

export function NavHeader() {
  const { user, signOut } = useAuth()

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-6"
        >
          <Link href="/" className="flex items-center space-x-2">
            <Code2 className="h-6 w-6" />
            <span className="font-bold">Modern Next.js</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium transition-colors hover:text-primary">
              Features
            </Link>
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
          </nav>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          <Link 
            href="https://github.com" 
            target="_blank"
            className="hidden sm:flex"
          >
            <Github className="h-5 w-5" />
          </Link>
          <ThemeToggle />
          {user ? (
            <Button
              variant="ghost"
              onClick={signOut}
              className="flex items-center gap-2"
              aria-label="Sign out of your account"
            >
              <UserCircle className="h-[18px] w-[18px]" />
              <span className="hidden sm:inline">Sign Out</span>
            </Button>
          ) : (
            <Link
              href="/login"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:text-sm md:px-4 md:py-2"
              role="button"
              aria-label="Sign in to your account"
              data-testid="signin-button"
            >
              <UserCircle className="h-[18px] w-[18px] sm:mr-2" />
              <span className="hidden sm:inline">Sign In</span>
            </Link>
          )}
        </motion.div>
      </div>
    </motion.header>
  )
}