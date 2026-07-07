import './Resume.css'
import resumePdf from '../assets/resume.pdf'

export default function Resume() {
  return (
    <section id="resume" className="section">
      <p className="section-label">07. Resume</p>
      <h2 className="section-title">My Resume</h2>
      <div className="section-divider" />

      <div className="resume-cta">
        <p className="resume-text">
          Want a full look at my experience and skills? Download my resume below.
        </p>
        <a href={resumePdf} download="EmilioBejasaResume.pdf" className="btn btn-primary">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download PDF
        </a>
      </div>
    </section>
  )
}
