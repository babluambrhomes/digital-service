import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { DarkCTA } from "@/components/shared/DarkCTA";
import { BlogCard } from "@/components/blog/BlogCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.id === slug);
  if (!post) return {};

  const title = `${post.title} | GrowthZone Blog`;
  return {
    title,
    description: post.excerpt,
    keywords: [
      post.category.toLowerCase(),
      "digital services",
      "business growth",
      "india",
      "seo",
    ],
    openGraph: {
      title,
      description: post.excerpt,
      url: `https://growthzone.in/blog/${post.id}`,
      siteName: "GrowthZone",
      locale: "en_IN",
      type: "article",
      images: [
        {
          url: "https://images.unsplash.com/photo-1487611459768-bd414656ea10?w=1200&h=630&fit=crop",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.excerpt,
    },
    alternates: {
      canonical: `/blog/${post.id}`,
    },
  };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.id,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.id === slug);

  if (!post) {
    notFound();
  }

  const related = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3);
  const initials = post.author
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <>
      <section className="kraft-bg relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
        </div>

        <div className="container-custom relative z-10 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <span
              className={`inline-block rounded-full bg-gradient-to-r ${post.accent} px-4 py-1.5 font-patrick text-sm font-bold text-white border-2 border-white/30 shadow-md mb-6`}
            >
              {post.category}
            </span>
            <h1 className="font-caveat text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-4 font-patrick text-sm text-muted-foreground mb-8">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground" />
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground" />
              <span className="inline-flex items-center gap-2">
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br ${post.accent} text-white text-xs font-bold`}
                >
                  {initials}
                </span>
                {post.author}
              </span>
            </div>

            <div
              className="overflow-hidden rounded-3xl border-2 border-dashed border-border paper-card hand-shadow"
              style={{ filter: "url(#sketchy)" }}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full object-cover aspect-[16/9]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding kraft-bg">
        <div className="container-custom max-w-3xl">
          <p className="font-kalam text-base md:text-lg text-muted-foreground leading-relaxed mb-10 border-l-4 border-primary/30 pl-4">
            {post.excerpt}
          </p>

          <div className="space-y-10">
            {post.content.map((section, i) => (
              <div key={i}>
                <h2 className="font-caveat text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <span
                    className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${post.accent} text-white font-patrick text-sm font-bold`}
                  >
                    {i + 1}
                  </span>
                  {section.heading}
                </h2>
                {section.paragraphs.map((para, j) => (
                  <p
                    key={j}
                    className="font-kalam text-sm md:text-base text-muted-foreground leading-relaxed mb-4 last:mb-0"
                  >
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl border-2 border-dashed border-border bg-card p-6 paper-card">
            <div className="flex items-center gap-3">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${post.accent} text-white font-patrick font-bold`}
              >
                {initials}
              </div>
              <div>
                <p className="font-patrick text-sm font-bold">By {post.author}</p>
                <p className="font-kalam text-xs text-muted-foreground">
                  Helping businesses grow with digital services since 2024
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-patrick text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding kraft-bg">
        <div className="container-custom">
          <SectionHeading
            title="More Articles for Your"
            highlight="Business"
            subtitle="Simple strategies you can apply today to get more customers online."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {related.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>

      <DarkCTA
        title="Want These Strategies Applied to Your Business?"
        subtitle="Every article we write is a service we deliver. Let us handle the execution for you — free consultation, no obligations."
        buttonText="Get Free Consultation"
      />
    </>
  );
}
