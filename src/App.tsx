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
      
      {/* Watch Now Button - Fixed Bottom Right */}
      <motion.a
        href="https://www.youtube.com/@yatricloud?sub_confirmation=1"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed bottom-3 sm:bottom-4 md:bottom-8 right-3 sm:right-4 md:right-8 z-40 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-primary-600 text-white rounded-lg shadow-lg hover:shadow-2xl hover:bg-primary-700 transition-all duration-300 font-semibold text-xs sm:text-sm md:text-base group"
      >
        <img 
          src="/yatricloud-round-transparent.png" 
          alt="Yatri Cloud" 
          className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
        />
        <span className="hidden sm:inline">Watch Now</span>
        <span className="sm:hidden">Watch</span>
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

