export const portfolioData = {
  navLinks: [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ],
  quickLinks: [
    { label: 'View Resume', href: '#', kind: 'primary' },
    { label: 'GitHub', href: 'https://github.com/', kind: 'secondary' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/', kind: 'secondary' },
  ],
  hero: {
    name: 'Sofia Yu',
    tagline: 'Building thoughtful digital products with clean engineering and calm, polished design.',
    summary:
      'This starter portfolio is structured so you can quickly replace the placeholder content with your real roles, projects, resume link, and headshot.',
    profileImage: '',
    profileAlt: 'Placeholder profile area',
  },
  experience: [
    {
      role: 'Frontend Developer Intern',
      organization: 'Example Tech Company',
      dates: 'May 2025 - Aug 2025',
      bullets: [
        'Built responsive UI components for internal dashboards using React and TypeScript.',
        'Collaborated with product and design teams to improve usability and streamline workflows.',
        'Reduced repetitive implementation work by creating reusable component patterns.',
      ],
    },
    {
      role: 'Software Engineering Project Lead',
      organization: 'University Product Lab',
      dates: 'Jan 2025 - Present',
      bullets: [
        'Led a small engineering team through planning, implementation, and demo delivery.',
        'Defined project milestones, delegated technical tasks, and maintained code quality standards.',
        'Shipped a student-facing application with a strong focus on accessibility and mobile usability.',
      ],
    },
    {
      role: 'Research Assistant',
      organization: 'Human-Centered Computing Group',
      dates: 'Sep 2024 - Dec 2024',
      bullets: [
        'Prototyped interfaces for early-stage concepts and tested them with peers for feedback.',
        'Analyzed findings and translated them into focused product improvements.',
        'Documented experiments clearly to support cross-functional collaboration.',
      ],
    },
  ],
  projects: [
    {
      title: 'Portfolio Website',
      description:
        'A responsive personal portfolio with reusable React components, editable content data, and a glassmorphism visual system.',
      techStack: ['React', 'Vite', 'CSS'],
      links: [
        { label: 'Live Demo', href: '#' },
        { label: 'Source', href: 'https://github.com/' },
      ],
    },
    {
      title: 'Campus Events Platform',
      description:
        'A student-focused web app for discovering events, saving favorites, and improving event visibility across campus.',
      techStack: ['React', 'Node.js', 'MongoDB'],
      links: [
        { label: 'Case Study', href: '#' },
        { label: 'GitHub', href: 'https://github.com/' },
      ],
    },
    {
      title: 'Study Planner',
      description:
        'A planning tool designed to help students break large goals into weekly tasks with a simple, calm interface.',
      techStack: ['TypeScript', 'Firebase', 'Figma'],
      links: [{ label: 'GitHub', href: 'https://github.com/' }],
    },
    {
      title: 'Analytics Dashboard',
      description:
        'A clean reporting interface that surfaces key metrics with emphasis on readability, filtering, and fast scanning.',
      techStack: ['React', 'Charting', 'REST API'],
      links: [{ label: 'Overview', href: '#' }],
    },
  ],
  skills: [
    {
      category: 'Frontend',
      items: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Responsive Design'],
    },
    {
      category: 'Backend & Data',
      items: ['Node.js', 'Express', 'REST APIs', 'Firebase', 'MongoDB', 'SQL'],
    },
    {
      category: 'Design & Workflow',
      items: ['Figma', 'Git', 'GitHub', 'Accessibility', 'UI Prototyping', 'Agile Collaboration'],
    },
  ],
  about: {
    intro: 'A brief, recruiter-friendly snapshot that stays professional without sounding generic.',
    body:
      'I enjoy building products that balance technical quality with clarity of experience. My interests sit at the intersection of software engineering, interface design, and practical problem solving. I care about details that make products feel reliable, approachable, and easy to use, especially across different screen sizes and user contexts.',
  },
  contact: {
    email: 'sofia@example.com',
    location: 'Based in the United States',
  },
};
