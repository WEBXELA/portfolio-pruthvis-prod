import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'pruthvis998@gmail.com',
      href: 'mailto:pruthvis998@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 - 8618350739',
      href: 'tel:+918618350739',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'pruthvi-s-286884179',
      href: 'http://www.linkedin.com/in/pruthvi-s-286884179',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'pruthvis942',
      href: 'https://github.com/pruthvis942',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bangalore, Karnataka, India',
      href: '#',
    },
  ]

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
            <span className="text-gray-900">Get In </span>
            <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and cloud computing.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid md:grid-cols-2 gap-4 sm:gap-6"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.25 + index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-primary-300 group"
              >
                <div className="p-2 sm:p-3 bg-primary-100 rounded-lg group-hover:bg-primary-600 transition-colors">
                  <info.icon className="text-primary-600 group-hover:text-white transition-colors" size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div className="flex-1">
                  <div className="text-xs sm:text-sm text-gray-500">{info.label}</div>
                  <div className="text-sm sm:text-base text-gray-900 font-semibold break-words">{info.value}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

