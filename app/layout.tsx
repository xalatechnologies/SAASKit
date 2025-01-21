import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { NavHeader } from '@/components/nav-header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Modern Next.js Application',
  description: 'A production-ready Next.js application with advanced UI components',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {/* Only show NavHeader on non-dashboard routes */}
          <div className="[&:has([data-dashboard-layout])]:hidden">
            <NavHeader />
          </div>
          {children}
        </Providers>
      </body>
    </html>
  )
}