import { Network, CalendarDays, GitMerge, Bell } from "lucide-react";

const products = [
  {
    icon: <Network className="w-4 h-4 text-[var(--accent-blue-light)]" />,
    title: "Asset Graph Explorer",
    img: "/images/generated-1770887209909.png",
  },
  {
    icon: <CalendarDays className="w-4 h-4 text-[var(--accent-blue-light)]" />,
    title: "Timeline View",
    img: "/images/generated-1770887216404.png",
  },
  {
    icon: <GitMerge className="w-4 h-4 text-[var(--accent-blue-light)]" />,
    title: "Component Dependency Map",
    img: "/images/generated-1770887222580.png",
  },
  {
    icon: <Bell className="w-4 h-4 text-[var(--accent-blue-light)]" />,
    title: "Certification Validity Alerts",
    img: "/images/generated-1770887229588.png",
  },
];

export default function ProductSection() {
  return (
    <section className="flex flex-col items-center gap-10 md:gap-16 w-full px-5 sm:px-8 lg:px-20 py-16 md:py-[100px] bg-[var(--bg-dark)]">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 md:gap-5 max-w-[700px]">
        <span className="text-xs font-semibold text-[var(--accent-blue-light)] tracking-[2px]">
          PRODUCT
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-white)] text-center tracking-[-1px] md:tracking-[-1.5px]">
          Enterprise-Grade Asset Intelligence
        </h2>
        <p className="text-base md:text-lg text-[var(--text-white-secondary)] text-center leading-[1.6] max-w-[620px]">
          A modern SaaS dashboard built for data-heavy workflows. Explore asset
          graphs, track lifecycles, and monitor certifications in real time.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
        {products.map((prod) => (
          <div
            key={prod.title}
            className="flex flex-col gap-4 h-[240px] sm:h-[280px] p-5 md:p-6 rounded-2xl bg-[var(--bg-dark-elevated)] border border-[var(--border-dark)]"
          >
            <div className="flex items-center gap-2">
              {prod.icon}
              <span className="font-display text-sm md:text-base font-bold text-[var(--text-white)]">
                {prod.title}
              </span>
            </div>
            <div className="flex-1 rounded-[10px] overflow-hidden">
              <img
                src={prod.img}
                alt={prod.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
