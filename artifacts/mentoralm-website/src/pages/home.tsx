import { SectionPlaceholder } from '@/components/sections/section-placeholder';
import { ecosystemArchitecture } from '@/data/products';

export default function HomePage() {
  return (
    <div className="page-container">
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
        <SectionPlaceholder label="Homepage sections" />
        <p className="eyebrow architecture-counts" data-testid="text-architecture-counts">
          {ecosystemArchitecture.flagshipProductCount} flagship routes / {ecosystemArchitecture.unnamedUpcomingModuleCount} unnamed module slots
        </p>
      </section>
    </div>
  );
}