"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="section-padding relative overflow-hidden bg-surface"
    >
      <div className="mx-auto max-w-7xl px-container-padding">
        <SectionHeading title="Rave Reviews" />

        {/* Mobile: horizontal snap scroll — code.html */}
        <div className="flex gap-stack-md overflow-x-auto pb-8 snap-x no-scrollbar md:hidden">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`min-w-[320px] snap-center glass-card rounded-3xl p-8 ${
                i === 0 ? "border-l-4 border-secondary" : ""
              }`}
            >
              <div className="mb-4 flex text-secondary">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="mb-6 font-body-md italic text-white">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20 font-bold text-secondary">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-label-lg text-white">{t.name}</div>
                  <div className="text-sm text-on-surface-variant">{t.event}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: 2-col grid */}
        <div className="hidden gap-8 md:grid md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`glass-card flex h-full flex-col rounded-3xl p-8 ${
                i === 0 ? "border-l-4 border-secondary" : ""
              }`}
            >
              <div className="mb-4 flex text-secondary">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="mb-6 flex-1 font-body-md italic text-white">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20 font-bold text-secondary">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-label-lg text-white">{t.name}</div>
                  <div className="text-sm text-on-surface-variant">{t.event}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
