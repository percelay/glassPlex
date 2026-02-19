"use client";

import { useEffect, useState } from "react";
import { Layers3, Menu, Phone, X } from "lucide-react";

const navLinks = [
  { label: "Company", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Materials", href: "#products" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? "border-white/20 bg-[#030a18]/72 backdrop-blur-2xl shadow-[0_16px_50px_rgba(2,8,20,0.55)]"
          : "border-white/10 bg-[#061227]/42 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <div className="glass-soft flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105">
            <Layers3 className="h-5 w-5 text-[#b8e9ff]" />
          </div>
          <div>
            <p className="font-[var(--font-heading)] text-base font-semibold tracking-tight text-[#f2f9ff] sm:text-lg">
              GlasPlex Plastics
            </p>
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#98c8e7]">
              Precision Fabrication
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#c4ddf1] transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="tel:+19733620219"
            className="glass-soft flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold text-[#d9ecfa]"
          >
            <Phone className="h-3.5 w-3.5 text-[#9fdcff]" />
            (973) 362-0219
          </a>
          <a
            href="#contact"
            className="ice-btn-primary rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200"
          >
            Request Quote
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="glass-soft rounded-lg p-2 text-[#d9ecfa] md:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/15 bg-[#061227]/92 px-4 py-4 backdrop-blur-2xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="glass-soft rounded-xl px-4 py-3 text-sm font-medium text-[#d4e8f8]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="ice-btn-primary mt-1 rounded-xl px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Request Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
