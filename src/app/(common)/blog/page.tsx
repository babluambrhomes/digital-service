"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BLOG_POSTS } from "@/lib/blog";
import { PageBanner } from "@/components/shared/PageBanner";
import { DarkCTA } from "@/components/shared/DarkCTA";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/blog/BlogCard";

const INITIAL_COUNT = 6;
const STEP = 6;

export default function BlogPage() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const hasMore = visibleCount < BLOG_POSTS.length;
  const visiblePosts = BLOG_POSTS.slice(0, visibleCount);

  return (
    <>
      <PageBanner
        badge="GrowthZone Blog"
        title="Ideas & Insights to Help Your"
        titleHighlight="Business Grow"
        description="Practical, no-jargon advice on websites, apps, AI, software, cloud, and digital marketing — written for growing businesses like yours."
        imageSrc="https://images.unsplash.com/photo-1487611459768-bd414656ea10?w=1920&h=600&fit=crop"
        imageAlt="Blog"
      />

      <section className="section-padding kraft-bg">
        <div className="container-custom">
          <SectionHeading
            title="Latest Articles"
            subtitle="Simple strategies you can use to get more customers online — one article at a time."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visiblePosts.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            {hasMore ? (
              <Button
                size="lg"
                className="rounded-full"
                onClick={() => setVisibleCount((c) => c + STEP)}
              >
                Load More Posts
              </Button>
            ) : (
              <p className="font-patrick text-sm text-muted-foreground">
                That&apos;s all for now — new articles coming soon!
              </p>
            )}
          </motion.div>
        </div>
      </section>

      <DarkCTA
        title="Want These Tips Applied to Your Business?"
        subtitle="Every strategy on our blog is something we do for clients every day. Let us handle the execution for you."
        buttonText="Get Free Consultation"
      />
    </>
  );
}
