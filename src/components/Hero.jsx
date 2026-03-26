function ProfileVisual({ hero }) {
  if (hero.profileImage) {
    return (
      <div className="glass-panel profile-frame">
        <img src={hero.profileImage} alt={hero.profileAlt} className="profile-image" />
      </div>
    );
  }

  return (
    <div className="glass-panel profile-frame placeholder-frame" aria-label={hero.profileAlt}>
      <div className="placeholder-avatar">
        <div className="placeholder-avatar__inner">Headshot</div>
      </div>
      <p className="placeholder-note">Replace this with your real profile image later.</p>
    </div>
  );
}

export function Hero({ hero, quickLinks }) {
  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <div className="eyebrow-chip">Portfolio</div>
        <h1>{hero.name}</h1>
        <p className="hero-tagline">{hero.tagline}</p>
        <p className="hero-summary">{hero.summary}</p>

        <div className="quick-links hero-actions">
          {quickLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`button-link ${link.kind === 'primary' ? 'button-primary' : 'button-subtle'}`}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="hero-visual">
        <ProfileVisual hero={hero} />
      </div>
    </section>
  );
}
