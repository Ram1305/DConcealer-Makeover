"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { packages } from "@/lib/data";

export default function Packages() {
  return (
    <section id="packages" className="bg-surface-container-low/50 py-section-gap">
      <div className="mx-auto max-w-7xl px-container-padding">
        {/* Desktop header */}
        <div className="mb-stack-lg hidden flex-col items-end justify-between gap-4 md:flex md:flex-row">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-white">
              Bridal Packages
            </h2>
            <p className="mt-2 font-body-lg text-body-lg text-on-surface-variant">
              Elevate your wedding journey with our signature services.
            </p>
          </div>
        </div>

        {/* Mobile header — code2 */}
        <div className="mb-stack-lg space-y-2 text-center md:hidden">
          <h2 className="font-headline-md text-headline-md text-secondary">
            Exclusive Packages
          </h2>
          <p className="font-body-md text-on-surface-variant">
            Tailored transformations for your big day
          </p>
        </div>

        <div className="flex flex-col gap-stack-md md:grid md:grid-cols-2 md:gap-stack-lg">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`glass-card relative overflow-hidden rounded-3xl p-stack-lg md:rounded-[40px] md:p-8 lg:p-12 ${
                pkg.featured
                  ? "border-2 border-secondary/40 rose-gold-glow-intense bg-surface-container-high/40 md:rose-gold-glow"
                  : "border border-white/5 bg-surface-container/20 md:border-white/10"
              }`}
            >
              {pkg.featured && (
                <div className="absolute right-0 top-0 rounded-bl-2xl bg-secondary px-stack-md py-1 font-label-lg text-[10px] uppercase text-on-secondary md:rounded-bl-3xl md:px-8 md:py-2 md:text-xs md:tracking-widest">
                  Most Popular
                </div>
              )}

              <div className="space-y-stack-sm">
                <h3
                  className={`font-headline-sm text-headline-sm ${
                    pkg.featured ? "text-secondary" : "text-white md:text-white"
                  }`}
                >
                  {pkg.name}
                </h3>

                {/* Mobile: inline price row */}
                <div className="flex items-center justify-between pt-stack-md md:hidden">
                  <span className="font-headline-md text-secondary">{pkg.price}</span>
                  <a
                    href="#contact"
                    className={`rounded-full px-6 py-3 font-label-lg transition-all ${
                      pkg.featured
                        ? "bg-secondary text-on-secondary"
                        : "border border-secondary text-secondary"
                    }`}
                  >
                    Select
                  </a>
                </div>

                {/* Desktop: price block */}
                <div className="mb-8 hidden text-3xl font-headline-sm text-secondary md:block">
                  {pkg.price}
                </div>

                <ul className="space-y-3 pt-stack-sm md:mb-10 md:space-y-4">
                  {pkg.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-on-surface-variant md:text-on-surface-variant"
                    >
                      <CheckCircle
                        className={`h-4 w-4 flex-shrink-0 ${
                          pkg.featured ? "text-secondary" : "text-outline md:text-secondary"
                        }`}
                      />
                      <span className="font-body-md">{item}</span>
                    </li>
                  ))}
                </ul>

                {pkg.note && (
                  <p className="text-xs italic text-on-surface-variant/70 md:mb-10">
                    {pkg.note}
                  </p>
                )}

                <a
                  href="#contact"
                  className={`hidden w-full rounded-2xl py-4 text-center font-label-lg transition-all md:block ${
                    pkg.featured
                      ? "bg-secondary text-on-secondary rose-gold-glow-hover"
                      : "glass-card border border-white/20 text-white hover:bg-white/10"
                  }`}
                >
                  {pkg.featured ? "Select HD Package" : "Select Semi HD"}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
