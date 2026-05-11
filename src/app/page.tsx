import { Header } from "@/maschinenbauer/components/header";
import { CookieBanner } from "@/maschinenbauer/components/cookie-banner";
import { HeroSection } from "@/maschinenbauer/components/landing/hero-section";
import { TrustStripSection } from "@/maschinenbauer/components/landing/trust-strip-section";
import { ProblemSection } from "@/maschinenbauer/components/landing/problem-section";
import { CoreMessageSection } from "@/maschinenbauer/components/landing/core-message-section";
import { MachineSystemVisual } from "@/maschinenbauer/components/landing/machine-system-visual";
import { SchwerpunkteSection } from "@/maschinenbauer/components/landing/schwerpunkte-section";
import { ProcessSection } from "@/maschinenbauer/components/landing/process-section";
import { FitSection } from "@/maschinenbauer/components/landing/fit-section";
import { CaseStudySection } from "@/maschinenbauer/components/landing/case-study-section";
import { FutureVisionSection } from "@/maschinenbauer/components/landing/future-vision-section";
import { FAQSection } from "@/maschinenbauer/components/landing/faq-section";
import { FinalCTASection } from "@/maschinenbauer/components/landing/final-cta-section";
import { Footer } from "@/maschinenbauer/components/landing/footer";
import { MaschinenbauerConfigProvider } from "@/maschinenbauer/lib/booking";
import { getMaschinenbauerConfig } from "@/maschinenbauer/serverConfig";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Home() {
  const config = await getMaschinenbauerConfig();

  return (
    <MaschinenbauerConfigProvider config={config}>
      <main className="min-h-screen overflow-x-clip bg-background text-foreground">
        <Header />
        <HeroSection />
        <TrustStripSection />
        <ProblemSection />
        <CoreMessageSection />
        <MachineSystemVisual />
        <SchwerpunkteSection />
        <ProcessSection />
        <FitSection />
        <CaseStudySection />
        <FutureVisionSection />
        <FAQSection />
        <FinalCTASection />
        <Footer />
        <CookieBanner />
      </main>
    </MaschinenbauerConfigProvider>
  );
}
