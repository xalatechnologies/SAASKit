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
      className="fixed bottom-0 left-0 top-0 z-40 flex w-72 flex-col border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:static"
      data-testid="sidebar"
    >
      <div className="flex h-16 items-center gap-2 border-b px-6">
        <Code2 className="h-6 w-6 text-primary" />
        <span className="font-bold">Dashboard</span>
      </div>

      <nav className="flex-1 space-y-1 p-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
                isActive 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>

      <div className="border-t p-4">
        <div className="flex items-center gap-3 rounded-lg bg-muted/50 px-3 py-2">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
            <UserCircle className="h-5 w-5 text-primary" />
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