import { useState, useEffect } from 'react'
import './Navbar.css'

const links = ['About', 'Experience', 'Skills', 'Projects', 'Certifications', 'Contact', 'Resume']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const total = document.body.scrollHeight - window.innerHeight
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="navbar-logo">EB</a>

      <button
        className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        {links.map(link => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className={active === link.toLowerCase() ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
      <div className="scroll-progress-bar" aria-hidden="true">
        <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      </div>
    </nav>
  )
}
