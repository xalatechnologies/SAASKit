"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Sidebar } from "@/components/dashboard/sidebar"
import { DashboardHeader } from "@/components/dashboard/header"
import { useAuth } from "@/lib/auth"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const { user } = useAuth()
  const router = useRouter()
  const isMobile = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false)
    } else {
      setSidebarOpen(true)
    }
  }, [isMobile])

  useEffect(() => {
    if (!user) {
      router.push("/login")
    }
  }, [user, router])

  if (!user) {
    return null
  }

  return (
    <div 
      data-testid="dashboard-layout"
      data-dashboard-layout
      className="relative min-h-screen bg-background"
    >
      <DashboardHeader 
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        sidebarOpen={sidebarOpen}
      />
      <div className="flex h-[calc(100vh-4rem)]">
        <AnimatePresence mode="wait" initial={false}>
          {sidebarOpen && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="z-30"
            >
              <Sidebar />
            </motion.div>
          )}
        </AnimatePresence>
        <motion.main
          layout
          data-testid="dashboard-content"
          className="flex-1 overflow-auto p-6 lg:p-8"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="mx-auto max-w-7xl space-y-6">
            {children}
          </div>
        </motion.main>
      </div>
    </div>
  )
}