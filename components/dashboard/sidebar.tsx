"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import {
  LayoutDashboard,
  BarChart2,
  Settings,
  UserCircle,
  HelpCircle,
  Code2,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart2 },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
  { name: "Profile", href: "/dashboard/profile", icon: UserCircle },
  { name: "Support", href: "/dashboard/support", icon: HelpCircle },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <motion.aside
      initial={{ x: -280 }}
      animate={{ x: 0 }}
      exit={{ x: -280 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="h-full w-72 flex flex-col glass-effect"
      data-testid="sidebar"
    >
      <div className="flex h-16 items-center gap-2 border-b border-white/10 px-6">
        <Code2 className="h-6 w-6 text-sky-400" />
        <span className="font-bold bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
          Dashboard
        </span>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 relative overflow-hidden group",
                isActive 
                  ? "neon-glow bg-sky-500/10 text-sky-400" 
                  : "text-muted-foreground hover:bg-white/5"
              )}
            >
              <item.icon className={cn(
                "h-5 w-5 transition-colors",
                isActive ? "text-sky-400" : "text-muted-foreground group-hover:text-sky-400"
              )} />
              {item.name}
              {isActive && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute inset-0 rounded-lg neon-border -z-10"
                  transition={{ duration: 0.2 }}
                />
              )}
            </Link>
          )
        })}
      </nav>

      <div className="border-t border-white/10 p-4">
        <div className="flex items-center gap-3 rounded-lg bg-white/5 px-3 py-2 neon-border">
          <div className="h-8 w-8 rounded-full bg-sky-500/10 flex items-center justify-center">
            <UserCircle className="h-5 w-5 text-sky-400" />
          </div>
          <div>
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-muted-foreground">john@example.com</p>
          </div>
        </div>
      </div>
    </motion.aside>
  )
}