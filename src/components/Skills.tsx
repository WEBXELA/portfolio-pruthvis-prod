import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      skills: ['C#', 'ASP.NET Core', 'ASP.NET WEBAPI', 'MVC', 'Microservices', 'HTML', 'CSS', 'JavaScript', 'Angular 15'],
      color: 'from-primary-500 to-primary-700',
    },
    {
      title: 'Cloud Technologies',
      skills: [
        'Azure OpenAI', 'Azure AI Vision', 'Azure AI Document Intelligence',
        'Azure AI Search', 'Prompt Engineering', 'Azure Virtual Machine',
        'Logic Apps', 'Functions', 'App Service', 'Blob Storage', 'SQL Database',
        'Service Bus', 'Azure Cache for Redis', 'Docker', 'Kubernetes'
      ],
      color: 'from-primary-600 to-primary-800',
    },
    {
      title: 'Cloud Platforms',
      skills: ['Microsoft Azure', 'Google Cloud Platform (GCP)', 'Amazon Web Services (AWS)'],
      color: 'from-primary-400 to-primary-600',
    },
    {
      title: 'DevOps & Tools',
      skills: ['Azure DevOps', 'CI/CD Pipelines', 'Git', 'Dynatrace', 'Agile Methodologies'],
      color: 'from-primary-500 to-primary-700',
    },
  ]

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
            <span className="text-gray-900">Technical </span>
            <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 px-4">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-primary-300"
            >
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                <span className={`w-1 h-5 sm:h-6 bg-gradient-to-b ${category.color} rounded`}></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.08 + skillIndex * 0.03, ease: [0.22, 1, 0.36, 1] }}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white border border-primary-200 text-gray-700 rounded-lg text-xs sm:text-sm font-medium hover:bg-primary-50 hover:border-primary-400 hover:text-primary-700 transition-all duration-300 cursor-default"
                    whileHover={{ opacity: 0.9 }}
                  >
                    {skill}
                  </motion.span>
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

export default Skills

