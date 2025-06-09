'use client';

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";

const POSTS_PER_PAGE = 5;

const allPosts = [
  {
    title: "Run MCP Server in a Docker sandbox",
    description: "Run MCP Server in a Docker sandbox to avoid supply chain attacks.",
    date: "Apr 25, 2025",
    href: "/post/guide-to-running-mcp-server-in-a-sandbox",
    imageUrl: "/assets/images/posts/post1.jpg",
    readingTime: 8
  },
  {
    title: "Use Cloudflare Workers to concat audio files",
    description: "How to use Cloudflare Workers to merge audio files using FFmpeg in the browser.",
    date: "April 19, 2025",
    href: "/post/cloudflare-audio-concat",
    imageUrl: "/assets/images/posts/post2.jpg",
    readingTime: 12
  },
  {
    title: "RSS.Beauty - Make Your RSS Beautiful!",
    description: "Beautify your RSS feeds with RSS.Beauty, featuring elegant interfaces, responsive design, and self-hosting support. Try it now!",
    date: "Dec 31, 2024",
    href: "/post/rss-beauty",
    imageUrl: "/assets/images/posts/post3.jpg",
    readingTime: 6
  },
  {
    title: "Building a Modern Web App with Next.js",
    description: "Learn how to build a modern web application using Next.js, React, and Tailwind CSS.",
    date: "Dec 15, 2024",
    href: "/post/nextjs-web-app",
    imageUrl: "/assets/images/posts/post1.jpg",
    readingTime: 15
  },
  {
    title: "The Future of Web Development",
    description: "Exploring the latest trends and technologies shaping the future of web development.",
    date: "Dec 1, 2024",
    href: "/post/future-web-dev",
    imageUrl: "/assets/images/posts/post2.jpg",
    readingTime: 10
  },
  {
    title: "Mastering TypeScript in 2024",
    description: "A comprehensive guide to TypeScript features and best practices for modern web development.",
    date: "Nov 20, 2024",
    href: "/post/typescript-guide",
    imageUrl: "/assets/images/posts/post3.jpg",
    readingTime: 20
  },
  {
    title: "The Art of Clean Code",
    description: "Learn the principles and practices of writing clean, maintainable code that stands the test of time.",
    date: "Nov 10, 2024",
    href: "/post/clean-code",
    imageUrl: "/assets/images/posts/post1.jpg",
    readingTime: 12
  },
  {
    title: "Building Scalable APIs with Node.js",
    description: "Best practices and patterns for building robust and scalable APIs using Node.js and Express.",
    date: "Oct 28, 2024",
    href: "/post/nodejs-apis",
    imageUrl: "/assets/images/posts/post2.jpg",
    readingTime: 18
  },
  {
    title: "Getting Started with GraphQL",
    description: "A beginner's guide to GraphQL: concepts, implementation, and real-world examples.",
    date: "Oct 15, 2024",
    href: "/post/graphql-intro",
    imageUrl: "/assets/images/posts/post3.jpg",
    readingTime: 14
  },
  {
    title: "The Power of CSS Grid",
    description: "Master CSS Grid layout and create complex, responsive designs with ease.",
    date: "Oct 1, 2024",
    href: "/post/css-grid",
    imageUrl: "/assets/images/posts/post1.jpg",
    readingTime: 9
  }
];

export default function Posts() {
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = allPosts.slice(startIndex, endIndex);

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

        <section className="relative z-20 max-w-4xl mx-auto mt-32 mb-12 px-7 lg:px-0">
          <div className="relative z-20 w-full mx-auto lg:mx-0">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl lg:text-4xl">
                My Writing
              </h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search posts..."
                  className="w-64 px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-100 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                />
                <svg
                  className="absolute right-3 top-2.5 w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="text-neutral-600 dark:text-neutral-400"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="h-[2px] bg-neutral-300 dark:bg-neutral-700 mb-4"></div>
          </div>

          <div className="z-50 flex flex-col items-stretch w-full gap-5">
            {currentPosts.map((post, index) => (
              <PostCard
                key={index}
                title={post.title}
                description={post.description}
                date={post.date}
                href={post.href}
                pattern="dots"
                imageUrl={post.imageUrl}
                readingTime={post.readingTime}
              />
            ))}
          </div>

          <div className="flex justify-center items-center gap-2 mt-8">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium transition-colors ${
                  currentPage === index + 1
                    ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900'
                    : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
} 