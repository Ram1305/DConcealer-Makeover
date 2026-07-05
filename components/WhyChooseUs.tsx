"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Gem,
  BadgeCheck,
  Clock,
  Heart,
  Crown,
  Scissors,
  ShieldCheck,
  LucideIcon,
} from "lucide-react";
import { whyChooseUs } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const icons: Record<string, LucideIcon> = {
  Sparkles,
  Gem,
  BadgeCheck,
  Clock,
  Heart,
  Crown,
  Scissors,
  ShieldCheck,
};

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-surface-container-low/30">
      <div className="mx-auto max-w-6xl px-container-padding">
        <SectionHeading
          eyebrow="The Difference"
          title="Why Choose Us"
          description="Every detail, from product to presence, is chosen to make your day effortless and radiant."
        />

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.07 }}
                whileHover={{ y: -6 }}
                className="glass-card rounded-3xl p-6 text-center transition-shadow hover:shadow-luxury"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3 + (i % 3),
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/20"
                >
                  <Icon className="h-6 w-6 text-secondary" />
                </motion.div>
                <p className="font-headline-sm text-sm leading-snug text-white md:text-base">
                  {item.title}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
