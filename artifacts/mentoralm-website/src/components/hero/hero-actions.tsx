import { Link } from 'wouter';

export function HeroActions() {
  return (
    <div className="hero-actions" aria-label="Hero actions">
      <Link className="ds-button ds-button--primary hero-action hero-action--primary" href="/#modules">
        Explore MentoraLM →
      </Link>
      <Link className="ds-button ds-button--secondary hero-action" href="/#menti">
        Meet Menti
      </Link>
    </div>
  );
}