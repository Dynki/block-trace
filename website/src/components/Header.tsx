"use client";

import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const navLinks = ["Platform", "Architecture", "Use Cases", "Docs", "Pricing"];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#09090BCC] backdrop-blur-md">
      <div className="flex items-center justify-between h-[72px] px-5 sm:px-8 lg:px-20">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[var(--accent-blue)] relative">
            <div className="absolute top-[5px] left-[5px] w-3.5 h-3.5 rounded-[3px] bg-white/20" />
          </div>
          <span className="font-display text-xl font-bold text-[var(--text-white)] tracking-[-0.5px]">
            BlockTrace
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-medium text-[var(--text-white-secondary)] hover:text-[var(--text-white)] transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Desktop Right side */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#"
            className="text-sm font-medium text-[var(--text-white-secondary)] hover:text-[var(--text-white)] transition-colors"
          >
            Sign In
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] transition-colors"
          >
            <span className="text-sm font-semibold text-white">Request Demo</span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10 text-[var(--text-white)]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden flex flex-col gap-1 px-5 pb-6 bg-[#09090BF0] backdrop-blur-md border-t border-[var(--border-dark)]">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              onClick={() => setMobileOpen(false)}
              className="py-3 text-sm font-medium text-[var(--text-white-secondary)] hover:text-[var(--text-white)] transition-colors"
            >
              {link}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-[var(--border-dark)]">
            <a
              href="#"
              className="text-sm font-medium text-[var(--text-white-secondary)] hover:text-[var(--text-white)] transition-colors"
            >
              Sign In
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] transition-colors"
            >
              <span className="text-sm font-semibold text-white">Request Demo</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
