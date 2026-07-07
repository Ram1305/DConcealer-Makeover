"use client";

import { useState } from "react";
import { Phone, MessageCircle, Send } from "lucide-react";

const WHATSAPP_NUMBER = "919876543210";

export default function Contact() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [service, setService] = useState("Bridal HD Package");
  const [message, setMessage] = useState("");

  const sendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const lines = [
      "*New Enquiry — D Concealer Makeover*",
      "",
      name && `*Name:* ${name}`,
      date && `*Event Date:* ${date}`,
      service && `*Service:* ${service}`,
      message && `*Message:* ${message}`,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-surface">
      <div className="mx-auto max-w-7xl px-container-padding">
        {/* Mobile: single form card — code2 */}
        <div className="md:hidden">
          <div className="glass-card space-y-stack-md rounded-[2rem] p-stack-lg">
            <h2 className="text-center font-headline-md text-headline-md text-white">
              Inquire Now
            </h2>
            <form onSubmit={sendToWhatsApp} className="space-y-gutter">
              <div className="space-y-1">
                <label className="ml-2 font-label-lg text-[10px] uppercase text-on-surface-variant">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-t-xl border-b-2 border-outline-variant bg-surface-container-highest/30 p-4 text-white outline-none transition-all focus:border-secondary"
                />
              </div>
              <div className="space-y-1">
                <label className="ml-2 font-label-lg text-[10px] uppercase text-on-surface-variant">
                  Event Date
                </label>
                <input
                  required
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full rounded-t-xl border-b-2 border-outline-variant bg-surface-container-highest/30 p-4 text-white outline-none transition-all focus:border-secondary"
                />
              </div>
              <div className="space-y-1">
                <label className="ml-2 font-label-lg text-[10px] uppercase text-on-surface-variant">
                  Desired Look
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your dream bridal look..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-none rounded-t-xl border-b-2 border-outline-variant bg-surface-container-highest/30 p-4 text-white outline-none transition-all focus:border-secondary"
                />
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-secondary py-5 font-label-lg text-on-secondary rose-gold-glow"
              >
                <Send className="h-5 w-5" />
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>

        {/* Desktop: 2-col — code.html */}
        <div className="hidden md:grid md:grid-cols-2 md:items-center md:gap-stack-lg">
          <div>
            <h2 className="mb-6 font-headline-lg text-headline-lg text-white">
              Let&apos;s Create Magic Together
            </h2>
            <p className="mb-10 font-body-lg text-body-lg text-on-surface-variant">
              Secure your date for the ultimate makeover experience. Our slots
              fill up fast!
            </p>
            <div className="space-y-6">
              <a
                href="tel:+919876543210"
                className="group flex items-center gap-4 text-white transition-colors hover:text-secondary"
              >
                <div className="glass-card flex h-12 w-12 items-center justify-center rounded-full group-hover:rose-gold-glow">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-label-lg text-xs uppercase tracking-widest text-secondary">
                    Call Us
                  </div>
                  <div className="text-xl">+91 98765 43210</div>
                </div>
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-white transition-colors hover:text-secondary"
              >
                <div className="glass-card flex h-12 w-12 items-center justify-center rounded-full group-hover:rose-gold-glow">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-label-lg text-xs uppercase tracking-widest text-secondary">
                    WhatsApp
                  </div>
                  <div className="text-xl">Inquire for Dates</div>
                </div>
              </a>
            </div>
          </div>

          <div className="glass-card relative rounded-[40px] p-10">
            <form onSubmit={sendToWhatsApp} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="font-label-lg text-xs uppercase text-secondary">
                    Your Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border-b border-secondary/30 bg-white/5 py-2 text-white outline-none transition-colors focus:border-secondary focus:ring-0"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label-lg text-xs uppercase text-secondary">
                    Date
                  </label>
                  <input
                    required
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full border-b border-secondary/30 bg-white/5 py-2 text-white outline-none transition-colors focus:border-secondary focus:ring-0"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label-lg text-xs uppercase text-secondary">
                  Service Type
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full border-b border-secondary/30 bg-white/5 py-2 text-white outline-none transition-colors focus:border-secondary focus:ring-0"
                >
                  <option className="bg-surface">Bridal HD Package</option>
                  <option className="bg-surface">Semi HD Package</option>
                  <option className="bg-surface">Engagement Makeup</option>
                  <option className="bg-surface">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-label-lg text-xs uppercase text-secondary">
                  Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your event..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-none border-b border-secondary/30 bg-white/5 py-2 text-white outline-none transition-colors focus:border-secondary focus:ring-0"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-2xl bg-secondary py-5 font-headline-sm uppercase tracking-widest text-on-secondary transition-all rose-gold-glow hover:scale-[1.02] active:scale-95"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
