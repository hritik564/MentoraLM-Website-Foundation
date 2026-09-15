import { Link } from 'wouter';

export function HeroSection() {
  return (
    <section className="editorial-hero" aria-labelledby="hero-heading">
      <div className="hero-shell editorial-hero__shell">
        <div className="hero-content">
          <p className="hero-eyebrow">MentoraLM / a clearer way forward</p>
          <h1 className="hero-heading" id="hero-heading">Your Future Deserves More Than a Guess.</h1>
          <p className="hero-supporting-copy">
            MentoraLM combines AI, personalised guidance and real-world career intelligence to help you make better decisions about what to study, where to go, and who you want to become.
          </p>
          <div className="hero-actions">
            <Link className="ds-button ds-button--primary hero-action" href="/#modules">Explore MentoraLM →</Link>
            <Link className="ds-button ds-button--secondary hero-action" href="/#menti">Meet Menti</Link>
          </div>
        </div>
        <div className="hero-ecosystem" aria-label="MentoraLM ecosystem: one intelligence layer connects three product chapters">
          <div className="hero-ecosystem__caption"><span>One intelligence layer</span><span>Three product chapters</span></div>
          <svg className="hero-ecosystem__lines" viewBox="0 0 640 500" aria-hidden="true">
            <path d="M320 250 C220 180 160 120 92 88" />
            <path d="M320 250 C420 180 480 120 548 88" />
            <path d="M320 250 C320 340 320 390 320 446" />
            <circle cx="92" cy="88" r="4" /><circle cx="548" cy="88" r="4" /><circle cx="320" cy="446" r="4" />
          </svg>
          <div className="ecosystem-orbit ecosystem-orbit--outer" aria-hidden="true" />
          <div className="ecosystem-orbit ecosystem-orbit--inner" aria-hidden="true" />
          <div className="ecosystem-center">
            <span className="ecosystem-center__mark">YOU</span>
            <strong>The learner</strong>
            <span>understanding in motion</span>
          </div>
          <div className="ecosystem-node ecosystem-node--cyan"><span>01</span><strong>Understand</strong><small>AI Career Counselling</small></div>
          <div className="ecosystem-node ecosystem-node--purple"><span>02</span><strong>Build</strong><small>CareerIgnite Program</small></div>
          <div className="ecosystem-node ecosystem-node--orange"><span>03</span><strong>Move forward</strong><small>GradLM Study Abroad</small></div>
          <div className="ecosystem-footerline"><span>PERSONALISED GUIDANCE</span><span>HUMAN EXPERTISE</span><span>REAL-WORLD CONTEXT</span></div>
        </div>
      </div>
    </section>
  );
}