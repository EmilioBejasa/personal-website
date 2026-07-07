import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <p className="section-label">06. Contact</p>
      <h2 className="section-title">Get In Touch</h2>
      <div className="section-divider" />

      <div className="contact-inner">
        <p className="contact-text">
          I&apos;m currently open to new opportunities. Whether you have a question,
          a project in mind, or just want to connect — feel free to reach out.
        </p>
        <a href="mailto:cbfort2014@gmail.com" className="btn btn-primary contact-email-btn">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <polyline points="2,4 12,13 22,4"/>
          </svg>
          Say Hello
        </a>
      </div>
    </section>
  )
}
