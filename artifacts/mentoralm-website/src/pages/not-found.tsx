import { Link } from 'wouter';

export default function NotFoundPage() {
  return (
    <div className="page-container">
      <section className="foundation-panel not-found-panel" aria-labelledby="not-found-heading">
        <p className="eyebrow">MentoraLM / route status</p>
        <h1 className="product-title" id="not-found-heading" data-testid="heading-not-found">
          Route not found
        </h1>
        <p className="page-intro" data-testid="text-not-found">
          This path is not part of the Phase 0 foundation.
        </p>
        <Link className="nav-link" href="/" data-testid="link-not-found-home">
          Return to foundation
        </Link>
      </section>
    </div>
  );
}