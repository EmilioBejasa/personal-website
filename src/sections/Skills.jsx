import './Skills.css'

const categories = [
  {
    name: 'Languages',
    skills: [
      { name: 'TypeScript', primary: true },
      { name: 'Python', primary: true },
      { name: 'JavaScript', primary: true },
      { name: 'Java', primary: true },
      { name: 'C++', primary: true },
      { name: 'C' },
      { name: 'C#' },
      { name: 'R' },
      { name: 'SQL' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'PowerShell' },
      { name: 'Arduino' },
    ],
  },
  {
    name: 'Frameworks & Libraries',
    skills: [
      { name: 'React Native', primary: true },
      { name: 'React', primary: true },
      { name: 'Jest', primary: true },
      { name: 'Storybook', primary: true },
      { name: 'Unity' },
      { name: 'Godot API' },
      { name: 'Discord API' },
    ],
  },
  {
    name: 'Mobile & Testing',
    skills: [
      { name: 'Android SDK', primary: true },
      { name: 'Visual Regression Testing', primary: true },
      { name: 'Screenshot Testing', primary: true },
      { name: 'Android Emulator' },
      { name: 'Gradle' },
    ],
  },
  {
    name: 'DevOps & Tools',
    skills: [
      { name: 'Git', primary: true },
      { name: 'GitHub Actions', primary: true },
      { name: 'GitHub', primary: true },
      { name: 'Docker' },
      { name: 'AWS' },
      { name: 'Agile' },
      { name: 'MySQL' },
      { name: 'PostgreSQL' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <p className="section-label">03. Skills</p>
      <h2 className="section-title">What I Work With</h2>
      <div className="section-divider" />

      <div className="skills-grid">
        {categories.map(cat => (
          <div key={cat.name} className="skills-card">
            <h3 className="skills-category">{cat.name}</h3>
            <ul className="skills-list">
              {cat.skills.map(skill => (
                <li key={skill.name} className={`skill-tag${skill.primary ? ' primary' : ''}`}>{skill.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
