import { CreditCard, Code, Building2, Globe } from "lucide-react";

const bizCards = [
  {
    icon: <CreditCard className="w-5 h-5 text-[var(--accent-blue-light)]" />,
    title: "SaaS Subscription",
    desc: "Usage-based pricing that scales with your asset volume.",
  },
  {
    icon: <Code className="w-5 h-5 text-[var(--accent-blue-light)]" />,
    title: "API-First Platform",
    desc: "RESTful APIs and SDKs for seamless integration.",
  },
  {
    icon: <Building2 className="w-5 h-5 text-[var(--accent-blue-light)]" />,
    title: "Enterprise Deployment",
    desc: "On-premise, private cloud, or hybrid deployment options.",
  },
  {
    icon: <Globe className="w-5 h-5 text-[var(--accent-blue-light)]" />,
    title: "Private Network Support",
    desc: "Run isolated networks for sensitive supply chains.",
  },
];

export default function EnterprisePlatformSection() {
  return (
    <section className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-20 w-full px-5 sm:px-8 lg:px-20 py-16 md:py-[100px] bg-[var(--bg-dark)]">
      {/* Left */}
      <div className="flex flex-col gap-5 md:gap-8 flex-1">
        <span className="text-xs font-semibold text-[var(--accent-blue-light)] tracking-[2px]">
          ENTERPRISE PLATFORM
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-[44px] font-extrabold text-[var(--text-white)] leading-[1.1] tracking-[-1px] md:tracking-[-1.5px]">
          Infrastructure, Not Just Software
        </h2>
        <p className="text-base md:text-[17px] text-[var(--text-white-secondary)] leading-[1.7]">
          BlockTrace is a platform, not a point solution. Deploy as SaaS or
          on-premise. Integrate via API. Scale across your entire asset
          portfolio.
        </p>
      </div>

      {/* Right */}
      <div className="flex flex-col gap-3 md:gap-4 flex-1 w-full">
        {bizCards.map((card) => (
          <div
            key={card.title}
            className="flex items-center gap-4 p-4 md:p-6 rounded-xl bg-[var(--bg-dark-elevated)] border border-[var(--border-dark)]"
          >
            <div className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-[10px] bg-[#1E3A5F] shrink-0">
              {card.icon}
            </div>
            <div className="flex flex-col gap-1 flex-1 min-w-0">
              <span className="font-display text-sm md:text-base font-bold text-[var(--text-white)]">
                {card.title}
              </span>
              <span className="text-xs md:text-[13px] text-[var(--text-white-tertiary)] leading-[1.5]">
                {card.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
