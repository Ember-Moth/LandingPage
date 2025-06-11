'use client';

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useParams } from "next/navigation";
import { postsConfig } from "@/config/posts";

export default function Post() {
  const [mounted, setMounted] = useState(false);
  const [post, setPost] = useState<any>(null);
  const params = useParams();

  useEffect(() => {
    setMounted(true);
    if (params.slug) {
      const foundPost = postsConfig.posts.find(p => p.slug === `posts/${params.slug}`);
      if (foundPost) {
        setPost(foundPost);
      }
    }
  }, [params.slug]);

  if (!mounted || !post) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:28px_48px] -z-10"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[1200px] w-[1200px] rounded-full bg-neutral-400 opacity-10 blur-[100px]"></div>
      </div>

      <Navbar />

      <main className="flex-grow">
        <article className="relative z-20 w-[896px] mx-auto mt-32 mb-12">
          <div className="prose dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
} 