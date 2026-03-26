export function ContactCard({ contact, quickLinks }) {
  return (
    <div className="glass-panel contact-card">
      <div className="contact-primary">
        <h3>Let&apos;s connect</h3>
        <p>
          Email:{' '}
          <a href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        </p>
        <p>{contact.location}</p>
      </div>

      <div className="contact-links">
        {quickLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="button-link button-subtle"
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
          >
            {link.label}
          </a>
        ))}
        <a
          href={`mailto:${contact.email}`}
          className="button-link button-primary"
        >
          Email
        </a>
      </div>
    </div>
  );
}
