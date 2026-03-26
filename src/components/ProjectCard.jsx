export function ProjectCard({ project }) {
  return (
    <article className="glass-panel project-card">
      <div className="card-heading">
        <h3>{project.title}</h3>
      </div>

      <p className="project-description">{project.description}</p>

      <div className="tag-list">
        {project.techStack.map((tech) => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
      </div>

      {project.links?.length ? (
        <div className="project-links">
          {project.links.map((link) => (
            <a
              key={`${project.title}-${link.label}`}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}
