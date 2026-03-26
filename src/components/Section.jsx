export function Section({ id, eyebrow, title, intro, children }) {
  return (
    <section className="content-section" id={id}>
      <div className="section-heading">
        <p className="section-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p className="section-intro">{intro}</p>
      </div>
      {children}
    </section>
  );
}
