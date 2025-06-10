'use client';

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useParams } from "next/navigation";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

export default function Post() {
  const [mounted, setMounted] = useState(false);
  const [content, setContent] = useState("");
  const [frontMatter, setFrontMatter] = useState<any>({});
  const params = useParams();

  useEffect(() => {
    setMounted(true);
    // In a real app, you would fetch the markdown content from an API
    // For now, we'll just show a loading state
    setContent("Loading...");
  }, [params.slug]);

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

        <article className="relative z-20 w-[896px] mx-auto mt-32 mb-12">
          <div className="prose dark:prose-invert max-w-none">
            <h1>{frontMatter.title}</h1>
            <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
              <time>{frontMatter.date}</time>
              <span>•</span>
              <span>{frontMatter.readingTime}</span>
            </div>
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </article>
      </div>

      <Footer />
    </main>
  );
} 