import { useState } from 'react';
import { journeyDimensions, journeyProducts, type JourneyId } from './hero-data';
import { JourneyConnections } from './journey-connections';
import { JourneyNode } from './journey-node';
import { ProductMarker } from './product-marker';

export function HeroJourneyVisual() {
  const [activeId, setActiveId] = useState<JourneyId | null>(null);

  const activate = (id: JourneyId) => setActiveId(id);
  const deactivate = () => setActiveId(null);

  return (
    <div className="hero-journey" aria-label="MentoraLM journey map">
      <div className="hero-journey__header">
        <span className="hero-journey__kicker">A clearer way forward</span>
        <span className="hero-journey__legend">Your journey, in motion</span>
      </div>
      <div className="journey-map-stage">
        <JourneyConnections activeId={activeId} />
        <div className="journey-you">
          <span className="journey-you__ring" aria-hidden="true" />
          <span className="journey-you__label">YOU</span>
          <span className="journey-you__descriptor">Your journey starts here.</span>
        </div>
        <div className="journey-nodes" aria-label="Four dimensions of your journey">
          {journeyDimensions.map((node) => (
            <JourneyNode
              key={node.id}
              node={node}
              isActive={activeId === node.id}
              isQuiet={activeId !== null && activeId !== node.id}
              onActivate={activate}
              onDeactivate={deactivate}
            />
          ))}
        </div>
        <div className="journey-products" aria-label="MentoraLM products">
          {journeyProducts.map((product) => (
            <ProductMarker
              key={product.id}
              product={product}
              isRelated={activeId === product.dimension}
              isQuiet={activeId !== null && activeId !== product.dimension}
              onActivate={activate}
              onDeactivate={deactivate}
            />
          ))}
        </div>
      </div>
    </div>
  );
}