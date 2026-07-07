"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import homeImg from "./assets/home.jpg";

const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;
      const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
      const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
      if (contentRef.current) {
        contentRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="home" ref={containerRef} className="relative overflow-hidden">
      {/* Mobile hero — brand emblem layout */}
      <div className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-container-padding pb-stack-lg pt-28 text-center lg:hidden">
        {/* Ambient luxury background */}
        <div className="absolute inset-0 -z-10 bg-ink-gradient" />
        <div className="absolute -top-24 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-secondary/20 blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-secondary/10 blur-[90px]" />

        {/* Brand emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative mb-stack-md"
        >
          <div className="absolute inset-0 -z-10 rounded-full bg-secondary/30 blur-2xl" />
          <div className="relative h-40 w-40 overflow-hidden rounded-full border border-secondary/40 shadow-luxury">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={homeImg.src}
              alt="D_Concealer Makeover logo"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="relative z-10 flex w-full max-w-sm flex-col items-center space-y-gutter"
        >
          <span className="font-label-lg text-[11px] uppercase tracking-[0.35em] text-secondary">
            Bridal Beauty Studio
          </span>

          <h1 className="font-headline-lg-mobile text-headline-lg-mobile leading-tight text-white">
            Luxury Bridal <br />
            <span className="text-gradient-gold">Makeup Experience</span>
          </h1>

          {/* Gold divider */}
          <span className="my-1 block h-px w-16 bg-gradient-to-r from-transparent via-secondary to-transparent" />

          <p className="max-w-[92%] font-body-lg text-base text-on-surface-variant">
            Transform your special day with flawless HD bridal makeup artistry
            curated for the modern queen.
          </p>

          <div className="flex w-full flex-col gap-3 pt-base">
            <a
              href="#contact"
              className="rounded-full bg-secondary px-8 py-4 text-center font-label-lg text-on-secondary shadow-luxury transition-all rose-gold-glow active:scale-95"
            >
              Book Appointment
            </a>
            <a
              href="#packages"
              className="glass-card rounded-full border border-secondary/30 px-8 py-4 text-center font-label-lg text-white transition-all active:scale-95"
            >
              View Packages
            </a>
          </div>

          {/* Trust badge */}
          <div className="flex items-center gap-2 pt-2 text-on-surface-variant">
            <span className="text-secondary tracking-widest">★★★★★</span>
            <span className="font-body-md text-sm">Trusted by 500+ brides</span>
          </div>
        </motion.div>
      </div>

      {/* Desktop hero — code.html */}
      <header className="relative hidden min-h-screen items-center justify-center overflow-hidden px-container-padding pt-24 lg:flex">
        <div className="absolute inset-0 -z-10">
          <Hero3D />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-stack-lg lg:grid-cols-2">
          <div ref={contentRef} className="space-y-stack-md transition-transform duration-300">
            <span className="font-label-lg text-label-lg uppercase tracking-[0.3em] text-secondary">
              Ethereal Glamour
            </span>
            <h1 className="font-display-lg text-display-lg leading-tight text-white">
              Luxury Bridal <br />
              <span className="text-gradient-gold">Makeup Experience</span>
            </h1>
            <p className="max-w-xl font-body-lg text-body-lg text-on-surface-variant">
              Experience the pinnacle of bridal artistry. We blend high-end
              nocturnal elegance with romantic bridal textures for your
              unforgettable day.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#packages"
                className="rounded-full bg-secondary px-10 py-4 font-label-lg text-on-secondary-fixed transition-all rose-gold-glow hover:scale-105"
              >
                Explore Packages
              </a>
              <a
                href="#gallery"
                className="glass-card rounded-full px-10 py-4 font-label-lg text-white transition-all hover:bg-white/10"
              >
                View Gallery
              </a>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-4 rounded-xl bg-secondary/20 blur-3xl transition-all duration-700 group-hover:bg-secondary/30" />
            <div className="glass-card relative rotate-2 overflow-hidden rounded-2xl p-2 transition-transform duration-500 hover:rotate-0">
              <div className="relative h-[600px] w-full overflow-hidden rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={homeImg.src}
                  alt="Cinematic bridal portrait"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="glass-card absolute -bottom-10 -left-10 hidden max-w-xs -rotate-3 rounded-2xl p-6 md:block">
              <div className="mb-2 flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/20">
                  <BadgeCheck className="h-5 w-5 text-secondary" />
                </div>
                <h4 className="font-headline-sm text-white">Elite Standard</h4>
              </div>
              <p className="text-sm font-body-md text-on-surface-variant">
                International certified artists using only top-tier luxury
                cosmetics for a flawless HD finish.
              </p>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}
