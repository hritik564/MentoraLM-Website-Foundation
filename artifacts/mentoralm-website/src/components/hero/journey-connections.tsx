import type { JourneyId } from './hero-data';

interface JourneyConnectionsProps {
  activeId: JourneyId | null;
}

const paths: Array<{ id: JourneyId; d: string }> = [
  { id: 'understand', d: 'M350 280 C290 250 218 188 130 112' },
  { id: 'build', d: 'M350 280 C415 248 488 190 570 112' },
  { id: 'explore', d: 'M350 280 C282 324 215 388 130 448' },
  { id: 'move-forward', d: 'M350 280 C418 326 490 390 570 448' },
];

export function JourneyConnections({ activeId }: JourneyConnectionsProps) {
  return (
    <>
      <svg
        className="journey-connections"
        viewBox="0 0 700 560"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path className="journey-connections__orbit" d="M130 112 C350 8 570 112 570 448 C350 552 130 448 130 112" />
        {paths.map((path) => (
          <path
            key={path.id}
            className={`journey-connections__path ${
              activeId === null ? '' : activeId === path.id ? 'is-related' : 'is-quiet'
            }`}
            d={path.d}
          />
        ))}
      </svg>
      <span className="journey-mobile-connection" aria-hidden="true" />
    </>
  );
}