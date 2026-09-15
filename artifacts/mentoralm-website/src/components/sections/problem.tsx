export function ProblemSection() {
  return (
    <section className="editorial-section problem-section" aria-labelledby="problem-heading">
      <div className="section-wrap problem-layout">
        <div>
          <p className="section-kicker">The problem</p>
          <h2 className="section-heading section-heading--large" id="problem-heading">Too many choices.<br /><em>Not enough clarity.</em></h2>
        </div>
        <div className="problem-copy">
          <p>Career, education, skills, study abroad and opportunities are more connected than ever — but the path between them is harder to see.</p>
          <p>Students are asked to make life-shaping decisions with scattered information, generic advice and very little context about who they are becoming.</p>
        </div>
      </div>
      <div className="section-wrap problem-register" aria-label="The decisions students are navigating">
        {['Career direction', 'Education choices', 'Skills to build', 'Where to study', 'Opportunities ahead'].map((item, index) => (
          <div className="problem-register__row" key={item}><span>0{index + 1}</span><strong>{item}</strong><i aria-hidden="true">↗</i></div>
        ))}
      </div>
    </section>
  );
}