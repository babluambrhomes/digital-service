"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export function BlogCard({ post, index = 0 }: BlogCardProps) {
  const initials = post.author
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link
        href={`/blog/${post.id}`}
        className="group block h-full"
      >
        <div
          className="flex h-full flex-col rounded-3xl border-2 border-dashed border-border bg-card paper-card overflow-hidden hand-shadow hand-shadow-hover transition-all duration-200 hover:-translate-y-1"
          style={{ filter: "url(#sketchy)" }}
        >
          <div className={`h-1.5 w-full bg-gradient-to-r ${post.accent}`} />

          <div className="p-4 pb-0">
            <div className="relative overflow-hidden rounded-2xl border-2 border-border">
              <img
                src={post.image}
                alt={post.title}
                className="h-36 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                className={`absolute bottom-3 left-3 rounded-full bg-gradient-to-r ${post.accent} px-3 py-1 font-patrick text-xs font-bold text-white border-2 border-white/30 shadow-md`}
              >
                {post.category}
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col p-4">
            <div className="flex items-center gap-3 font-patrick text-xs text-muted-foreground mb-2.5">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {post.date}
              </span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground" />
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>

            <h2 className="font-caveat text-xl font-bold mb-2 line-clamp-1 leading-snug group-hover:text-primary transition-colors">
              {post.title}
            </h2>
            <p className="font-kalam text-sm text-muted-foreground leading-relaxed line-clamp-2 ">
              {post.excerpt}
            </p>

            <div className="mt-4 flex items-center justify-between border-t-2 border-dashed border-border pt-3">
              <div className="flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${post.accent} text-white font-patrick text-xs font-bold`}
                >
                  {initials}
                </div>
                <span className="font-patrick text-xs text-muted-foreground">
                  {post.author}
                </span>
              </div>
              <span className="inline-flex items-center gap-1 font-patrick text-sm font-bold text-primary">
                Read Article
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
