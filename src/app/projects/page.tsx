'use client';

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const projects = [
  {
    title: "TempMail.Best",
    description: "Best Temporary Email.",
    href: "https://tempmail.best",
    imageUrl: "/assets/images/projects/tempmail.best.png"
  },
  {
    title: "DNS.Surf",
    description: "Querying DNS Resolution Results in Different Regions Worldwide.",
    href: "https://dns.surf",
    imageUrl: "/assets/images/projects/dns.surf.png"
  },
  {
    title: "HTML.ZONE",
    description: "Web Toolbox.",
    href: "https://html.zone",
    imageUrl: "/assets/images/projects/html.zone.png"
  },
  {
    title: "Sink",
    description: "A Simple / Speedy / Secure Link Shortener with Analytics.",
    href: "https://sink.cool",
    imageUrl: "/assets/images/projects/sink.cool.png"
  },
  {
    title: "BroadcastChannel",
    description: "Turn your Telegram Channel into a MicroBlog.",
    href: "https://github.com/ccbikai/BroadcastChannel",
    imageUrl: "/assets/images/projects/broadcast-channel.png"
  },
  {
    title: "L(O*62).ONG",
    description: "Make your URL looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger",
    href: "https://loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo.ong",
    imageUrl: "/assets/images/projects/long.png"
  }
];

export default function Projects() {
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

        <section className="relative z-20 max-w-5xl mx-auto mt-32 mb-12 px-7 lg:px-0">
          <div className="relative z-20 w-full mx-auto lg:mx-0">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl lg:text-4xl">
              My Projects
            </h2>
            <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400 sm:mt-4 lg:mt-6 sm:leading-7 lg:leading-8 sm:text-base lg:text-lg">
              Here are some of the current projects I've been working on. I really enjoy creating new projects and coming up with new ideas. I'm always working on something new, so check back often!
            </p>
          </div>

          <div className="z-50 grid items-stretch w-full grid-cols-1 my-8 gap-7 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.href}
                target="_blank"
                className="relative flex flex-col items-stretch duration-300 ease-out p-7 sm:p-3 group h-100 rounded-2xl"
              >
                <span className="absolute inset-0 z-20 block w-full h-full duration-300 ease-out bg-transparent border border-transparent border-dashed group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:border group-hover:border-neutral-300 dark:group-hover:border-neutral-600 group-hover:border-dashed rounded-2xl group-hover:bg-white dark:group-hover:bg-neutral-950"></span>
                <span className="absolute inset-0 z-10 block w-full h-full duration-300 ease-out border border-dashed rounded-2xl border-neutral-300 dark:border-neutral-600 group-hover:translate-x-1 group-hover:translate-y-1"></span>
                <span className="relative z-30 block duration-300 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1">
                  <span className="block w-full">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={800}
                      height={450}
                      className="w-full h-auto rounded-lg aspect-[16/9] object-cover"
                    />
                  </span>
                  <span className="block w-full px-1 mt-5 mb-1 sm:mt-3">
                    <span className="flex items-center mb-0 text-base font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                      <span>{project.title}</span>
                      <svg
                        className="group-hover:translate-x-0 group-hover:translate-y-0 -rotate-45 translate-y-1 -translate-x-1 w-2.5 h-2.5 stroke-current ml-1 transition-all ease-in-out duration-200 transform"
                        viewBox="0 0 13 15"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                          <g id="svg" transform="translate(0.666667, 2.333333)" stroke="currentColor" strokeWidth="2.4">
                            <g>
                              <polyline className="transition-all duration-200 ease-out opacity-0 delay-0 group-hover:opacity-100" points="5.33333333 0 10.8333333 5.5 5.33333333 11"></polyline>
                              <line className="transition-all duration-200 ease-out transform -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:ml-0" x1="10.8333333" y1="5.5" x2="0.833333333" y2="5.16666667"></line>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </span>
                    <span className="text-sm text-neutral-600 dark:text-neutral-400 block truncate">
                      {project.description}
                    </span>
                  </span>
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
} 