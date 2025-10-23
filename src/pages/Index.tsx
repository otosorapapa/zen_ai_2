import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import AIWorkflowShowcase from "@/components/AIWorkflowShowcase";
import ServiceOverviewSection from "@/components/ServiceOverviewSection";
import AIBenefitsSection from "@/components/AIBenefitsSection";
import ResultsSection from "@/components/ResultsSection";
import AIDemoExperienceSection from "@/components/AIDemoExperienceSection";
import AIDiagnosticSimulator from "@/components/AIDiagnosticSimulator";
import ExecutiveBenefitsQuickLinks from "@/components/ExecutiveBenefitsQuickLinks";
import SecurityPrivacySection from "@/components/SecurityPrivacySection";
import AIAdvisorChatbot from "@/components/AIAdvisorChatbot";
import SectionCtaBanner from "@/components/SectionCtaBanner";
import PlansSection from "@/components/PlansSection";
import ResourcesSection from "@/components/ResourcesSection";
import FAQSection from "@/components/FAQSection";
import MessageSection from "@/components/MessageSection";
import CTASection from "@/components/CTASection";
import FloatingContactButton from "@/components/FloatingContactButton";
import StickyCtaBar from "@/components/StickyCtaBar";
import StructuredData from "@/components/StructuredData";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900">
      <StructuredData />
      <StickyCtaBar />
      <FloatingContactButton />
      <main className="flex flex-col gap-16">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <AIWorkflowShowcase />
        <ServiceOverviewSection />
        <AIBenefitsSection />
        <ResultsSection />
        <AIDemoExperienceSection />
        <AIDiagnosticSimulator />
        <ExecutiveBenefitsQuickLinks />
        <SecurityPrivacySection />
        <AIAdvisorChatbot />
        <SectionCtaBanner />
        <PlansSection />
        <ResourcesSection />
        <FAQSection />
        <MessageSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
