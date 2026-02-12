import {
  Box,
  FileCheck,
  Cpu,
  FileText,
  ShieldCheck,
  Calendar,
  Hash,
  Scan,
  Timer,
  ArrowRight,
  Layers,
} from "lucide-react";

const trustLogos = ["Siemens", "Maersk", "JLL", "Deloitte", "BASF"];

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-8 md:gap-12 w-full px-5 sm:px-8 lg:px-20 pt-16 md:pt-[100px] pb-12 md:pb-20 bg-[radial-gradient(ellipse_150%_150%_at_50%_30%,#1E3A5F30_0%,#09090B_100%)]">
      {/* Badge */}
      <div className="flex items-center gap-2 px-4 py-1.5 rounded-[20px] border border-[var(--border-dark)]">
        <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
        <span className="text-[13px] font-medium text-[var(--text-white-secondary)]">
          Now in Private Beta
        </span>
      </div>

      {/* Headline */}
      <div className="flex flex-col items-center gap-4 md:gap-6 max-w-[900px]">
        <h1 className="font-display text-4xl sm:text-5xl md:text-[64px] font-extrabold text-[var(--text-white)] text-center leading-[1.1] md:leading-[1.05] tracking-[-1px] md:tracking-[-2px]">
          Composable Token Infrastructure for Real-World Assets
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-[#A1A1AA] text-center leading-[1.6] max-w-[680px]">
          Turn physical assets into verifiable digital structures with complete
          lifecycle traceability. From manufacturing to real estate — one
          composable layer.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
        <a
          href="#"
          className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-[10px] bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] transition-colors"
        >
          <span className="text-base font-semibold text-white">Request Demo</span>
          <ArrowRight className="w-[18px] h-[18px] text-white" />
        </a>
        <a
          href="#"
          className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-[10px] border border-[#3F3F46] hover:border-[#52525B] transition-colors"
        >
          <span className="text-base font-medium text-[var(--text-white-secondary)]">
            View Architecture
          </span>
          <Layers className="w-[18px] h-[18px] text-[var(--text-white-tertiary)]" />
        </a>
      </div>

      {/* Token Visualization */}
      <div className="relative w-full max-w-[800px] h-[280px] rounded-2xl border border-[#1E1E24] overflow-hidden bg-[var(--bg-dark)] hidden md:block">
        {/* Background image */}
        <img
          src="/images/generated-1770887264229.png"
          alt="Token visualization background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Root node */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 flex items-center gap-2.5 px-5 py-3 rounded-[10px] bg-[var(--accent-blue)]">
          <Box className="w-4 h-4 text-white" />
          <span className="text-[13px] font-semibold text-white">Asset Token</span>
        </div>

        {/* Vertical line from root */}
        <div className="absolute top-[60px] left-1/2 w-px h-10 bg-[#2563EB50]" />

        {/* Horizontal connector */}
        <div className="absolute top-[100px] left-[calc(50%-220px)] w-[440px] h-px bg-[#2563EB30]" />

        {/* Vertical lines to children */}
        <div className="absolute top-[100px] left-[150px] w-px h-2.5 bg-[#2563EB30]" />
        <div className="absolute top-[100px] left-1/2 w-px h-2.5 bg-[#2563EB30]" />
        <div className="absolute top-[100px] right-[210px] w-px h-2.5 bg-[#2563EB30]" />

        {/* Child nodes */}
        <TokenNode icon={<FileCheck className="w-3.5 h-3.5 text-[#3B82F6]" />} label="Certificate" x={80} y={110} />
        <TokenNode icon={<Cpu className="w-3.5 h-3.5 text-[#3B82F6]" />} label="Component" x={310} y={110} />
        <TokenNode icon={<FileText className="w-3.5 h-3.5 text-[#3B82F6]" />} label="Document" x={530} y={110} />

        {/* Vertical lines to sub-nodes */}
        <div className="absolute top-[146px] left-[150px] w-px h-[30px] bg-[#2563EB20]" />
        <div className="absolute top-[146px] left-1/2 w-px h-[30px] bg-[#2563EB20]" />
        <div className="absolute top-[146px] right-[210px] w-px h-[30px] bg-[#2563EB20]" />

        {/* Sub-nodes */}
        <SubTokenNode icon={<ShieldCheck className="w-3 h-3 text-[#3B82F680]" />} label="Issuer Sig" x={50} y={184} />
        <SubTokenNode icon={<Calendar className="w-3 h-3 text-[#3B82F680]" />} label="Expiry" x={180} y={184} />
        <SubTokenNode icon={<Hash className="w-3 h-3 text-[#3B82F680]" />} label="Serial No." x={290} y={184} />
        <SubTokenNode icon={<Scan className="w-3 h-3 text-[#3B82F680]" />} label="Origin" x={410} y={184} />
        <SubTokenNode icon={<FileText className="w-3 h-3 text-[#3B82F680]" />} label="PDF Hash" x={530} y={184} />
        <SubTokenNode icon={<Timer className="w-3 h-3 text-[#3B82F680]" />} label="Version" x={650} y={184} />

        {/* Label */}
        <span className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[11px] font-medium text-[var(--text-white)]">
          Composable Token Pack — Recursive Asset Structure
        </span>
      </div>

      {/* Trust Bar */}
      <div className="flex flex-col items-center gap-4 w-full">
        <span className="text-[11px] font-semibold text-[#52525B] tracking-[2px]">
          TRUSTED BY ENTERPRISE TEAMS
        </span>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 w-full">
          {trustLogos.map((logo) => (
            <span
              key={logo}
              className="font-display text-base sm:text-lg font-bold text-[#52525B]"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function TokenNode({
  icon,
  label,
  x,
  y,
}: {
  icon: React.ReactNode;
  label: string;
  x: number;
  y: number;
}) {
  return (
    <div
      className="absolute flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--bg-dark-elevated)] border border-[var(--border-dark)]"
      style={{ left: x, top: y }}
    >
      {icon}
      <span className="text-xs font-medium text-[var(--text-white-secondary)]">
        {label}
      </span>
    </div>
  );
}

function SubTokenNode({
  icon,
  label,
  x,
  y,
}: {
  icon: React.ReactNode;
  label: string;
  x: number;
  y: number;
}) {
  return (
    <div
      className="absolute flex items-center gap-1.5 px-3 py-2 rounded-md bg-[#111114] border border-[#1E1E24]"
      style={{ left: x, top: y }}
    >
      {icon}
      <span className="text-[11px] text-[#71717A]">{label}</span>
    </div>
  );
}
