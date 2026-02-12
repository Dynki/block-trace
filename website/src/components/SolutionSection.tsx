import {
  House,
  Factory,
  Box,
  Map,
  Zap,
  Wrench,
  Shield,
  Package,
  Cpu,
  BadgeCheck,
  Truck,
} from "lucide-react";

interface TreeItem {
  icon: React.ReactNode;
  label: string;
  indent: "root" | "child" | "grandchild";
  highlight?: boolean;
}

const houseTree: TreeItem[] = [
  { icon: <Box className="w-4 h-4 text-white" />, label: "House Token", indent: "root" },
  { icon: <Map className="w-3.5 h-3.5 text-[#3B82F6]" />, label: "Survey Token", indent: "child" },
  { icon: <Zap className="w-3.5 h-3.5 text-[#3B82F6]" />, label: "Electrical Certificate", indent: "child" },
  { icon: <Wrench className="w-3.5 h-3.5 text-[#3B82F6]" />, label: "Renovation Record", indent: "child" },
  { icon: <Shield className="w-3.5 h-3.5 text-[#3B82F6]" />, label: "Insurance Policy", indent: "child" },
];

const mfgTree: TreeItem[] = [
  { icon: <Box className="w-4 h-4 text-white" />, label: "Finished Product", indent: "root" },
  { icon: <Package className="w-3.5 h-3.5 text-[#60A5FA]" />, label: "Sub-Assembly A", indent: "child", highlight: true },
  { icon: <Cpu className="w-3.5 h-3.5 text-[#3B82F6]" />, label: "Component A1", indent: "grandchild" },
  { icon: <Cpu className="w-3.5 h-3.5 text-[#3B82F6]" />, label: "Component A2", indent: "grandchild" },
  { icon: <BadgeCheck className="w-3.5 h-3.5 text-[#3B82F6]" />, label: "Quality Certificate", indent: "child" },
  { icon: <Truck className="w-3.5 h-3.5 text-[#3B82F6]" />, label: "Shipping Manifest", indent: "child" },
];

function TreeRow({ item }: { item: TreeItem }) {
  const paddings = {
    root: "px-4 py-2.5",
    child: "pl-10 pr-4 py-2.5",
    grandchild: "pl-[72px] pr-4 py-2.5",
  };

  if (item.indent === "root") {
    return (
      <div className={`flex items-center gap-2.5 ${paddings[item.indent]} rounded-lg bg-[var(--accent-blue)] w-full`}>
        {item.icon}
        <span className="text-sm font-semibold text-white">{item.label}</span>
      </div>
    );
  }

  if (item.highlight) {
    return (
      <div className={`flex items-center gap-2.5 ${paddings[item.indent]} rounded-lg bg-[#1E3A5F40] border border-[#2563EB30] w-full`}>
        {item.icon}
        <span className="text-[13px] font-semibold text-[#93C5FD]">{item.label}</span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2.5 ${paddings[item.indent]} rounded-lg bg-[var(--bg-dark-card)] w-full`}>
      {item.icon}
      <span className="text-[13px] font-medium text-[var(--text-white-secondary)]">{item.label}</span>
    </div>
  );
}

export default function SolutionSection() {
  return (
    <section className="flex flex-col items-center gap-10 md:gap-16 w-full px-5 sm:px-8 lg:px-20 py-16 md:py-[100px] bg-[var(--bg-dark)]">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 md:gap-5 max-w-[750px]">
        <span className="text-xs font-semibold text-[var(--accent-blue-light)] tracking-[2px]">
          THE SOLUTION
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-white)] text-center tracking-[-1px] md:tracking-[-1.5px]">
          From Flat Records to Composable Asset Graphs
        </h2>
        <p className="text-base md:text-lg text-[var(--text-white-secondary)] text-center leading-[1.6] max-w-[650px]">
          A real-world asset becomes a root token. Each certificate, component,
          or document is a sub-token. Each sub-token can itself contain
          sub-tokens — forming a verifiable, composable structure.
        </p>
      </div>

      {/* Example Cards */}
      <div className="flex flex-col lg:flex-row justify-center gap-6 lg:gap-8 w-full">
        {/* Real Estate */}
        <div className="flex flex-col gap-5 md:gap-6 w-full lg:w-[580px] p-6 md:p-9 rounded-2xl bg-[var(--bg-dark-elevated)] border border-[var(--border-dark)]">
          <div className="flex items-center gap-2.5">
            <House className="w-5 h-5 text-[var(--accent-blue-light)]" />
            <span className="font-display text-lg font-bold text-[var(--text-white)]">
              Real Estate Example
            </span>
          </div>
          <div className="flex flex-col gap-1 w-full">
            {houseTree.map((item, i) => (
              <TreeRow key={i} item={item} />
            ))}
          </div>
        </div>

        {/* Manufacturing */}
        <div className="flex flex-col gap-5 md:gap-6 w-full lg:w-[580px] p-6 md:p-9 rounded-2xl bg-[var(--bg-dark-elevated)] border border-[var(--border-dark)]">
          <div className="flex items-center gap-2.5">
            <Factory className="w-5 h-5 text-[var(--accent-blue-light)]" />
            <span className="font-display text-lg font-bold text-[var(--text-white)]">
              Manufacturing Example
            </span>
          </div>
          <div className="flex flex-col gap-1 w-full">
            {mfgTree.map((item, i) => (
              <TreeRow key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
