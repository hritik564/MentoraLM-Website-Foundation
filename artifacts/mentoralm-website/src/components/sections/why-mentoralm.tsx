export function WhyMentoraLmSection() {
  const reasons = ['Personalised guidance', 'AI intelligence', 'Human expertise', 'Real-world context'];
  return (
    <section className="editorial-section why-section" id="why-mentoralm" aria-labelledby="why-heading">
      <div className="section-wrap why-layout">
        <div><p className="section-kicker">Why MentoraLM</p><h2 className="section-heading section-heading--large" id="why-heading">Not just answers.<br /><em>Better questions.</em></h2></div>
        <div className="why-list">{reasons.map((reason, index) => <div className="why-list__item" key={reason}><span>0{index + 1}</span><strong>{reason}</strong><i aria-hidden="true">+</i></div>)}</div>
      </div>
    </section>
  );
}