"use client";

import { ArrowRight } from "lucide-react";

const navLinks = ["Platform", "Architecture", "Use Cases", "Docs", "Pricing"];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between h-[72px] px-20 bg-[#09090BCC] backdrop-blur-md w-full">
      {/* Logo */}
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-lg bg-[var(--accent-blue)] relative">
          <div className="absolute top-[5px] left-[5px] w-3.5 h-3.5 rounded-[3px] bg-white/20" />
        </div>
        <span className="font-display text-xl font-bold text-[var(--text-white)] tracking-[-0.5px]">
          BlockTrace
        </span>
      </div>

      {/* Nav */}
      <nav className="flex items-center gap-9">
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

      {/* Right side */}
      <div className="flex items-center gap-4">
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
    </header>
  );
}
