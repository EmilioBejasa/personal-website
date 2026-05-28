import './Skills.css'

const categories = [
  {
    name: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C++', 'C', 'C#', 'R', 'SQL', 'HTML', 'CSS', 'PowerShell', 'Arduino'],
  },
  {
    name: 'Frameworks & Libraries',
    skills: ['React', 'React Native', 'Storybook', 'Jest', 'Unity', 'Godot API', 'Discord API'],
  },
  {
    name: 'Mobile & Testing',
    skills: ['Android SDK', 'Android Emulator', 'Gradle', 'Visual Regression Testing', 'Screenshot Testing'],
  },
  {
    name: 'DevOps & Tools',
    skills: ['Git', 'GitHub', 'GitHub Actions', 'Docker', 'AWS', 'Agile', 'MySQL', 'PostgreSQL'],
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
                <li key={skill} className="skill-tag">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
