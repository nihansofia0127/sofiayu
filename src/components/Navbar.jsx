import { useState } from 'react';

export function Navbar({ navLinks, quickLinks, activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar-wrap">
      <nav className="glass-panel navbar">
        <a className="brand-mark" href="#home" onClick={closeMenu}>
          SY
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <div className={`nav-content ${menuOpen ? 'is-open' : ''}`}>
          <div className="nav-links">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={activeSection === link.id ? 'is-active' : ''}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="quick-links nav-quick-links">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`button-link ${link.kind === 'primary' ? 'button-primary' : 'button-subtle'}`}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
