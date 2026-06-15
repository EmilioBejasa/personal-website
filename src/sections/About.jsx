import './About.css'

export default function About() {
  return (
    <section id="about" className="section">
      <p className="section-label">01. About Me</p>
      <h2 className="section-title">Who I Am</h2>
      <div className="section-divider" />

      <div className="about-grid">
        <div className="about-text">
          <p>
            Hello! I&apos;m <strong>Emilio Christopher Bejasa</strong>, a software
            developer based in New York. I graduated from{' '}
            <strong>Rensselaer Polytechnic Institute</strong> with a B.S. in
            Computer Science (cum laude, GPA 3.52) in 2025.
          </p>
          <p>
            I enjoy working across the stack — from building mobile testing
            infrastructure in React Native to engineering game mechanics in C++
            and C#, to designing bionic hardware with Arduino. I care about
            writing clean, well-tested code.
          </p>
          <p>
            Outside of code, I&apos;m certified in Google AI Essentials and
            Generative AI from IBM, and I&apos;m always looking to push the
            boundaries of what I can build next.
          </p>
          <div className="about-details">
            <div className="about-detail">
              <span className="detail-label">Education</span>
              <span>RPI — B.S. Computer Science, 2025</span>
            </div>
            <div className="about-detail">
              <span className="detail-label">GPA</span>
              <span>3.52 / 4.0 &mdash; cum laude</span>
            </div>
            <div className="about-detail">
              <span className="detail-label">Status</span>
              <span className="status-open">Open to full-time roles</span>
            </div>
          </div>
        </div>

        <div className="about-card">
          <div className="about-avatar">
            <img
              src={`${import.meta.env.BASE_URL}avatar.jpg`}
              alt="Emilio Bejasa"
              className="avatar-img"
              onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex'; }}
            />
            <div className="avatar-placeholder" style={{ display: 'none' }}>EB</div>
          </div>
        </div>
      </div>
    </section>
  )
}
