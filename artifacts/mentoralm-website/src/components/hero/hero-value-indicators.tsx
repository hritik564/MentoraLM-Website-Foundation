const valueIndicators = [
  'Personalised Guidance',
  'AI + Human Expertise',
  'Built for Indian Students',
] as const;

export function HeroValueIndicators() {
  return (
    <ul className="hero-value-indicators" aria-label="What MentoraLM brings together">
      {valueIndicators.map((indicator) => (
        <li key={indicator}>
          <span className="hero-value-indicators__mark" aria-hidden="true" />
          {indicator}
        </li>
      ))}
    </ul>
  );
}