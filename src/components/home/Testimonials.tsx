"use client";

import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TESTIMONIALS } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const avatarImages = [
  "https://images.unsplash.com/photo-1774437787442-d58f8534ba9f?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1774850235906-f5eaafb425ac?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1590473159791-1d514fd3656e?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1768221677463-191fc4e15690?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1766716946030-5869da2a0ead?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1779231127485-672de7d385b4?w=200&h=200&fit=crop&crop=face",
];

export function Testimonials() {
  return (
    <section className="section-padding relative overflow-hidden kraft-bg">
      <div className="absolute top-20 left-10 opacity-5 pointer-events-none">
        <svg className="h-64 w-64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" /><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" /></svg>
      </div>
      <div className="absolute bottom-20 right-10 opacity-5 pointer-events-none">
        <svg className="h-48 w-48 rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" /><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" /></svg>
      </div>

      <div className="container-custom relative">
        <SectionHeading
          title="What Our Clients Say About Us"
          subtitle="Don't just take our word for it — hear from real businesses we've helped grow online."
        />

        <div className="relative">
          <button className="swiper-prev absolute -left-2 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full border-2 border-dashed border-border bg-card shadow-md transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-lg hidden md:flex" style={{ filter: "url(#sketchy)" }}>
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button className="swiper-next absolute -right-2 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full border-2 border-dashed border-border bg-card shadow-md transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-lg hidden md:flex" style={{ filter: "url(#sketchy)" }}>
            <ChevronRight className="h-5 w-5" />
          </button>

          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: ".swiper-prev",
              nextEl: ".swiper-next",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12 testimonials-swiper"
          >
            {TESTIMONIALS.map((testimonial, index) => {
              const initials = testimonial.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase();

              return (
                <SwiperSlide key={testimonial.id}>
                  <Card className="h-full border-2 border-dashed border-border/50 transition-all hover:shadow-lg mx-auto paper-card" style={{ filter: "url(#sketchy)" }}>
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="font-kalam text-sm text-muted-foreground mb-6 italic leading-relaxed flex-1">
                        &ldquo;{testimonial.content}&rdquo;
                      </p>
                      <div className="flex items-center gap-3 pt-4 border-t-2 border-dashed border-border">
                        <Avatar className="h-11 w-11 border-2 border-dashed border-primary/20">
                          <AvatarImage
                            src={avatarImages[index] || avatarImages[0]}
                            alt={testimonial.name}
                            className="object-cover"
                          />
                          <AvatarFallback className="bg-primary/10 text-primary font-semibold text-sm font-caveat">
                            {initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-caveat text-sm font-bold">{testimonial.name}</p>
                          <p className="font-patrick text-xs text-muted-foreground">
                            {testimonial.role}, {testimonial.business}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="swiper-pagination flex justify-center gap-2 mt-2" />
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: hsl(var(--muted-foreground) / 0.3);
          opacity: 1;
          transition: all 0.3s;
        }
        .swiper-pagination-bullet-active {
          background: hsl(var(--primary));
          width: 28px;
          border-radius: 5px;
        }
        .testimonials-swiper .swiper-wrapper {
          align-items: stretch;
        }
        .testimonials-swiper .swiper-slide {
          height: auto;
        }
      `}</style>
    </section>
  );
}
