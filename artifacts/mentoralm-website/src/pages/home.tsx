import { SectionPlaceholder } from '@/components/sections/section-placeholder';
import { ecosystemArchitecture } from '@/data/products';
import { HeroSection } from '@/components/sections/hero';
import { ProblemSection } from '@/components/sections/problem';
import { IntelligenceSection } from '@/components/sections/intelligence';
import { AiCareerCounsellingSection } from '@/components/sections/ai-career-counselling';
import { CareerIgniteSection } from '@/components/sections/careerignite';
import { GradlmSection } from '@/components/sections/gradlm';
import { EcosystemSection } from '@/components/sections/ecosystem';
import { HowItWorksSection } from '@/components/sections/how-it-works';
import { MentiSection } from '@/components/sections/menti';
import { WhyMentoraLmSection } from '@/components/sections/why-mentoralm';
import { ResourcesSection } from '@/components/sections/resources';
import { FinalCtaSection } from '@/components/sections/final-cta';
import { FooterSection } from '@/components/sections/footer';

export default function HomePage() {
  return (
    <div className="page-container" id="home">
      <section className="foundation-panel" aria-labelledby="foundation-heading">
        <p className="eyebrow" data-testid="text-home-eyebrow">
          MentoraLM / architecture foundation
        </p>
        <h1 className="page-title" id="foundation-heading" data-testid="heading-home">
          Phase 0
        </h1>
        <p className="page-intro" data-testid="text-home-intro">
          Structural foundation for the MentoraLM education and career ecosystem.
        </p>
        <div className="foundation-marker" data-testid="status-foundation">
          Development foundation
        </div>
        <SectionPlaceholder id="planned-sections" label="Homepage sections" />
        <p className="eyebrow architecture-counts" data-testid="text-architecture-counts">
          {ecosystemArchitecture.flagshipProductCount} flagship routes /{' '}
          {ecosystemArchitecture.unnamedUpcomingModuleCount} unnamed module slots /{' '}
          {ecosystemArchitecture.totalModuleCount} total module slots
        </p>
      </section>
      <div className="planned-sections" aria-label="Planned homepage section structure">
        <HeroSection />
        <ProblemSection />
        <IntelligenceSection />
        <AiCareerCounsellingSection />
        <CareerIgniteSection />
        <GradlmSection />
        <EcosystemSection />
        <HowItWorksSection />
        <MentiSection />
        <WhyMentoraLmSection />
        <ResourcesSection />
        <FinalCtaSection />
        <FooterSection />
      </div>
    </div>
  );
}