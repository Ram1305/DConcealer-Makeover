"use client";

import { motion } from "framer-motion";
import { Brush, Wind, Scissors, Users } from "lucide-react";
import { onSpotServices, additionalServices, quickServices } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const quickIcons: Record<string, React.ReactNode> = {
  brush: <Brush className="h-8 w-8 text-secondary" />,
  face_6: <Users className="h-8 w-8 text-secondary" />,
  air: <Wind className="h-8 w-8 text-secondary" />,
  content_cut: <Scissors className="h-8 w-8 text-secondary" />,
};

export default function Services() {
  return (
    <section id="services" className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl px-container-padding">
        <SectionHeading
          eyebrow="On Spot"
          title="On Spot Services"
          description="Quick, radiant looks for every occasion around the wedding."
        />

        {/* Quick icon grid — code.html */}
        <div className="mb-stack-lg grid grid-cols-2 gap-gutter md:grid-cols-4">
          {quickServices.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass-card flex flex-col items-center gap-4 rounded-2xl p-6 text-center transition-colors hover:bg-secondary/10"
            >
              {quickIcons[s.icon]}
              <span className="font-label-lg text-white">{s.name}</span>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {onSpotServices.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className="glass-card flex items-center justify-between rounded-2xl p-6 transition-shadow hover:shadow-luxury"
            >
              <span className="font-body-md text-on-surface">{s.name}</span>
              <span className="font-headline-sm text-secondary">{s.price}</span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 mt-6 text-center text-xs italic text-on-surface-variant"
        >
          Lens, lashes and extensions are not included.
        </motion.p>

        <SectionHeading eyebrow="Add-Ons" title="Additional Services" />

        <div className="grid gap-6 sm:grid-cols-3">
          {additionalServices.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card rounded-3xl p-8 text-center"
            >
              <p className="mb-2 font-headline-sm text-white">{s.name}</p>
              <p className="font-headline-md text-secondary">{s.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
