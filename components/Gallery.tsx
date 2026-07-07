"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { galleryCategories, galleryItems } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Gallery() {
  const [active, setActive] = useState<(typeof galleryCategories)[number]>("All");
  const [lightbox, setLightbox] = useState<(typeof galleryItems)[number] | null>(null);

  const filtered =
    active === "All"
      ? galleryItems
      : galleryItems.filter((g) => g.category === active);

  return (
    <section id="gallery" className="bg-surface py-section-gap">
      <div className="mx-auto max-w-7xl">
        {/* Mobile header — code2 */}
        <div className="mb-stack-md flex items-end justify-between px-container-padding md:hidden">
          <h2 className="font-headline-md text-headline-md text-white">
            The Gallery
          </h2>
          <span className="border-b border-secondary pb-1 font-label-lg text-secondary">
            View All
          </span>
        </div>

        {/* Desktop header */}
        <div className="hidden px-container-padding md:block">
          <SectionHeading
            eyebrow="Portfolio"
            title="The Bridal Gallery"
            description="Moments of elegance, captured in cinematic detail."
          />
        </div>

        {/* Category filters — desktop/tablet only */}
        <div className="mb-12 hidden flex-wrap justify-center gap-3 px-container-padding md:flex">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? "bg-secondary text-on-secondary shadow-luxury"
                  : "glass-card text-on-surface-variant hover:text-secondary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Mobile: single column stacked */}
        <div className="space-y-0 px-container-padding md:hidden">
          {filtered.slice(0, 6).map((item, i) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              onClick={() => setLightbox(item)}
              className="masonry-item w-full overflow-hidden rounded-3xl glass-card"
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={item.img}
                  alt={item.caption}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.button>
          ))}
        </div>

        {/* Desktop: masonry grid */}
        <div className="masonry-grid hidden px-container-padding md:block">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.button
                layout
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                onClick={() => setLightbox(item)}
                className="group mb-6 block w-full overflow-hidden rounded-2xl glass-card p-2"
              >
                <div className="relative w-full overflow-hidden rounded-xl">
                  <div
                    className={`relative w-full ${
                      i % 3 === 0
                        ? "aspect-[4/5]"
                        : i % 3 === 1
                          ? "aspect-[3/4]"
                          : "aspect-square"
                    }`}
                  >
                    <Image
                      src={item.img}
                      alt={item.caption}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-surface/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="font-headline-sm text-white">{item.caption}</p>
                    <p className="mt-1 text-xs uppercase tracking-widest text-secondary">
                      {item.category}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-surface/90 p-6 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl overflow-hidden rounded-3xl shadow-luxury"
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={lightbox.img}
                  alt={lightbox.caption}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="glass-card p-5">
                <p className="font-headline-sm text-white">{lightbox.caption}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-secondary">
                  {lightbox.category}
                </p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full glass-card text-white"
                aria-label="Close preview"
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
