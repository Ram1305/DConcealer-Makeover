"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const desktopLinks = navLinks.filter((l) => l.href !== "#home");

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b border-white/15 backdrop-blur-xl transition-all duration-300 ${
        scrolled ? "bg-surface/90 shadow-[0_0_20px_rgba(233,195,73,0.1)]" : "bg-surface/10"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-container-padding py-base">
        <a
          href="#home"
          className="font-headline-sm text-headline-sm uppercase tracking-widest text-secondary transition-transform duration-200 hover:scale-105"
        >
          DConcealer Makeover
        </a>

        <div className="hidden items-center gap-stack-md font-label-lg text-label-lg md:flex">
          {desktopLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors duration-300 hover:text-secondary active:scale-95 ${
                link.href === "#about"
                  ? "border-b-2 border-secondary pb-1 font-bold text-secondary"
                  : "text-on-surface-variant"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-secondary px-6 py-2 font-label-lg text-on-secondary shadow-lg transition-all rose-gold-glow hover:scale-105 active:scale-95 md:inline-flex"
        >
          Book Now
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="p-2 text-secondary transition-transform duration-200 active:scale-95 md:hidden"
        >
          {open ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 top-full w-full overflow-hidden border-b border-white/10 bg-surface-container-highest/95 backdrop-blur-3xl md:hidden"
          >
            <div className="flex flex-col items-center gap-stack-md p-stack-lg">
              {desktopLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`font-label-lg text-label-lg transition-colors duration-300 ${
                    link.href === "#about"
                      ? "border-b-2 border-secondary pb-1 font-bold text-secondary"
                      : "text-on-surface-variant hover:text-secondary"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-secondary-container px-stack-md py-base font-label-lg text-on-secondary-container transition-all hover:scale-105"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
