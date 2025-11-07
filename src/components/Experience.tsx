import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Calendar, ExternalLink, Users, TrendingUp, Award, Sparkles } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      type: 'community',
      title: 'Co-Founder',
      company: 'Yatri Cloud',
      location: 'Bangalore, Karnataka',
      period: 'Nov 2024 – Present',
      isHighlighted: true,
      icon: Sparkles,
      logo: '/yatricloud-round-transparent.png',
      description: 'Co-founded Yatri Cloud, a global tech learning community with a reach of 50,000+ learners and professionals across multiple platforms.',
      achievements: [
        'Empowered 2,000+ students and professionals to earn certifications in Azure, AWS, GCP, Salesforce, and Oracle',
        'Led operations with a core team of 3 co-founders',
        'YouTube: 10,000+ subscribers & private members, 150+ videos, 5M+ post reach (2025), and 25,000+ new monthly viewers',
        'LinkedIn: 40,000+ followers',
        'WhatsApp Communities: 8,000+ members',
        'Discord & Other Platforms: 1,000+ active members',
        'Blogs: 100+ educational articles published',
        'Focused on career growth, cloud-native learning, and certification mentorship',
      ],
      links: {
        website: 'https://yatricloud.com/',
        youtube: 'https://www.youtube.com/@yatricloud?sub_confirmation=1',
        linkedin: 'https://www.linkedin.com/company/yatricloud/',
        community: 'https://community.yatricloud.com/',
        blog: 'https://blog.yatricloud.com/',
        whatsapp: 'https://www.whatsapp.com/channel/0029VakdAHIFHWq60yHA1Q0s',
        x: 'https://x.com/yatricloud',
        instagram: 'https://www.instagram.com/yatricloud/',
      },
    },
    {
      type: 'community',
      title: 'Co-Founder',
      company: 'AI Next Gen',
      location: 'Bangalore, Karnataka',
      period: 'Mar 2025 – Present',
      isHighlighted: false,
      icon: TrendingUp,
      logo: '/ainextgen-logo.jpeg',
      description: 'Co-founded AI Next Gen, a Microsoft-focused AI learning community with a 10-member core team, dedicated to spreading awareness about Microsoft\'s AI and Cloud products.',
      achievements: [
        'Aims to bridge the gap between AI innovation and real-world adoption',
        'Simplifying concepts like Generative AI, LLMs, RAG, and Agentic AI',
        'Conducted 30+ technical events in 2025, including 2 large online conferences',
        'Covering Andhra Pradesh, Tamil Nadu, and Karnataka',
        'Encourages developers to build end-to-end AI solutions leveraging Azure AI',
      ],
      links: {
        linkedin: 'https://www.linkedin.com/showcase/106694488/admin/dashboard/',
        whatsapp: 'https://chat.whatsapp.com/BjeUVRUOvoiJut2K2rjirO?mode=wwt',
      },
    },
    {
      type: 'work',
      title: 'Senior Software Engineer',
      company: 'Accenture Limited',
      location: 'Bangalore, Karnataka',
      period: 'Sep 2024 – Present',
      isHighlighted: false,
      icon: Briefcase,
      description: 'Playing a key role in large-scale cloud modernization initiatives.',
      achievements: [
        'Migrating an on-premises payment platform to a triple-cloud architecture spanning AWS, Azure, and GCP',
        'Designed and implemented a hybrid cloud strategy ensuring seamless interoperability',
        'Leveraged Kafka for real-time data streaming between payment services',
        'Deployed multiple payment microservices using containers orchestrated through Kubernetes',
        'Utilized Azure Traffic Manager, LTM/GTM, and cloud-native load-balancing techniques',
        'Managed diverse storage and database systems: DocumentDB, MongoDB, SQL, AWS S3, Azure Blob Storage',
        'Created and maintained Dynatrace dashboards for end-to-end observability',
        'Followed best practices in cloud architecture, disaster recovery, and multi-region failover',
      ],
    },
    {
      type: 'work',
      title: 'Senior Software Engineer',
      company: 'FNF India Limited',
      location: 'Bangalore, Karnataka',
      period: 'May 2024 – Sep 2024',
      isHighlighted: false,
      icon: Briefcase,
      description: 'Integrated advanced AI models into applications using Azure OpenAI services.',
      achievements: [
        'Built strong backend services in C# for AI model integration',
        'Worked on distributed systems for scalable and reliable AI solutions',
        'Developed and implemented AI models using Azure OpenAI and GPT-4',
        'Implemented Prompting, Semantic kernel and AI agents',
        'Implementation of RAG and Graph RAG',
        'Utilized Azure services: Logic Apps, Functions, App Service, Blob Storage, Azure SQL, Cosmos DB, Service Bus',
      ],
    },
    {
      type: 'work',
      title: 'Senior Systems Engineer',
      company: 'Infosys Limited',
      location: 'Bangalore, Karnataka',
      period: 'Dec 2021 – May 2024',
      isHighlighted: false,
      icon: Briefcase,
      description: 'Established CI/CD pipelines and developed enterprise applications.',
      achievements: [
        'Established a CI/CD pipeline for an ASP.NET MVC project using Azure DevOps',
        'Configured build and release pipelines, optimizing development workflows',
        'Developed the Access Request (AR) tool using .NET Core',
        'Led the end-to-end development and deployment of the Access Review (AR) tool',
        'Successfully designed, implemented, and tested applications',
        'Collaborated with cross-functional teams and stakeholders',
        'Developed comprehensive documentation for tools',
      ],
    },
  ]

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
            <span className="text-gray-900">Experience & </span>
            <span className="text-gradient">Community</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-6 md:space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`relative ${
                exp.isHighlighted
                  ? 'bg-gradient-to-r from-primary-50 to-red-50 border-2 border-primary-400 shadow-2xl'
                  : 'bg-white border border-gray-200 shadow-lg'
              } rounded-2xl p-4 sm:p-6 md:p-8 hover:shadow-2xl transition-all duration-300`}
            >
              {exp.isHighlighted && (
                <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 bg-primary-600 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1 sm:gap-2">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Featured</span>
                  <span className="sm:hidden">★</span>
                </div>
              )}

              <div className="flex flex-col md:flex-row md:items-start gap-4 sm:gap-6">
                {exp.logo ? (
                  <div className={`p-3 sm:p-4 rounded-lg flex items-center justify-center ${
                    exp.isHighlighted ? 'bg-primary-100' : 'bg-gray-100'
                  }`}>
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} logo`}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                    />
                  </div>
                ) : (
                  <div className={`p-3 sm:p-4 rounded-lg ${
                    exp.isHighlighted ? 'bg-primary-100' : 'bg-gray-100'
                  }`}>
                    <exp.icon className={`${exp.isHighlighted ? 'text-primary-600' : 'text-gray-700'} w-6 h-6 sm:w-8 sm:h-8`} />
                  </div>
                )}

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 sm:mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-lg sm:text-xl font-bold ${
                          exp.isHighlighted ? 'text-primary-600' : 'text-gray-800'
                        }`}>
                          {exp.company}
                        </span>
                        {exp.type === 'community' && (
                          <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded">
                            Community
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-gray-600 text-sm">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.05 }}
                          className="flex items-start gap-2 text-gray-700"
                        >
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${
                            exp.isHighlighted ? 'bg-primary-600' : 'bg-gray-400'
                          } flex-shrink-0`}></span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {exp.links && (
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Connect with {exp.company}:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {Object.entries(exp.links).map(([platform, url]) => (
                          <motion.a
                            key={platform}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors ${
                              exp.isHighlighted
                                ? 'bg-primary-600 text-white hover:bg-primary-700'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                            whileHover={{ opacity: 0.9 }}
                          >
                            {platform.charAt(0).toUpperCase() + platform.slice(1)}
                            <ExternalLink className="w-3 h-3" />
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

