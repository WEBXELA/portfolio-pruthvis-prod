import { motion } from 'framer-motion'
import { ArrowUp, Mail, Linkedin, Github, Phone, MapPin, ExternalLink } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom px-4 sm:px-6 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">Pruthvi S</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
              Senior Software Engineer & Cloud Architect with 4+ years of experience. 
              Co-Founder of Yatri Cloud, empowering 50,000+ learners worldwide.
            </p>
            <div className="flex gap-2 sm:gap-3 mt-4 sm:mt-6">
              {[
                { icon: Linkedin, href: 'http://www.linkedin.com/in/pruthvi-s-286884179', label: 'LinkedIn' },
                { icon: Github, href: 'https://github.com/pruthvis942', label: 'GitHub' },
                { icon: Mail, href: 'mailto:pruthvis998@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-2 bg-gray-800 hover:bg-primary-600 rounded-lg transition-colors duration-200"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Experience', href: '#experience' },
                { name: 'Projects', href: '#projects' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-500 text-sm transition-colors duration-200 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">Get In Touch</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 sm:gap-3 text-gray-400 text-xs sm:text-sm">
                <Mail className="mt-0.5 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
                <a href="mailto:pruthvis998@gmail.com" className="hover:text-primary-500 transition-colors break-words">
                  pruthvis998@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-gray-400 text-xs sm:text-sm">
                <Phone className="mt-0.5 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
                <a href="tel:+918618350739" className="hover:text-primary-500 transition-colors">
                  +91 - 8618350739
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-gray-400 text-xs sm:text-sm">
                <MapPin className="mt-0.5 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
                <span>Bangalore, Karnataka, India</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Yatri Cloud Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-gray-800 pt-6 sm:pt-8 mb-6 sm:mb-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h4 className="text-primary-500 font-semibold mb-2 text-base sm:text-lg">
                <a href="https://yatricloud.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                  Yatri Cloud
                </a>
              </h4>
              <p className="text-gray-400 text-xs sm:text-sm">
                Empowering 50,000+ learners worldwide with cloud certifications and tech education
              </p>
            </div>
            <a
              href="https://yatricloud.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 sm:px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-lg text-xs sm:text-sm font-medium transition-colors flex items-center gap-2"
            >
              Visit Website
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
            </a>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-800 pt-6 sm:pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-xs sm:text-sm">
                © {new Date().getFullYear()} Copyright <a href="https://yatricloud.com" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-400 font-semibold transition-colors">Yatri Cloud</a>. All rights reserved.
              </p>
              <p className="text-gray-600 text-xs mt-1">
                Designed by <a href="https://uimitra.com" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-400 transition-colors">Uimitra</a>
              </p>
            </div>
            <button
              onClick={scrollToTop}
              className="p-2 bg-gray-800 hover:bg-primary-600 rounded-lg transition-colors duration-200"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

