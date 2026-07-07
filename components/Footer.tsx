import { Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest bg-gradient-to-t from-surface-container-low to-surface py-stack-lg">
      {/* Mobile — code2 centered */}
      <div className="flex flex-col items-center gap-stack-md px-container-padding text-center md:hidden">
        <span className="font-headline-md text-headline-md text-secondary">
          D_Concealer
        </span>
        <div className="flex flex-wrap justify-center gap-stack-md">
          <a className="font-body-md text-on-surface-variant hover:text-secondary" href="#">
            Terms of Service
          </a>
          <a className="font-body-md text-on-surface-variant hover:text-secondary" href="#">
            Privacy Policy
          </a>
          <a className="font-body-md text-on-surface-variant hover:text-secondary" href="#contact">
            Contact Us
          </a>
        </div>
        <div className="flex gap-stack-md">
          <a
            href="#"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-secondary transition-colors hover:bg-secondary/10"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://wa.me/919876543210"
            aria-label="WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-secondary transition-colors hover:bg-secondary/10"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>
        <p className="font-body-md text-[12px] text-on-surface-variant opacity-60">
          © {new Date().getFullYear()} D_Concealer Makeover. All rights reserved.
        </p>
      </div>

      {/* Desktop — code.html row */}
      <div className="mx-auto hidden max-w-7xl flex-col items-center justify-between gap-stack-md px-container-padding md:flex md:flex-row">
        <div className="font-headline-md text-headline-md text-secondary">
          D_Concealer
        </div>
        <div className="flex flex-wrap justify-center gap-stack-md font-body-md text-on-surface-variant">
          <a className="hover:text-secondary transition-colors" href="#">
            Terms of Service
          </a>
          <a className="hover:text-secondary transition-colors" href="#">
            Privacy Policy
          </a>
          <a className="hover:text-secondary transition-colors" href="#contact">
            Contact Us
          </a>
          <a className="hover:text-secondary transition-colors" href="#">
            Careers
          </a>
        </div>
        <div className="font-body-md text-on-surface-variant">
          © {new Date().getFullYear()} D_Concealer Makeover. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
