import { Link } from 'wouter';

export function GradlmSection() {
  return (
    <article className="module-chapter module-chapter--orange" aria-labelledby="gradlm-heading">
      <div className="module-chapter__number">03 <span>Move forward</span></div>
      <div className="module-chapter__body">
        <h3 id="gradlm-heading">GradLM Study Abroad</h3>
        <p>Intelligent guidance for students exploring universities, countries and the journey toward studying abroad.</p>
        <Link className="module-link" href="/products/gradlm">Explore GradLM →</Link>
      </div>
      <div className="module-chapter__glyph" aria-hidden="true"><span /><span /><span /></div>
    </article>
  );
}