import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BadgeCheck, Cloud, Brain, Cog } from 'lucide-react'

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const certifications = [
    {
      category: 'Microsoft Azure',
      icon: Cloud,
      certs: [
        'Microsoft Certified: Azure Solutions Architect Expert – Exam AZ-305',
        'Microsoft Certified: Azure DevOps Engineer Expert – Exam AZ-400',
        'Microsoft Certified: Azure Administrator Associate – Exam AZ-104',
        'Microsoft Certified: Azure Developer Associate – Exam AZ-204',
        'Microsoft Certified: Azure Fundamentals – Exam AZ-900',
        'Microsoft Certified: Azure Data Fundamentals – Exam DP-900',
        'Microsoft Certified: Azure AI Fundamentals – Exam AI-900',
        'Microsoft Certified: Azure AI Engineer Associate – Exam AI-102',
      ],
      color: 'primary',
    },
    {
      category: 'Google Cloud Platform',
      icon: Cloud,
      certs: [
        'Google Cloud: Cloud Digital Leader',
        'Google Cloud: Professional Cloud Architect',
        'Google Cloud: Professional Cloud DevOps Engineer Certification',
      ],
      color: 'blue',
    },
    {
      category: 'AI & Other',
      icon: Brain,
      certs: [
        'OCI Generative AI Certified Professional',
        'GitHub Copilot for dotnet Developer',
      ],
      color: 'purple',
    },
    {
      category: 'Infosys',
      icon: Cog,
      certs: [
        'Infosys certified software programmer',
        'Infosys Certified Global Agile Developer',
      ],
      color: 'green',
    },
  ]

  return (
    <section id="certifications" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
            <span className="text-gray-900">Certifications & </span>
            <span className="text-gradient">Credentials</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            <span className="font-bold text-primary-600">19+ Cloud Certifications</span> across Azure, GCP, AWS, and AI technologies
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {certifications.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-primary-300"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-primary-100 rounded-lg">
                  <category.icon className="text-primary-600" size={24} className="sm:w-7 sm:h-7" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex-1">{category.category}</h3>
                <span className="px-2 sm:px-3 py-1 bg-primary-600 text-white text-xs sm:text-sm font-semibold rounded-full">
                  {category.certs.length}
                </span>
              </div>

              <div className="space-y-2 sm:space-y-3">
                {category.certs.map((cert, certIndex) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.08 + certIndex * 0.04, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-primary-50 transition-all duration-300 border border-gray-200 hover:border-primary-200"
                  >
                    <BadgeCheck className="text-primary-600 flex-shrink-0 mt-0.5" size={18} className="sm:w-5 sm:h-5" />
                    <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications

