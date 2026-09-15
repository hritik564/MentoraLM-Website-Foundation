import { Link } from 'wouter';

export function AiCareerCounsellingSection() {
  return (
    <article className="module-chapter module-chapter--cyan" aria-labelledby="ai-career-heading">
      <div className="module-chapter__number">01 <span>Understand</span></div>
      <div className="module-chapter__body">
        <h3 id="ai-career-heading">AI Career Counselling</h3>
        <p>Personalised career guidance that helps students understand themselves, explore possibilities and make confident decisions.</p>
        <Link className="module-link" href="/products/ai-career-counselling">Explore AI Career Counselling →</Link>
      </div>
      <div className="module-chapter__glyph" aria-hidden="true"><span /><span /><span /></div>
    </article>
  );
}