"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PenLine } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/blog/BlogCard";

export function BlogSection() {
  return (
    <section className="py-20 sm:py-28 kraft-bg relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        <SectionHeading
          badge={{ icon: PenLine, text: "Blog & Insights" }}
          title="Latest Ideas to Help Your"
          highlight="Business Grow"
          subtitle="Practical, no-jargon advice on websites, apps, AI, software, cloud, and digital marketing — written for growing businesses."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.slice(0, 3).map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Button asChild size="lg" className="rounded-full">
            <Link href="/blog" className="group">
              View All Posts
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
