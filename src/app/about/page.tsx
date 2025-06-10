'use client';

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="min-h-screen flex flex-col">
      <div className="relative flex-grow flex flex-col">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:28px_48px] -z-10"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[1200px] w-[1200px] rounded-full bg-neutral-400 opacity-10 blur-[100px]"></div>
        </div>

        <Navbar />

        <section className="relative z-20 w-[896px] mx-auto mt-32 mb-12">
          <div className="relative z-20 w-full mx-auto lg:mx-0">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl lg:text-4xl">
              About Me
            </h2>
            <div className="flex flex-col md:flex-row gap-8 mt-3 sm:mt-4 lg:mt-6">
              <div className="w-full md:w-1/2 flex flex-col">
                <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400 sm:leading-7 lg:leading-8 sm:text-base lg:text-lg">
                  Hello 👋 I'm a frontend engineer from Nanjing, China. I'm passionate about building new products and learning new technology.
                </p>
                <div className="mt-auto pt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-full">JavaScript</span>
                  <span className="px-3 py-1 text-sm bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-full">TypeScript</span>
                  <span className="px-3 py-1 text-sm bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-full">React</span>
                  <span className="px-3 py-1 text-sm bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-full">Next.js</span>
                  <span className="px-3 py-1 text-sm bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-full">Node.js</span>
                  <span className="px-3 py-1 text-sm bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-full">Vue</span>
                  <span className="px-3 py-1 text-sm bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-full">Tailwind CSS</span>
                  <span className="px-3 py-1 text-sm bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-full">Git</span>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-end">
                <div className="relative w-[360px] h-[360px]">
                  <Image
                    src="/assets/images/about/coder.jpg"
                    alt="Profile"
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover rounded-xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row mt-20">
            <div className="flex-1">
              <h2 className="mb-2 text-2xl font-bold dark:text-neutral-200">
                Experience
              </h2>
              <div className="py-10">
                <div className="pb-10 border-l border-gray-200 last:border-l-0 dark:border-neutral-700">
                  <div className="relative flex flex-col justify-start pl-12">
                    <div className="absolute top-0 left-0 z-40 flex items-center justify-center -translate-x-1/2 bg-white border rounded-full dark:bg-neutral-950 w-14 h-14 border-neutral-300 dark:border-neutral-700">
                      <svg className="w-8 h-8 text-neutral-700 dark:text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <p className="text-xs uppercase text-neutral-400 dark:text-neutral-500 trackign-widest">June 2018 · Present</p>
                    <h3 className="my-1 text-lg font-bold dark:text-neutral-100">Front-end Engineer</h3>
                    <p className="mb-1 text-sm font-medium dark:text-neutral-300">Full Truck Alliance</p>
                    <p className="text-sm font-light text-neutral-600 dark:text-neutral-400">Responsible for customer service and CRM system front-end development.</p>
                  </div>
                </div>
                <div className="pb-10 border-l border-gray-200 last:border-l-0 dark:border-neutral-700">
                  <div className="relative flex flex-col justify-start pl-12">
                    <div className="absolute top-0 left-0 z-40 flex items-center justify-center -translate-x-1/2 bg-white border rounded-full dark:bg-neutral-950 w-14 h-14 border-neutral-300 dark:border-neutral-700">
                      <svg className="w-8 h-8 text-neutral-700 dark:text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-xs uppercase text-neutral-400 dark:text-neutral-500 trackign-widest">July 2015 · June 2018</p>
                    <h3 className="my-1 text-lg font-bold dark:text-neutral-100">Front-end Engineer</h3>
                    <p className="mb-1 text-sm font-medium dark:text-neutral-300">YOHO!</p>
                    <p className="text-sm font-light text-neutral-600 dark:text-neutral-400">Responsible for mobile front-end development of e-commerce platform.</p>
                  </div>
                </div>
                <div className="pb-10 border-l border-gray-200 last:border-l-0 dark:border-neutral-700">
                  <div className="relative flex flex-col justify-start pl-12">
                    <div className="absolute top-0 left-0 z-40 flex items-center justify-center -translate-x-1/2 bg-white border rounded-full dark:bg-neutral-950 w-14 h-14 border-neutral-300 dark:border-neutral-700">
                      <svg className="w-8 h-8 text-neutral-700 dark:text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                      </svg>
                    </div>
                    <p className="text-xs uppercase text-neutral-400 dark:text-neutral-500 trackign-widest">September 2014 · July 2015</p>
                    <h3 className="my-1 text-lg font-bold dark:text-neutral-100">Node.JS Developer</h3>
                    <p className="mb-1 text-sm font-medium dark:text-neutral-300">WuLian</p>
                    <p className="text-sm font-light text-neutral-600 dark:text-neutral-400">Intern, involved in the development of Internet of Things cloud systems.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[360px] ml-8">
              <h2 className="mb-2 text-2xl font-bold dark:text-neutral-200">Let's Connect</h2>
              <div className="py-[30px]">
                <p className="text-sm leading-6 text-gray-600 dark:text-neutral-400 sm:leading-7 lg:leading-8 sm:text-base lg:text-lg">
                  If you want to stay up to date with my work be sure to <a href="https://x.com/0xKaibi" target="_blank" className="text-indigo-600 underline">follow me on twitter</a>, or you can send me an <a href="mailto:astro-aria#miantiao.me" className="text-indigo-600 underline">email</a> and I'll be sure to get back to you.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
} 