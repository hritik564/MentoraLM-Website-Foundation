import type { JourneyDimension } from './hero-data';

interface JourneyNodeProps {
  node: JourneyDimension;
  isActive: boolean;
  isQuiet: boolean;
  onActivate: (id: JourneyDimension['id']) => void;
  onDeactivate: () => void;
}

export function JourneyNode({
  node,
  isActive,
  isQuiet,
  onActivate,
  onDeactivate,
}: JourneyNodeProps) {
  return (
    <button
      className={`journey-node journey-node--${node.id} ${isActive ? 'is-active' : ''} ${
        isQuiet ? 'is-quiet' : ''
      }`}
      type="button"
      aria-label={`${node.label}: ${node.descriptor}`}
      aria-pressed={isActive}
      data-journey-node={node.id}
      onClick={() => onActivate(node.id)}
      onFocus={() => onActivate(node.id)}
      onBlur={onDeactivate}
      onMouseEnter={() => onActivate(node.id)}
      onMouseLeave={onDeactivate}
    >
      <span className="journey-node__index" aria-hidden="true">
        0{['understand', 'build', 'explore', 'move-forward'].indexOf(node.id) + 1}
      </span>
      <span className="journey-node__label">{node.label}</span>
      <span className="journey-node__descriptor">{node.descriptor}</span>
    </button>
  );
}