import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyItMattersSection from "@/components/WhyItMattersSection";
import UseCasesSection from "@/components/UseCasesSection";
import ProductSection from "@/components/ProductSection";
import SecuritySection from "@/components/SecuritySection";
import EnterprisePlatformSection from "@/components/EnterprisePlatformSection";
import VisionSection from "@/components/VisionSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <WhyItMattersSection />
      <UseCasesSection />
      <ProductSection />
      <SecuritySection />
      <EnterprisePlatformSection />
      <VisionSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
