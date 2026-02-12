import { Lock, EyeOff, Users, Link, Server } from "lucide-react";

const securityCards = [
  {
    icon: <Lock className="w-6 h-6 text-[var(--text-dark)]" />,
    title: "Cryptographic Integrity",
    desc: "Every token and sub-token is hash-verified and tamper-evident.",
  },
  {
    icon: <EyeOff className="w-6 h-6 text-[var(--text-dark)]" />,
    title: "Selective Disclosure",
    desc: "Share only what's needed. Control visibility at the sub-token level.",
  },
  {
    icon: <Users className="w-6 h-6 text-[var(--text-dark)]" />,
    title: "Role-Based Permissions",
    desc: "Granular access control across organisations, teams, and asset types.",
  },
  {
    icon: <Link className="w-6 h-6 text-[var(--text-dark)]" />,
    title: "Chain-Agnostic",
    desc: "Anchor to any blockchain. No vendor lock-in. Future-proof architecture.",
  },
  {
    icon: <Server className="w-6 h-6 text-[var(--text-dark)]" />,
    title: "Hybrid Model",
    desc: "Sensitive data stays off-chain. Only hashes are anchored on-chain for verification.",
  },
];

export default function SecuritySection() {
  return (
    <section className="flex flex-col items-center gap-16 w-full px-20 py-[100px] bg-[var(--bg-light)]">
      {/* Header */}
      <div className="flex flex-col items-center gap-5 max-w-[700px]">
        <span className="text-xs font-semibold text-[var(--accent-blue)] tracking-[2px]">
          SECURITY
        </span>
        <h2 className="font-display text-5xl font-extrabold text-[var(--text-dark)] text-center tracking-[-1.5px]">
          Built for Enterprise Trust
        </h2>
        <p className="text-lg text-[var(--text-dark-secondary)] text-center leading-[1.6] max-w-[620px]">
          Security isn&apos;t a feature — it&apos;s the foundation. Every layer
          is designed for zero-trust environments and regulatory compliance.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-3 gap-5 w-full">
        {securityCards.slice(0, 3).map((card) => (
          <div
            key={card.title}
            className="flex flex-col gap-3.5 p-7 rounded-xl bg-[var(--bg-light-surface)] border border-[var(--border-light)]"
          >
            {card.icon}
            <span className="font-display text-base font-bold text-[var(--text-dark)]">
              {card.title}
            </span>
            <p className="text-[13px] text-[var(--text-dark-secondary)] leading-[1.5]">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-5 w-full -mt-11">
        {securityCards.slice(3).map((card) => (
          <div
            key={card.title}
            className="flex flex-col gap-3.5 p-7 rounded-xl bg-[var(--bg-light-surface)] border border-[var(--border-light)]"
          >
            {card.icon}
            <span className="font-display text-base font-bold text-[var(--text-dark)]">
              {card.title}
            </span>
            <p className="text-[13px] text-[var(--text-dark-secondary)] leading-[1.5]">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
