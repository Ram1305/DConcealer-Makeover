"use client";

import { motion } from "framer-motion";
import { terms } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Terms() {
  return (
    <section className="section-padding bg-surface">
      <div className="mx-auto max-w-3xl px-container-padding">
        <SectionHeading
          eyebrow="Good to Know"
          title="Terms & Conditions"
          description="A few essentials to help us plan a seamless day together."
        />

        <div className="relative pl-8 md:pl-10">
          <div className="absolute bottom-2 left-[7px] top-2 w-[2px] bg-gradient-to-b from-secondary to-secondary-container md:left-[9px]" />

          <div className="space-y-9">
            {terms.map((term, i) => (
              <motion.div
                key={term}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="relative"
              >
                <span className="absolute -left-8 top-1 h-4 w-4 rounded-full bg-secondary shadow-luxury ring-4 ring-surface md:-left-10" />
                <p className="text-sm leading-relaxed text-on-surface-variant md:text-base">
                  {term}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
