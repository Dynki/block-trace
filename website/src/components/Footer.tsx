const footerColumns = [
  {
    title: "Product",
    links: ["Platform", "Architecture", "API Docs", "Pricing"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Contact"],
  },
  {
    title: "Resources",
    links: ["Whitepaper", "Case Studies", "Documentation", "Changelog"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Security"],
  },
];

const socials = ["X", "LinkedIn", "GitHub"];

export default function Footer() {
  return (
    <footer className="flex flex-col gap-12 w-full px-20 pt-[60px] pb-10 bg-[#09090B] border-t border-[var(--bg-dark-elevated)]">
      {/* Top */}
      <div className="flex justify-between w-full">
        {/* Brand */}
        <div className="flex flex-col gap-4 w-[300px]">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-[7px] bg-[var(--accent-blue)] relative">
              <div className="absolute top-1 left-1 w-3 h-3 rounded-[3px] bg-white/20" />
            </div>
            <span className="font-display text-lg font-bold text-[var(--text-white)]">
              BlockTrace
            </span>
          </div>
          <p className="text-[13px] text-[var(--text-white-tertiary)] leading-[1.5]">
            Composable token infrastructure for real-world asset traceability.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-16">
          {footerColumns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3.5">
              <span className="text-[13px] font-semibold text-[var(--text-white)]">
                {col.title}
              </span>
              {col.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[13px] text-[var(--text-white-tertiary)] hover:text-[var(--text-white-secondary)] transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[var(--bg-dark-elevated)]" />

      {/* Bottom */}
      <div className="flex items-center justify-between w-full">
        <span className="text-xs text-[#3F3F46]">
          &copy; 2025 BlockTrace. All rights reserved.
        </span>
        <div className="flex items-center gap-5">
          {socials.map((social) => (
            <a
              key={social}
              href="#"
              className="text-xs font-medium text-[#52525B] hover:text-[var(--text-white-secondary)] transition-colors"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
