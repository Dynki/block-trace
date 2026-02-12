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
    <section className="flex flex-col items-center gap-16 w-full px-20 py-[100px] bg-[var(--bg-dark)]">
      {/* Header */}
      <div className="flex flex-col items-center gap-5 max-w-[750px]">
        <span className="text-xs font-semibold text-[var(--accent-blue-light)] tracking-[2px]">
          WHY IT MATTERS
        </span>
        <h2 className="font-display text-5xl font-extrabold text-[var(--text-white)] text-center tracking-[-1.5px]">
          Why Hierarchical Token Packs Matter
        </h2>
      </div>

      {/* Grid Row 1 */}
      <div className="flex justify-center gap-5 w-full">
        {cards.slice(0, 3).map((card) => (
          <div
            key={card.title}
            className="flex flex-col gap-4 flex-1 p-8 rounded-xl bg-[var(--bg-dark-elevated)] border border-[var(--border-dark)]"
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

      {/* Grid Row 2 */}
      <div className="flex justify-center gap-5 w-full -mt-11">
        {cards.slice(3).map((card) => (
          <div
            key={card.title}
            className="flex flex-col gap-4 flex-1 p-8 rounded-xl bg-[var(--bg-dark-elevated)] border border-[var(--border-dark)]"
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
    </section>
  );
}
