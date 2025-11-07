import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Award } from 'lucide-react'

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const education = {
    degree: 'Bachelor of Computer Science Engineering',
    university: 'Visvesvaraya Technological University',
    college: 'EPCET',
    location: 'Belagavi, Karnataka',
    period: 'Aug 2017 - Aug 2021',
    cgpa: '7.01 CGPA',
  }

  return (
    <section id="education" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
            <span className="text-gray-900">Education & </span>
            <span className="text-gradient">Awards</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-primary-300"
          >
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="p-3 sm:p-4 bg-primary-100 rounded-lg">
                <GraduationCap className="text-primary-600 w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{education.degree}</h3>
                <div className="text-base sm:text-lg font-semibold text-primary-600 mb-2">{education.university}</div>
                <div className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">{education.college} • {education.location}</div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  <span>{education.period}</span>
                  <span className="flex items-center gap-2">
                    <Award className="text-primary-600 w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-semibold">{education.cgpa}</span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-8 bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-primary-300"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Award className="text-primary-600 w-6 h-6" />
              Awards & Recognition
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-4 bg-primary-50 rounded-lg">
                <span className="text-primary-600 font-bold">🏆</span>
                <div>
                  <div className="font-semibold text-gray-900">Appreciation On Gracias</div>
                  <div className="text-gray-600 text-sm">Project Manager, Principal Consultant and Technical Lead, Infosys Limited</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education

