import { Link } from 'wouter';

export function FinalCtaSection() {
  return (
    <section className="final-cta" id="get-started" aria-labelledby="final-cta-heading">
      <div className="section-wrap final-cta__inner">
        <p className="section-kicker">The next step is yours</p>
        <h2 id="final-cta-heading">Your next chapter<br /><em>should be clearer.</em></h2>
        <Link className="ds-button ds-button--primary final-cta__button" href="/#modules">Start Your Journey →</Link>
      </div>
    </section>
  );
}