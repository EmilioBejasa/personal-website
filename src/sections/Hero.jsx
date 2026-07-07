import { useState, useEffect } from 'react'
import './Hero.css'

const PHRASES = ['Software developer.', 'Problem solver.', 'Mobile engineer.']

export default function Hero() {
  const [displayed, setDisplayed] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const phrase = PHRASES[phraseIndex]
    let timeout

    if (typing) {
      if (displayed.length < phrase.length) {
        timeout = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
      } else {
        setPhraseIndex(i => (i + 1) % PHRASES.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, typing, phraseIndex])

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <p className="hero-greeting">Hi, my name is</p>
        <h1 className="hero-name">Emilio Bejasa.</h1>
        <p className="hero-tagline" aria-label="Software developer. Problem solver. Mobile engineer.">
          <span>{displayed}</span>
          <span className="hero-cursor" aria-hidden="true" /></p>
        <p className="hero-description">
          Software developer focused on mobile engineering and testing. I build
          open-source React Native tooling for visual regression testing — a
          screenshot library that runs pixel-level checks on every PR through
          Android CI and GitHub Actions.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-outline">Get In Touch</a>
        </div>
      </div>
      <div className="hero-glow" aria-hidden="true" />
    </section>
  )
}
