import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/context/ThemeContext'

export const metadata: Metadata = {
  title: 'Kai Portfolio',
  description: 'Personal portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 