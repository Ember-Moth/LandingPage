'use client'

import Image from 'next/image'
import Link from 'next/link'
import '/public/css/main.BuTeG91x.css'
import '/public/css/about.D3sawUWR.css'
import ThemeToggle from '@/components/ThemeToggle'
import Navbar from '@/components/Navbar'

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
          <div className="flex flex-row items-center justify-between w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 gap-12">
            <div className="w-[45%] text-left">
              <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl">
                Hello, I'm Kai.
              </h1>
              <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                A passionate frontend developer with a keen eye for design and a love for creating beautiful, functional web experiences.
              </p>
              <div className="flex flex-row gap-4 mt-8">
                <Link
                  href="/projects"
                  className="px-4 py-2 text-sm font-medium text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100 transition-all duration-300 hover:scale-105"
                >
                  View Projects
                </Link>
                <Link
                  href="/posts"
                  className="px-4 py-2 text-sm font-medium text-neutral-900 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50 dark:bg-neutral-900 dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-800 transition-all duration-300 hover:scale-105"
                >
                  Read Posts
                </Link>
              </div>
            </div>

            <div className="w-[45%] flex items-center justify-center">
              <div className="relative w-[500px] h-[600px] rounded-full overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
                <Image
                  src="/assets/images/photo.png"
                  alt="Kai's photo"
                  fill
                  className="object-contain"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 