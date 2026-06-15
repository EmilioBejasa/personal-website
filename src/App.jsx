import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Certifications from './sections/Certifications'
import Contact from './sections/Contact'
import Resume from './sections/Resume'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('.section')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
        <Resume />
      </main>
      <ScrollToTop />
      <footer id="footer" className="footer">
        <p className="footer-copy">© 2026 Emilio Christopher Bejasa</p>
      </footer>
    </div>
  )
}
