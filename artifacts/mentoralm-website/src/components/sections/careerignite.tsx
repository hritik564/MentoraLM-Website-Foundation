import { Link } from 'wouter';

export function CareerIgniteSection() {
  return (
    <article className="module-chapter module-chapter--purple" aria-labelledby="careerignite-heading">
      <div className="module-chapter__number">02 <span>Build</span></div>
      <div className="module-chapter__body">
        <h3 id="careerignite-heading">CareerIgnite Program</h3>
        <p>A structured career development experience designed to turn clarity into skills, action and momentum.</p>
        <Link className="module-link" href="/products/careerignite">Explore CareerIgnite →</Link>
      </div>
      <div className="module-chapter__glyph" aria-hidden="true"><span /><span /><span /></div>
    </article>
  );
}