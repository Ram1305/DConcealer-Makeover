"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { aboutDesktopFeatures } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const iconMap: Record<string, string> = {
  diamond: "💎",
  workspace_premium: "🏅",
  auto_awesome: "✨",
};

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-surface">
      {/* Mobile layout — code2.html */}
      <div className="px-container-padding py-section-gap lg:hidden">
        <div className="glass-card animate-fade-in space-y-stack-md rounded-3xl p-stack-lg rose-gold-glow">
          <div className="inline-flex items-center gap-2 text-secondary">
            <Sparkles className="h-5 w-5" />
            <span className="font-label-lg text-label-lg uppercase tracking-widest">
              Ethereal Artistry
            </span>
          </div>
          <h2 className="font-headline-md text-headline-md text-white">
            Your Canvas, Our Masterpiece
          </h2>
          <p className="font-body-md text-on-surface-variant">
            We believe bridal beauty is an intimate journey. Our signature
            approach combines high-fashion techniques with the timeless romance
            of bridal elegance, ensuring you glow from the inside out.
          </p>
          <div className="grid grid-cols-2 gap-stack-sm pt-base">
            <div className="flex flex-col items-center rounded-2xl border border-white/5 bg-white/5 p-stack-sm">
              <span className="font-headline-sm text-secondary">12+</span>
              <span className="text-[10px] font-label-lg uppercase opacity-60">
                Years Exp
              </span>
            </div>
            <div className="flex flex-col items-center rounded-2xl border border-white/5 bg-white/5 p-stack-sm">
              <span className="font-headline-sm text-secondary">500+</span>
              <span className="text-[10px] font-label-lg uppercase opacity-60">
                Brides
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop layout — code.html */}
      <div className="hidden px-container-padding py-section-gap lg:block">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Crafting Your Eternal Glow"
            description="Our philosophy centers on enhancing your natural beauty through cinematic lighting and editorial techniques."
          />
          <div className="grid grid-cols-1 gap-stack-md md:grid-cols-3">
            {aboutDesktopFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-card group rounded-3xl p-10 text-center transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="rose-gold-glow mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-secondary/10 text-3xl text-secondary">
                  {iconMap[f.icon] ?? "✨"}
                </div>
                <h3 className="mb-4 font-headline-sm text-white">{f.title}</h3>
                <p className="font-body-md text-on-surface-variant">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
