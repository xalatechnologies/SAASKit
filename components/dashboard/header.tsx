"use client"

import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { UserNav } from "@/components/dashboard/user-nav"

interface DashboardHeaderProps {
  onMenuClick: () => void
  sidebarOpen: boolean
}

export function DashboardHeader({ onMenuClick, sidebarOpen }: DashboardHeaderProps) {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      data-testid="dashboard-header"
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="flex h-16 items-center gap-4 px-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={onMenuClick}
          aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
          data-testid="sidebar-toggle"
          className="lg:hidden"
        >
          {sidebarOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
        <div className="ml-auto flex items-center gap-4">
          <ThemeToggle />
          <UserNav />
        </div>
      </div>
    </motion.header>
  )
}