import { CircleX, CircleCheck } from "lucide-react";

const todayItems = [
  "Siloed enterprise databases with no interoperability",
  "Manual compliance and audit processes",
  "No cross-organisation trust layer",
  "Non-verifiable bills of materials",
  "Fragmented asset lifecycle records",
];

const btItems = [
  "Unified composable asset graph across organisations",
  "Automated compliance with verifiable audit trails",
  "Cryptographic trust between all participants",
  "Verifiable, hierarchical bills of materials",
  "Complete lifecycle provenance for every asset",
];

export default function ProblemSection() {
  return (
    <section className="flex flex-col items-center gap-10 md:gap-16 w-full px-5 sm:px-8 lg:px-20 py-16 md:py-[100px] bg-[var(--bg-light)]">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 md:gap-5 max-w-[700px]">
        <span className="text-xs font-semibold text-[var(--accent-blue)] tracking-[2px]">
          THE PROBLEM
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-dark)] text-center tracking-[-1px] md:tracking-[-1.5px]">
          Traceability Is Broken
        </h2>
        <p className="text-base md:text-lg text-[var(--text-dark-secondary)] text-center leading-[1.6] max-w-[600px]">
          Enterprise asset data lives in fragmented silos. Compliance is manual.
          Cross-organisation trust is non-existent. Bills of materials are
          unverifiable.
        </p>
      </div>

      {/* Comparison Cards */}
      <div className="flex flex-col lg:flex-row justify-center gap-6 lg:gap-8 w-full">
        {/* Today Card */}
        <div className="flex flex-col gap-5 md:gap-7 w-full lg:w-[560px] p-6 md:p-10 rounded-2xl bg-[#FEF2F2] border border-[#FECACA]">
          <div className="flex items-center gap-2.5">
            <CircleX className="w-5 h-5 text-[#DC2626]" />
            <span className="font-display text-lg md:text-xl font-bold text-[#991B1B]">
              Today: Fragmented Systems
            </span>
          </div>
          <div className="flex flex-col gap-3 md:gap-4 w-full">
            {todayItems.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-[3px] bg-[#DC2626] shrink-0 mt-2" />
                <span className="text-sm md:text-[15px] text-[#7F1D1D] leading-[1.5]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* BlockTrace Card */}
        <div className="flex flex-col gap-5 md:gap-7 w-full lg:w-[560px] p-6 md:p-10 rounded-2xl bg-[#F0FDF4] border border-[#BBF7D0]">
          <div className="flex items-center gap-2.5">
            <CircleCheck className="w-5 h-5 text-[#16A34A]" />
            <span className="font-display text-lg md:text-xl font-bold text-[#14532D]">
              With BlockTrace: Connected Graph
            </span>
          </div>
          <div className="flex flex-col gap-3 md:gap-4 w-full">
            {btItems.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-[3px] bg-[#16A34A] shrink-0 mt-2" />
                <span className="text-sm md:text-[15px] text-[#14532D] leading-[1.5]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
