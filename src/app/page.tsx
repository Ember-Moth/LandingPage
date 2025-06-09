'use client'

import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import '../styles/globals.css'
import '/public/css/main.BuTeG91x.css'
import '/public/css/about.D3sawUWR.css'

export default function Home() {
  return (
    <main className="antialiased bg-white dark:bg-neutral-950">
      <div className="relative flex flex-col min-h-screen">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:28px_48px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[1200px] w-[1200px] rounded-full bg-neutral-400 opacity-10 blur-[100px]"></div>
        </div>

        <Navbar />

        <div className="flex-grow">
          <div className="relative flex flex-col items-center justify-center px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto mt-20 text-center">
              <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl">
                Hi, I'm Kai
              </h1>
              <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                I'm a software engineer and writer. I build products that help people create and share their ideas.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link
                  href="/projects"
                  className="px-4 py-2 text-sm font-medium text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
                >
                  View Projects
                </Link>
                <Link
                  href="/posts"
                  className="px-4 py-2 text-sm font-medium text-neutral-900 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50 dark:bg-neutral-900 dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-800"
                >
                  Read Posts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 