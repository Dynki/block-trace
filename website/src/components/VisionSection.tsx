const visionCards = [
  {
    num: "01",
    title: "Global Asset Provenance Layer",
    desc: "A universal registry of verifiable asset histories across industries and borders.",
  },
  {
    num: "02",
    title: "Embedded Finance Enablement",
    desc: "Tokenised assets become programmable collateral for lending, insurance, and trade finance.",
  },
  {
    num: "03",
    title: "Automated Compliance",
    desc: "Regulatory reporting generated automatically from verifiable asset data.",
  },
  {
    num: "04",
    title: "Cross-Industry Composability",
    desc: "Token packs from one industry interoperate with token packs from another.",
  },
];

export default function VisionSection() {
  return (
    <section className="flex flex-col items-center gap-12 w-full px-20 py-[100px] bg-[var(--bg-light)]">
      {/* Header */}
      <div className="flex flex-col items-center gap-5 max-w-[750px]">
        <span className="text-xs font-semibold text-[var(--accent-blue)] tracking-[2px]">
          VISION
        </span>
        <h2 className="font-display text-5xl font-extrabold text-[var(--text-dark)] text-center tracking-[-1.5px]">
          Version Control for Physical Assets
        </h2>
        <p className="text-lg text-[var(--text-dark-secondary)] text-center leading-[1.6] max-w-[620px]">
          We&apos;re building the provenance layer for the physical world. A
          future where every asset has a verifiable, composable digital twin.
        </p>
      </div>

      {/* Vision Grid */}
      <div className="grid grid-cols-4 gap-8 w-full">
        {visionCards.map((card) => (
          <div
            key={card.num}
            className="flex flex-col gap-3 p-8 rounded-xl"
          >
            <span className="font-display text-4xl font-extrabold text-[#E4E4E7]">
              {card.num}
            </span>
            <span className="font-display text-lg font-bold text-[var(--text-dark)]">
              {card.title}
            </span>
            <p className="text-sm text-[var(--text-dark-secondary)] leading-[1.6]">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
