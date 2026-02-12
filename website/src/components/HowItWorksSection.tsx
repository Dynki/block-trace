const layers = [
  {
    num: "5",
    numBg: "bg-[var(--accent-blue)]",
    title: "Query & Analytics Dashboard",
    desc: "Real-time asset insights, dependency maps, lifecycle views",
    bg: "bg-[#EFF6FF]",
    border: "border-[#BFDBFE]",
  },
  {
    num: "4",
    numBg: "bg-[#0284C7]",
    title: "On-Chain Hash Anchoring",
    desc: "Immutable proof on any blockchain, chain-agnostic",
    bg: "bg-[#F0F9FF]",
    border: "border-[#BAE6FD]",
  },
  {
    num: "3",
    numBg: "bg-[#7C3AED]",
    title: "Off-Chain Indexed Data Layer",
    desc: "Structured storage, fast retrieval, selective disclosure",
    bg: "bg-[#F5F3FF]",
    border: "border-[#DDD6FE]",
  },
  {
    num: "2",
    numBg: "bg-[#EA580C]",
    title: "Tokenisation Engine",
    desc: "Hierarchical token pack creation, versioning, composition",
    bg: "bg-[#FFF7ED]",
    border: "border-[#FED7AA]",
  },
  {
    num: "1",
    numBg: "bg-[#16A34A]",
    title: "Integration Layer",
    desc: "REST APIs, ERP connectors, webhooks, batch import",
    bg: "bg-[#F0FDF4]",
    border: "border-[#BBF7D0]",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="flex flex-col items-center gap-10 md:gap-16 w-full px-5 sm:px-8 lg:px-20 py-16 md:py-[100px] bg-[var(--bg-light)]">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 md:gap-5 max-w-[700px]">
        <span className="text-xs font-semibold text-[var(--accent-blue)] tracking-[2px]">
          HOW IT WORKS
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-dark)] text-center tracking-[-1px] md:tracking-[-1.5px]">
          A Layered Architecture Built for Enterprise
        </h2>
        <p className="text-base md:text-lg text-[var(--text-dark-secondary)] text-center leading-[1.6] max-w-[620px]">
          Five purpose-built layers work together to tokenise, anchor, and query
          your asset data — without replacing existing systems.
        </p>
      </div>

      {/* Architecture Stack */}
      <div className="flex flex-col items-center gap-2 w-full max-w-[900px]">
        {layers.map((layer) => (
          <div
            key={layer.num}
            className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 min-h-[72px] w-full px-4 sm:px-7 py-3 sm:py-0 rounded-xl ${layer.bg} border ${layer.border}`}
          >
            <div className="flex items-center gap-3 sm:gap-3.5">
              <div
                className={`flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg shrink-0 ${layer.numBg}`}
              >
                <span className="font-display text-sm sm:text-base font-extrabold text-white">
                  {layer.num}
                </span>
              </div>
              <span className="font-display text-sm sm:text-base font-bold text-[var(--text-dark)]">
                {layer.title}
              </span>
            </div>
            <span className="text-xs sm:text-[13px] text-[var(--text-dark-tertiary)] sm:text-right pl-11 sm:pl-0">
              {layer.desc}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
