export function ExperienceCard({ item }) {
  return (
    <article className="glass-panel experience-card">
      <div className="card-heading">
        <div>
          <h3>{item.role}</h3>
          <p className="muted-text">{item.organization}</p>
        </div>
        <span className="date-pill">{item.dates}</span>
      </div>

      <ul className="detail-list">
        {item.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </article>
  );
}
