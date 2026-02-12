import { ArrowRight, Download } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="flex flex-col items-center gap-10 w-full px-20 py-[120px] bg-[linear-gradient(to_bottom,#09090B_0%,#0F172A_100%)]">
      <h2 className="font-display text-[56px] font-extrabold text-[var(--text-white)] text-center leading-[1.1] tracking-[-2px] max-w-[800px]">
        Build Trust Into Your Assets.
      </h2>
      <p className="text-lg text-[var(--text-white-secondary)] text-center leading-[1.6] max-w-[550px]">
        Join the enterprises already building verifiable asset infrastructure
        with BlockTrace.
      </p>
      <div className="flex items-center gap-4">
        <a
          href="#"
          className="flex items-center gap-2 px-8 py-4 rounded-[10px] bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] transition-colors"
        >
          <span className="text-base font-semibold text-white">Request Demo</span>
          <ArrowRight className="w-[18px] h-[18px] text-white" />
        </a>
        <a
          href="#"
          className="flex items-center gap-2 px-8 py-4 rounded-[10px] border border-[#3F3F46] hover:border-[#52525B] transition-colors"
        >
          <span className="text-base font-medium text-[var(--text-white-secondary)]">
            Download Whitepaper
          </span>
          <Download className="w-[18px] h-[18px] text-[var(--text-white-tertiary)]" />
        </a>
      </div>
    </section>
  );
}
