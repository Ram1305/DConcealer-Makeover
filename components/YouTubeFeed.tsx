"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Youtube } from "lucide-react";
import { youtubeHandle, youtubeUrl, youtubeVideos } from "@/lib/data";

export default function YouTubeFeed() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const amount = track.clientWidth * 0.8;
    track.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="section-padding relative overflow-hidden bg-surface-container-low">
      <div className="mx-auto max-w-7xl px-container-padding">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center"
        >
          <span className="font-headline-sm italic text-white/80">
            Watch us on YouTube
          </span>
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-label-lg text-secondary transition-colors hover:text-white"
          >
            {youtubeHandle}
          </a>
        </motion.div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="glass-card absolute -left-2 top-[38%] z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-white transition-all hover:rose-gold-glow md:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="glass-card absolute -right-2 top-[38%] z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-white transition-all hover:rose-gold-glow md:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div
            ref={trackRef}
            className="no-scrollbar flex gap-5 overflow-x-auto scroll-smooth"
          >
            {youtubeVideos.map((video) => (
              <a
                key={video.id}
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-[75%] flex-shrink-0 snap-start sm:w-[45%] md:w-[31%]"
              >
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={video.img}
                    alt={video.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-surface/25 transition-colors duration-300 group-hover:bg-surface/45" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <Play className="h-5 w-5 translate-x-0.5 fill-white text-white" />
                    </div>
                  </div>
                </div>
                <p className="mt-3 font-body-md text-sm text-white transition-colors group-hover:text-secondary">
                  {video.title}
                </p>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-red-600 px-8 py-4 font-label-lg text-white shadow-luxury transition-transform hover:scale-105 hover:bg-red-500"
          >
            <Youtube className="h-5 w-5" />
            Subscribe on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
