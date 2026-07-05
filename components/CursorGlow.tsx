"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let curX = x;
    let curY = y;

    const handleMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    let raf: number;
    const animate = () => {
      curX += (x - curX) * 0.12;
      curY += (y - curY) * 0.12;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${curX}px, ${curY}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow hidden md:block" />;
}
