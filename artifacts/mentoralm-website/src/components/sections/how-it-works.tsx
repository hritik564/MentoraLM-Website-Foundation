export function HowItWorksSection() {
  const steps = ['Understand', 'Explore', 'Build', 'Move Forward'];
  return (
    <section className="editorial-section process-section" id="how-it-works" aria-labelledby="process-heading">
      <div className="section-wrap">
        <p className="section-kicker">How it works</p>
        <h2 className="section-heading" id="process-heading">A little more clarity,<br /><em>at every step.</em></h2>
        <div className="process-track">
          {steps.map((step, index) => (
            <div className="process-step" key={step}><span>0{index + 1}</span><strong>{step}</strong>{index < steps.length - 1 && <i aria-hidden="true" />}</div>
          ))}
        </div>
      </div>
    </section>
  );
}