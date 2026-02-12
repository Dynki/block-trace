import { Factory, Building2, Pill, Leaf } from "lucide-react";

const useCases = [
  {
    icon: <Factory className="w-6 h-6 text-[var(--accent-blue)]" />,
    iconBg: "bg-[#EFF6FF]",
    title: "Manufacturing",
    desc: "Track sub-assemblies, components, and certifications across complex production lines.",
    img: "https://images.unsplash.com/photo-1699799678681-3c156c3c5553?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    icon: <Building2 className="w-6 h-6 text-[#16A34A]" />,
    iconBg: "bg-[#F0FDF4]",
    title: "Real Estate",
    desc: "Compose property tokens from surveys, certificates, and renovation records.",
    img: "/images/generated-1770887328156.png",
  },
  {
    icon: <Pill className="w-6 h-6 text-[#DC2626]" />,
    iconBg: "bg-[#FEF2F2]",
    title: "Pharmaceuticals",
    desc: "Full chain-of-custody from raw material to patient delivery with regulatory compliance.",
    img: "/images/generated-1770887334485.png",
  },
  {
    icon: <Leaf className="w-6 h-6 text-[#EA580C]" />,
    iconBg: "bg-[#FFF7ED]",
    title: "Energy & Carbon",
    desc: "Verifiable carbon credits and energy asset provenance with embedded compliance.",
    img: "https://images.unsplash.com/photo-1598480879950-0b385db5310e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
];

export default function UseCasesSection() {
  return (
    <section className="flex flex-col items-center gap-10 md:gap-16 w-full px-5 sm:px-8 lg:px-20 py-16 md:py-[100px] bg-[var(--bg-light)]">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 md:gap-5 max-w-[700px]">
        <span className="text-xs font-semibold text-[var(--accent-blue)] tracking-[2px]">
          USE CASES
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-dark)] text-center tracking-[-1px] md:tracking-[-1.5px]">
          Built for Asset-Heavy Industries
        </h2>
        <p className="text-base md:text-lg text-[var(--text-dark-secondary)] text-center leading-[1.6] max-w-[600px]">
          From factory floors to property portfolios — composable token
          infrastructure adapts to your domain.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 w-full">
        {useCases.map((uc) => (
          <div
            key={uc.title}
            className="flex flex-col gap-4 md:gap-5 p-6 md:p-8 rounded-2xl bg-white border border-[var(--border-light)]"
          >
            <div
              className={`flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-xl ${uc.iconBg}`}
            >
              {uc.icon}
            </div>
            <div className="w-full h-[120px] sm:h-[140px] rounded-[10px] overflow-hidden">
              <img
                src={uc.img}
                alt={uc.title}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-display text-lg md:text-xl font-bold text-[var(--text-dark)]">
              {uc.title}
            </span>
            <p className="text-sm text-[var(--text-dark-secondary)] leading-[1.6]">
              {uc.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
