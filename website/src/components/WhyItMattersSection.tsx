import {
  GitBranch,
  Shield,
  Target,
  History,
  BadgeCheck,
} from "lucide-react";

const cards = [
  {
    icon: <GitBranch className="w-6 h-6 text-[var(--accent-blue-light)]" />,
    title: "Recursive Provenance",
    desc: "Trace any component back through its full history, across every level of assembly.",
  },
  {
    icon: <Shield className="w-6 h-6 text-[var(--accent-blue-light)]" />,
    title: "Verifiable BOM",
    desc: "Cryptographically verify every bill of materials down to the component level.",
  },
  {
    icon: <Target className="w-6 h-6 text-[var(--accent-blue-light)]" />,
    title: "Component-Level Recall",
    desc: "Identify and isolate affected assets instantly when a component is recalled.",
  },
  {
    icon: <History className="w-6 h-6 text-[var(--accent-blue-light)]" />,
    title: "Full Lifecycle Versioning",
    desc: "Every change to an asset or sub-token is versioned, timestamped, and immutable.",
  },
  {
    icon: <BadgeCheck className="w-6 h-6 text-[var(--accent-blue-light)]" />,
    title: "Audit-Ready Assets",
    desc: "Generate compliance reports instantly with cryptographic proof of every claim.",
  },
];

export default function WhyItMattersSection() {
  return (
    <section className="flex flex-col items-center gap-10 md:gap-16 w-full px-5 sm:px-8 lg:px-20 py-16 md:py-[100px] bg-[var(--bg-dark)]">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 md:gap-5 max-w-[750px]">
        <span className="text-xs font-semibold text-[var(--accent-blue-light)] tracking-[2px]">
          WHY IT MATTERS
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-white)] text-center tracking-[-1px] md:tracking-[-1.5px]">
          Why Hierarchical Token Packs Matter
        </h2>
      </div>

      {/* Cards - Brick layout on large screens, responsive grid on smaller */}
      <div className="flex flex-col gap-5 w-full">
        {/* Row 1: 3 cards on lg, responsive grid below */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {cards.slice(0, 3).map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-4 p-6 md:p-8 rounded-xl bg-[var(--bg-dark-elevated)] border border-[var(--border-dark)]"
            >
              {card.icon}
              <span className="font-display text-lg font-bold text-[var(--text-white)]">
                {card.title}
              </span>
              <p className="text-sm text-[var(--text-white-secondary)] leading-[1.6]">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
        {/* Row 2: 2 cards centered on lg, responsive grid below */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full lg:w-2/3 lg:mx-auto">
          {cards.slice(3).map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-4 p-6 md:p-8 rounded-xl bg-[var(--bg-dark-elevated)] border border-[var(--border-dark)]"
            >
              {card.icon}
              <span className="font-display text-lg font-bold text-[var(--text-white)]">
                {card.title}
              </span>
              <p className="text-sm text-[var(--text-white-secondary)] leading-[1.6]">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
