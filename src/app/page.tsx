'use client'

import Link from "next/link";
import Image from "next/image";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { homeConfig } from '@/config/home'
import { globalConfig } from "@/config/global";

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    setMounted(true)
    // Check if user has a theme preference
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    }
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="relative h-screen bg-white dark:bg-neutral-950">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:28px_48px]"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[1200px] w-[1200px] rounded-full bg-neutral-400 opacity-10 blur-[100px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <Navbar />
        <div className="flex-1 flex items-center">
          <div className="flex flex-row items-center justify-between w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 gap-12">
            <div className="w-[45%] text-left">
              <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
                {homeConfig.greeting}
              </h1>
              <p className="mt-3 text-lg leading-7 text-neutral-600 dark:text-neutral-400">
                {homeConfig.description}
              </p>
              <div className="flex flex-row gap-4 mt-4">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100 transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  View About
                  <svg 
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2.5} 
                      d="M13 7l5 5m0 0l-5 5m5-5H6" 
                    />
                  </svg>
                </Link>
                <Link
                  href="/posts"
                  className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-neutral-900 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50 dark:bg-neutral-900 dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-800 transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  {homeConfig.buttons.readPosts}
                  <svg 
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2.5} 
                      d="M13 7l5 5m0 0l-5 5m5-5H6" 
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="w-[45%] flex items-center justify-center bg-transparent">
              <div className="relative w-[800px] h-[800px] -mr-[200px]">
                <img
                  src={theme === 'light' ? "/assets/images/tech-background-light.svg" : "/assets/images/tech-background.svg"}
                  alt="Tech background"
                  className="w-full h-full animate-[float_15s_ease-in-out_infinite] hover:scale-125 transition-transform duration-300"
                  style={{
                    animation: 'float 15s ease-in-out infinite',
                  }}
                />
                <style jsx>{`
                  @keyframes float {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                    100% { transform: scale(1); }
                  }
                `}</style>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
} 