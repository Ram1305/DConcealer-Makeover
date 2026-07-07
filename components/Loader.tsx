"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-surface"
        >
          <motion.div
            initial={{ letterSpacing: "0.2em", opacity: 0 }}
            animate={{ letterSpacing: "0.4em", opacity: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="font-display text-3xl tracking-widest text-gradient-gold md:text-5xl"
          >
            D_CONCEALER
          </motion.div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-3 font-body text-xs uppercase tracking-[0.5em] text-secondary md:text-sm"
          >
            Makeover
          </motion.span>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 160 }}
            transition={{ delay: 0.4, duration: 1.6, ease: "easeInOut" }}
            className="mt-8 h-[2px] rounded-full bg-gold-gradient"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
