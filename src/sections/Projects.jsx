import './Projects.css'

const projects = [
  {
    title: 'rn-storybook-auto-screenshots',
    period: 'Dec 2025 – Present',
    description:
      'npm-published React Native library with a zero-config API: drop it in, run one command, and every Storybook story is rendered on Android and captured as a deterministic PNG. Consumers get pixel-level visual regression checks on every PR without writing a single native file.',
    tags: ['React Native', 'TypeScript', 'Android SDK', 'GitHub Actions', 'Storybook'],
    github: 'https://github.com/EmilioBejasa/rn-storybook-auto-screenshots',
    live: null,
    featured: true,
    highlight: true,
  },
  {
    title: 'iOS Test Kit',
    period: 'Aug 2026 – Present',
    description:
      'Modular Swift Package providing reusable infrastructure for iOS networking, persistence, UI automation, performance monitoring, and system integrations. 59 independently consumable components built with Swift protocols, dependency injection, and test doubles, validated through reusable GitHub Actions workflows and a production-style demo app covering UI behavior, accessibility, performance, and local data persistence.',
    tags: ['Swift', 'XCTest', 'GitHub Actions', 'iOS SDK'],
    github: 'https://github.com/EmilioBejasa/iOS_testing_suite',
    live: null,
    featured: true,
  },
  {
    title: 'Poetry Portfolio Website',
    period: 'Aug 2026',
    description:
      'Responsive portfolio website built from the ground up to showcase published poetry, artwork, and biographical content. Reusable page layouts and navigation across Home, About, Poems, Art, and Contact sections, with content-focused UI design for a consistent browsing experience across desktop and mobile.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/EmilioBejasa/nick-website',
    live: 'https://nicholastylerng.com',
    featured: false,
  },
  {
    title: 'Audioviz',
    period: 'Sep 2024 – Dec 2024',
    description:
      'Advanced audio visualizer with HSV range selection and dynamic spectrum cycling. Integrated into an oscilloscope for consistent theming, enabling customizable MP3-to-waveform rendering with spectrum rotation and user-defined modes.',
    tags: ['C++'],
    github: 'https://github.com/EmilioBejasa/audioviz',
    live: null,
    featured: true,
  },
  {
    title: 'LEGUP',
    period: 'Jan 2024 – May 2024',
    description:
      'Backend modules enabling UI-driven creation of first-order logic puzzles. Built import/export features for user-generated content. Collaborated in an Agile team to refine game mechanics and meet project milestones.',
    tags: ['Java', 'Agile'],
    github: 'https://github.com/EmilioBejasa/LEGUP',
    live: null,
    featured: true,
  },
  {
    title: 'Phoenix Bionics',
    period: 'Jun 2023 – Aug 2023',
    description:
      'Programmed Arduino microcontrollers and integrated hardware for cost-effective bionic hand prototypes. Designed enhanced circuitry for improved performance and rebuilt the company website with new branding.',
    tags: ['Arduino', 'HTML', 'CSS'],
    github: 'https://github.com/Tr3ntroxs/Phoenix',
    live: null,
    featured: false,
  },
  {
    title: 'Such Life',
    period: 'Sep 2022 – Dec 2022',
    description:
      'Optimized RPG mechanics by refining movement and combat systems and improving animation flow. Fixed character orientation to align with mouse input, enhancing gameplay responsiveness.',
    tags: ['C', 'C#', 'Unity'],
    github: 'https://github.com/gaberdell/SuchLife2.0GameProject',
    live: null,
    featured: false,
  },
]

function ExternalIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <p className="section-label">04. Projects</p>
      <h2 className="section-title">Things I&apos;ve Built</h2>
      <div className="section-divider" />

      <div className="projects-grid">
        {projects.map(project => (
          <article key={project.title} className={`project-card ${project.featured ? 'featured' : ''} ${project.highlight ? 'highlight' : ''}`}>
            <div className="project-header">
              <div>
                {project.featured && <span className="project-featured-badge">Featured</span>}
                <h3 className="project-title">{project.title}</h3>
                <span className="project-period">{project.period}</span>
              </div>
              <div className="project-icons">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <GithubIcon />
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live demo">
                    <ExternalIcon />
                  </a>
                )}
              </div>
            </div>
            <p className="project-description">{project.description}</p>
            <ul className="project-tags">
              {project.tags.map(tag => (
                <li key={tag} className="skill-tag">{tag}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
