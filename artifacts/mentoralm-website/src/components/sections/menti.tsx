export function MentiSection() {
  return (
    <section className="editorial-section menti-section" id="menti" aria-labelledby="menti-heading">
      <div className="section-wrap menti-layout">
        <div><p className="section-kicker">Your conversation partner</p><h2 className="section-heading section-heading--large" id="menti-heading">Meet <em>Menti.</em></h2></div>
        <div className="menti-conversation" aria-label="An example conversation with Menti">
          <div className="menti-conversation__top"><span className="menti-orb" /> <span>Menti / here to help you think</span></div>
          <p className="menti-message menti-message--user">I know I want to do something meaningful. I just don't know where to start.</p>
          <p className="menti-message menti-message--menti">That is a good place to start. Let’s understand what meaningful looks like for you.</p>
          <span className="menti-cursor" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}