"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import {
  BarChart3,
  Users,
  ShoppingCart,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"

const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    increasing: true,
    icon: BarChart3,
  },
  {
    title: "Active Users",
    value: "2,338",
    change: "+15.3%",
    increasing: true,
    icon: Users,
  },
  {
    title: "Sales",
    value: "1,229",
    change: "-5.4%",
    increasing: false,
    icon: ShoppingCart,
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold"
      >
        Dashboard
      </motion.h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <stat.icon className="h-5 w-5 text-muted-foreground" />
                <span
                  className={`flex items-center text-sm ${
                    stat.increasing ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {stat.change}
                  {stat.increasing ? (
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  ) : (
                    <ArrowDownRight className="ml-1 h-4 w-4" />
                  )}
                </span>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="p-6 lg:col-span-4">
          <h2 className="font-semibold">Recent Activity</h2>
          <div className="mt-4 space-y-4">
            {[1, 2, 3].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 rounded-lg border p-4"
              >
                <div className="h-2 w-2 rounded-full bg-primary" />
                <div className="flex-1">
                  <p className="text-sm font-medium">New user signed up</p>
                  <p className="text-sm text-muted-foreground">2 minutes ago</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>

        <Card className="p-6 lg:col-span-3">
          <h2 className="font-semibold">Quick Actions</h2>
          <div className="mt-4 grid gap-4">
            {["View Reports", "Update Profile", "Settings"].map((action, i) => (
              <motion.button
                key={action}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="w-full rounded-lg border p-4 text-left hover:bg-muted/50"
              >
                {action}
              </motion.button>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}