"use client";

import { Calendar, Wand2 } from "lucide-react";

export default function Fab() {
  return (
    <a
      href="#contact"
      aria-label="Book appointment"
      className="fixed bottom-8 right-8 z-[100] flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-secondary-container text-on-secondary shadow-[0_8px_32px_rgba(175,141,17,0.5)] transition-transform hover:scale-110 active:scale-90"
    >
      <Calendar className="h-8 w-8 md:hidden" />
      <Wand2 className="hidden h-8 w-8 md:block" />
    </a>
  );
}
