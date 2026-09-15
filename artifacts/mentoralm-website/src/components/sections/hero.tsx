import { HeroContent } from '@/components/hero/hero-content';
import { HeroJourneyVisual } from '@/components/hero/hero-journey-visual';

export function HeroSection() {
  return (
    <section className="hero-section" id="hero" aria-labelledby="hero-heading">
      <div className="hero-shell">
        <HeroContent />
        <HeroJourneyVisual />
      </div>
      <a className="hero-scroll-cue" href="#modules">
        <span>Scroll to explore</span>
        <span className="hero-scroll-cue__line" aria-hidden="true" />
      </a>
    </section>
  );
}