import { motion } from 'framer-motion'
import { Download, Mail, Linkedin, Github, Phone } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center section-padding pt-32 overflow-hidden bg-white">
      <div className="container-custom relative z-10 max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Profile Picture */}
          <motion.div
            variants={itemVariants}
            className="mb-8 flex justify-center"
          >
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-56 lg:h-56 rounded-full overflow-hidden border-2 border-primary-300/40 shadow-xl bg-gradient-to-br from-primary-50 to-white p-0.5">
                <img
                  src="/pruthvi-s-profile.jpeg"
                  alt="Pruthvi S"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <motion.span
              className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-100 text-primary-700 rounded-full text-xs sm:text-sm font-semibold mx-4"
            >
              Senior Software Engineer & Cloud Architect
            </motion.span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 px-4"
          >
            <span className="text-gray-900">Hi, I'm </span>
            <span className="text-gradient">Pruthvi S</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Proficient professional with 4+ years in Software Development and Cloud technologies.
            <br className="hidden sm:block" />
            <span className="text-primary-600 font-semibold">15X Azure Certified</span>, 
            <span className="text-primary-600 font-semibold"> 3X GCP Certified</span>, 
            <span className="text-primary-600 font-semibold"> 1X AWS Certified</span>
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-gray-700 mb-8 md:mb-12 max-w-2xl mx-auto px-4"
          >
            Co-Founder of <span className="text-primary-600 font-bold text-base sm:text-lg md:text-xl">Yatri Cloud</span> & <span className="text-primary-600 font-bold text-base sm:text-lg md:text-xl">AI Next Gen</span> - 
            Empowering 50,000+ learners worldwide with cloud certifications and AI education
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-8 md:mb-12 px-4"
          >
            <motion.a
              href="#contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
              whileHover={{ opacity: 0.9 }}
            >
              <Mail size={18} className="sm:w-5 sm:h-5" />
              Get In Touch
            </motion.a>
            <motion.a
              href="/Pruthvi full Copado resume.pdf"
              download="Pruthvi-S-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-primary-600 text-primary-600 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-primary-50 transition-all duration-300 text-sm sm:text-base"
              whileHover={{ opacity: 0.9 }}
            >
              <Download size={18} className="sm:w-5 sm:h-5" />
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4 sm:gap-6 px-4"
          >
            {[
              { icon: Linkedin, href: 'http://www.linkedin.com/in/pruthvi-s-286884179', label: 'LinkedIn' },
              { icon: Github, href: 'https://github.com/pruthvis942', label: 'GitHub' },
              { icon: Mail, href: 'mailto:pruthvis998@gmail.com', label: 'Email' },
              { icon: Phone, href: 'tel:+918618350739', label: 'Phone' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-2.5 sm:p-3 bg-gray-100 hover:bg-primary-100 text-gray-700 hover:text-primary-600 rounded-full transition-all duration-300"
                whileHover={{ opacity: 0.8 }}
                aria-label={label}
              >
                <Icon size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Subtle Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-100/40 rounded-full filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-200/30 rounded-full filter blur-3xl opacity-25"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero

