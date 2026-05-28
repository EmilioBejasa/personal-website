import './Experience.css'

const experiences = [
  {
    role: 'Mobile Developer',
    company: 'Screenshotbot',
    period: 'December 2025 – Present',
    description: 'Internship completed · Continuing independent development',
    bullets: [
      'Built an open-source React Native library for screenshot-based visual regression testing during a software internship.',
      'Implemented a system that auto-discovers Storybook components, renders them on Android, and captures deterministic PNG screenshots.',
      'Developed a reusable package (rn-storybook-auto-screenshots) bridging React Native and Android native code.',
      'Integrated Android screenshot tests with Screenshotbot and GitHub Actions CI, resolving emulator configuration, permission, and stability issues.',
      'Following the internship, continuing to independently extend and maintain the library — adding features, improving stability, and expanding platform support.',
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
