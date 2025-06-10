'use client';

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { postsConfig } from "@/config/posts";

export default function Posts() {
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const filteredPosts = postsConfig.posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
              {postsConfig.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400 sm:leading-7 lg:leading-8 sm:text-base lg:text-lg">
              {postsConfig.description}
            </p>
            <div className="mt-6">
              <input
                type="text"
                placeholder="Search posts..."
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-neutral-900 dark:text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <Link
                  key={index}
                  href={`/posts/${post.slug}`}
                  className="group relative flex flex-col overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950"
                >
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                        {post.date} · {post.readTime}
                      </p>
                      <div className="mt-2 block">
                        <p className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                          {post.title}
                        </p>
                        <p className="mt-3 text-base text-neutral-500 dark:text-neutral-400">
                          {post.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-neutral-500 dark:text-neutral-400">
                  {postsConfig.noPosts}
                </p>
              </div>
            )}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
} 