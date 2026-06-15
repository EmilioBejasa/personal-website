import './Experience.css'

const experiences = [
  {
    role: 'Mobile Developer',
    company: 'Screenshotbot',
    period: 'December 2025 – Present',
    description: 'Internship completed · Continuing independent development',
    bullets: [
      'Designed and shipped rn-storybook-auto-screenshots, an open-source React Native package that eliminates manual screenshot review by automating the full capture-and-compare pipeline.',
      'Built a component discovery system that auto-detects every Storybook story in a codebase, renders each on an Android emulator, and produces deterministic PNG screenshots for pixel-level CI diffing.',
      'Authored a native bridge module connecting React Native TypeScript to Android SDK APIs, enabling screenshot capture without requiring any consumer-side native configuration.',
      'Integrated the library with GitHub Actions and Screenshotbot, reducing visual regression review from a manual process to a fully automated CI check on every pull request.',
      'Diagnosed and resolved Android emulator flakiness, permission issues, and Gradle build conflicts that caused non-deterministic screenshot output across CI runs.',
      'Continuing post-internship as an independent maintainer — shipping new features, broadening platform support, and responding to issues from open-source adopters.',
    ],
    tags: ['React Native', 'TypeScript', 'Android SDK', 'GitHub Actions', 'Storybook', 'Jest'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <p className="section-label">02. Experience</p>
      <h2 className="section-title">Where I&apos;ve Worked</h2>
      <div className="section-divider" />

      <div className="experience-list">
        {experiences.map(exp => (
          <div key={exp.role} className="exp-card">
            <div className="exp-header">
              <div>
                <h3 className="exp-role">{exp.role}</h3>
                <p className="exp-company">
                  {exp.company}
                  <span className="exp-desc"> — {exp.description}</span>
                </p>
              </div>
              <span className="exp-period">{exp.period}</span>
            </div>
            <ul className="exp-bullets">
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <ul className="project-tags exp-tags">
              {exp.tags.map(tag => (
                <li key={tag} className="skill-tag">{tag}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
