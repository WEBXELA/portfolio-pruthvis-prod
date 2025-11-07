import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Team from './components/Team'
import Footer from './components/Footer'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [showTeam, setShowTeam] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#team') {
        setShowTeam(true)
        // Wait for component to render, then scroll
        setTimeout(() => {
          const teamElement = document.getElementById('team')
          if (teamElement) {
            teamElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 200)
      }
    }

    // Check initial hash on mount
    if (window.location.hash === '#team') {
      setShowTeam(true)
    }

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleTeamClick = () => {
    setShowTeam(true)
    setTimeout(() => {
      const teamElement = document.getElementById('team')
      if (teamElement) {
        teamElement.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar scrollY={scrollY} onTeamClick={handleTeamClick} />
      
      {/* Yatri Cloud YouTube Shortcut - Fixed Bottom Right */}
      <motion.a
        href="https://www.youtube.com/@yatricloud?sub_confirmation=1"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Yatri Cloud YouTube channel"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed bottom-3 sm:bottom-4 md:bottom-8 right-3 sm:right-4 md:right-8 z-40 inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary-100 hover:border-primary-300"
      >
        <img
          src="/yatricloud-round-transparent.png"
          alt="Yatri Cloud Logo"
          className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
        />
      </motion.a>

      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      {showTeam && <Team />}
      <Contact />
      <Footer />
    </div>
  )
}

export default App

