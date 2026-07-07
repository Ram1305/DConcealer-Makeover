"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Instagram, Play } from "lucide-react";
import { instagramHandle, instagramPosts, instagramUrl } from "@/lib/data";

export default function InstagramFeed() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const amount = track.clientWidth * 0.8;
    track.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="section-padding relative overflow-hidden bg-surface">
      <div className="mx-auto max-w-7xl px-container-padding">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center"
        >
          <span className="font-headline-sm italic text-white/80">
            Follow us on Instagram
          </span>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-label-lg text-secondary transition-colors hover:text-white"
          >
            {instagramHandle}
          </a>
        </motion.div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="glass-card absolute -left-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-white transition-all hover:rose-gold-glow md:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="glass-card absolute -right-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-white transition-all hover:rose-gold-glow md:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div
            ref={trackRef}
            className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth"
          >
            {instagramPosts.map((post) => (
              <a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square w-[70%] flex-shrink-0 snap-start overflow-hidden rounded-xl sm:w-[45%] md:w-[23%]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.img}
                  alt={post.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-surface/20 transition-colors duration-300 group-hover:bg-surface/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/25 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <Play className="h-4 w-4 fill-white text-white" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full px-8 py-4 font-label-lg text-white shadow-luxury transition-transform hover:scale-105"
            style={{
              background:
                "linear-gradient(45deg, #f9ce34, #ee2a7b, #6228d7)",
            }}
          >
            <Instagram className="h-5 w-5" />
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
