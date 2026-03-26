export function SkillsGroup({ group }) {
  return (
    <article className="glass-panel skills-card">
      <h3>{group.category}</h3>
      <div className="tag-list">
        {group.items.map((item) => (
          <span key={`${group.category}-${item}`} className="tag">
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
