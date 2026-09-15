import { HeroSection } from '@/components/sections/hero';
import { ProblemSection } from '@/components/sections/problem';
import { IntelligenceSection } from '@/components/sections/intelligence';
import { AiCareerCounsellingSection } from '@/components/sections/ai-career-counselling';
import { CareerIgniteSection } from '@/components/sections/careerignite';
import { GradlmSection } from '@/components/sections/gradlm';
import { HowItWorksSection } from '@/components/sections/how-it-works';
import { MentiSection } from '@/components/sections/menti';
import { WhyMentoraLmSection } from '@/components/sections/why-mentoralm';
import { FinalCtaSection } from '@/components/sections/final-cta';
import { FooterSection } from '@/components/sections/footer';

export default function HomePage() {
  return (
    <div className="page-container page-container--home" id="home">
      <HeroSection />
      <ProblemSection />
      <IntelligenceSection />
      <section id="modules" className="module-chapters" aria-labelledby="modules-heading">
        <div className="section-wrap">
          <p className="section-kicker">The MentoraLM ecosystem</p>
          <h2 className="section-heading" id="modules-heading">Three ways to move forward.</h2>
          <p className="section-intro">One connected ecosystem, shaped around the decisions that matter most.</p>
        </div>
        <AiCareerCounsellingSection />
        <CareerIgniteSection />
        <GradlmSection />
      </section>
      <HowItWorksSection />
      <MentiSection />
      <WhyMentoraLmSection />
      <FinalCtaSection />
      <FooterSection />
    </div>
  );
}