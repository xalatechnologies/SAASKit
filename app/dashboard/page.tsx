"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  BarChart3,
  Users,
  ShoppingCart,
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  DollarSign,
  Activity
} from "lucide-react"

const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    increasing: true,
    icon: DollarSign,
    description: "Compared to last month"
  },
  {
    title: "Active Users",
    value: "2,338",
    change: "+15.3%",
    increasing: true,
    icon: Users,
    description: "Active users this week"
  },
  {
    title: "Sales",
    value: "1,229",
    change: "-5.4%",
    increasing: false,
    icon: ShoppingCart,
    description: "Total sales this month"
  },
]

const quickActions = [
  { title: "View Reports", icon: BarChart3, description: "View detailed analytics" },
  { title: "Update Profile", icon: Users, description: "Manage your account" },
  { title: "Performance", icon: Activity, description: "Check system status" }
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Welcome back to your dashboard overview.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Button variant="default" size="sm" className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            View Analytics
          </Button>
        </motion.div>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6 hover:shadow-lg transition-all duration-200">
              <div className="flex items-center justify-between">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
                <span
                  className={`flex items-center text-sm font-medium ${
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
              <div className="mt-4 space-y-1">
                <p className="text-2xl font-bold tracking-tight">{stat.value}</p>
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </p>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="p-6 lg:col-span-4 hover:shadow-lg transition-all duration-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold">Recent Activity</h2>
              <p className="text-sm text-muted-foreground">
                Your latest transactions and updates
              </p>
            </div>
          </div>
          <div className="mt-4 space-y-4">
            {[1, 2, 3].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 rounded-lg border p-4 hover:bg-muted/50 transition-colors duration-200"
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

        <Card className="p-6 lg:col-span-3 hover:shadow-lg transition-all duration-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold">Quick Actions</h2>
              <p className="text-sm text-muted-foreground">
                Frequently used features
              </p>
            </div>
          </div>
          <div className="mt-4 grid gap-4">
            {quickActions.map((action, i) => (
              <motion.button
                key={action.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 w-full rounded-lg border p-4 text-left hover:bg-muted/50 transition-all duration-200"
              >
                <div className="p-2 bg-primary/10 rounded-lg">
                  <action.icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{action.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {action.description}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}