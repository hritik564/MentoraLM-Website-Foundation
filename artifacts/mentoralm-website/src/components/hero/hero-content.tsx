import { HeroActions } from './hero-actions';
import { HeroValueIndicators } from './hero-value-indicators';

export function HeroContent() {
  return (
    <div className="hero-content">
      <p className="hero-eyebrow">MENTORALM</p>
      <h1 className="hero-heading" id="hero-heading">
        Your Future Deserves More Than a Guess.
      </h1>
      <p className="hero-supporting-copy">
        MentoraLM brings intelligent guidance, human expertise, and career-building experiences
        together to help you make clearer decisions about your future.
      </p>
      <HeroActions />
      <HeroValueIndicators />
    </div>
  );
}