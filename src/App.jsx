import { useEffect, useState } from 'react';
import { portfolioData } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { ExperienceCard } from './components/ExperienceCard';
import { ProjectCard } from './components/ProjectCard';
import { SkillsGroup } from './components/SkillsGroup';
import { ContactCard } from './components/ContactCard';

const sectionOrder = [
  { id: 'experience', title: 'Experience', eyebrow: 'Career path' },
  { id: 'projects', title: 'Projects', eyebrow: 'Selected work' },
  { id: 'skills', title: 'Skills', eyebrow: 'Toolbox' },
  { id: 'about', title: 'About', eyebrow: 'Personal profile' },
  { id: 'contact', title: 'Contact', eyebrow: 'Get in touch' },
];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const ids = ['home', ...sectionOrder.map((section) => section.id)];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        threshold: [0.2, 0.35, 0.5, 0.7],
        rootMargin: '-10% 0px -45% 0px',
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <div className="background-orb orb-one" />
      <div className="background-orb orb-two" />
      <div className="background-orb orb-three" />

      <Navbar
        navLinks={portfolioData.navLinks}
        quickLinks={portfolioData.quickLinks}
        activeSection={activeSection}
      />

      <main className="page-content">
        <Hero hero={portfolioData.hero} quickLinks={portfolioData.quickLinks} />

        <Section
          id="experience"
          eyebrow="Career path"
          title="Experience"
          intro="Highlights from roles that show product thinking, engineering rigor, and execution."
        >
          <div className="stack-grid">
            {portfolioData.experience.map((item) => (
              <ExperienceCard key={`${item.role}-${item.organization}`} item={item} />
            ))}
          </div>
        </Section>

        <Section
          id="projects"
          eyebrow="Selected work"
          title="Projects"
          intro="A few representative builds with clean product framing, concise explanations, and clear technology context."
        >
          <div className="project-grid">
            {portfolioData.projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>

        <Section
          id="skills"
          eyebrow="Toolbox"
          title="Skills"
          intro="Organized by area so the content stays readable on mobile and easy to update later."
        >
          <div className="skills-grid">
            {portfolioData.skills.map((group) => (
              <SkillsGroup key={group.category} group={group} />
            ))}
          </div>
        </Section>

        <Section
          id="about"
          eyebrow="Personal profile"
          title="About"
          intro={portfolioData.about.intro}
        >
          <div className="glass-panel about-panel">
            <p>{portfolioData.about.body}</p>
          </div>
        </Section>

        <Section
          id="contact"
          eyebrow="Get in touch"
          title="Contact"
          intro="Open to internships, full-time roles, and collaborative product or engineering work."
        >
          <ContactCard contact={portfolioData.contact} quickLinks={portfolioData.quickLinks} />
        </Section>
      </main>
    </div>
  );
}
