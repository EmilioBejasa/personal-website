import './Certifications.css'

const badges = [
  {
    id: '33539e91-92d2-4325-8356-d4a77fc09207',
    name: 'Google AI Essentials',
    issuer: 'Google',
    img: 'https://images.credly.com/size/340x340/images/ea3eec65-ddad-4242-9c59-1defac0fa2d9/image.png',
    skills: ['Generative AI', 'Prompt Engineering', 'AI Literacy', 'Responsible AI'],
  },
  {
    id: 'a277792f-fcc9-4fba-82a8-70ced92f4a13',
    name: 'Generative AI Essentials',
    issuer: 'IBM',
    img: 'https://images.credly.com/size/340x340/images/7658c4f1-0570-42c7-83b0-04cac8b0aca2/image.png',
    skills: ['Generative AI', 'Large Language Models', 'Prompt Engineering', 'Foundation Models'],
  },
  {
    id: 'c6ed994d-d55c-4721-8af8-ef8d16e73526',
    name: 'Relational to Document Model',
    issuer: 'MongoDB',
    img: 'https://images.credly.com/images/234edfc5-0177-46e7-a61a-071f060af2f6/linkedin_thumb_blob',
    skills: ['MongoDB', 'NoSQL', 'Document Model', 'Data Migration'],
  },
  {
    id: '63739567-2d91-4dd1-8ba3-9baea9064ecb',
    name: 'Advanced Schema Design Patterns',
    issuer: 'MongoDB',
    img: 'https://images.credly.com/images/592afcf7-1323-4dc4-af0d-0c3cad726e95/linkedin_thumb_blob',
    skills: ['Schema Design', 'Design Patterns', 'MongoDB', 'Anti-Patterns'],
  },
  {
    id: '552f8b6c-819a-4e23-b9d3-dcb9a43c5920',
    name: 'Schema Design Optimization',
    issuer: 'MongoDB',
    img: 'https://images.credly.com/images/9aa3a2f5-20ad-4ba3-b7ac-dbc13f4db5db/linkedin_thumb_blob',
    skills: ['Schema Optimization', 'Performance Tuning', 'MongoDB', 'Indexing'],
  },
  {
    id: '18afabb8-47f9-41fe-ae88-afb8a54104cc',
    name: 'Schema Design Patterns',
    issuer: 'MongoDB',
    img: 'https://images.credly.com/images/71a08fbf-178b-4342-9b17-a5239942846c/linkedin_thumb_blob',
    skills: ['Schema Patterns', 'Document Model', 'MongoDB', 'Data Modeling'],
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <p className="section-label">05. Certifications</p>
      <h2 className="section-title">Credentials</h2>
      <div className="section-divider" />
      <div className="certs-grid">
        {badges.map(badge => (
          <a
            key={badge.id}
            href={`https://www.credly.com/badges/${badge.id}`}
            target="_blank"
            rel="noreferrer"
            className="cert-card"
          >
            <img
              src={badge.img}
              alt={badge.name}
              className="cert-badge-img"
              loading="lazy"
            />
            <span className="cert-issuer">{badge.issuer}</span>
            <p className="cert-name">{badge.name}</p>
            <ul className="cert-skills">
              {badge.skills.map(skill => (
                <li key={skill} className="skill-tag">{skill}</li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </section>
  )
}
