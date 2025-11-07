import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, Users, Award } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { icon: Award, value: '19+', label: 'Cloud Certifications' },
    { icon: Users, value: '50,000+', label: 'Community Members' },
    { icon: Target, value: '4+', label: 'Years Experience' },
  ]

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
            <span className="text-gray-900">About </span>
            <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center px-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Profile</h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              Proficient professional with a <strong>4+ years background</strong> in Software Development 
              and Cloud technologies, showcasing a demonstrable history of enhancing team efficiency. 
              Proficient in seamlessly managing both developmental tasks and operational responsibilities.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              Currently serving as a <strong>Senior Software Engineer at Accenture Limited</strong>, where I 
              play a key role in large-scale cloud modernization initiatives, migrating on-premises 
              platforms to multi-cloud architectures.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              As a <strong className="text-primary-600">Co-Founder of Yatri Cloud & AI Next Gen</strong>, I've built 
              global tech learning communities with 50,000+ learners, empowering thousands to earn 
              certifications in Azure, AWS, GCP, Salesforce, and Oracle, while spreading awareness about 
              Microsoft's AI and Cloud products.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 + index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-primary-300"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-primary-100 rounded-lg">
                    <stat.icon className="text-primary-600" size={24} className="sm:w-8 sm:h-8" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-primary-600">{stat.value}</div>
                    <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default About

