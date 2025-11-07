import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'Microservices with .NET Core',
      description: 'Developed a suite of microservices for an online shopping platform using .NET Core 8.',
      features: [
        'Microservices for product catalog, user authentication, promotions, cart system, order processing',
        'Notification, payment, payment integration with Stripe and API gateway',
        '.NET Identity and role-based authorization for secure access',
        'Azure Service Bus for efficient communication and Ocelot for API gateway management',
        'User-friendly web interface using ASP.NET Core and Bootstrap 5',
        'N-Layer architecture with Entity Framework Core for SQL Server',
      ],
      tech: ['C# (.NET 8)', '.NET Core', 'SQL Server', 'Azure Service Bus', 'Ocelot', 'ASP.NET Core', 'Bootstrap 5', '.NET Identity', 'EF Core'],
      githubLink: 'https://github.com/pruthvis998', // Update with actual GitHub repository link
      demoLink: '#', // Update with demo/live link if available
    },
    {
      title: 'Dotnet MVC Application with Azure Blob Storage Integration',
      description: 'Demonstrated Azure Blob Storage integration in Dotnet 6 MVC for efficient blob and container management.',
      features: [
        'CRUD Operations: Efficient Create, Read, Update, Delete, and List operations on blobs',
        'Container Operations: Seamless creation, deletion, and listing of containers',
        'Metadata Handling: Appended key-value pairs for effective blob data management',
        'Security with SAS Tokens: Enhanced security using Shared Access Signature tokens',
      ],
      tech: ['Azure Blob Storage', 'Dotnet 6', 'C#', 'ASP.NET Core MVC', 'EF Core', 'Azure Storage SDK', 'MVC Architecture', 'Repository Design Pattern'],
      githubLink: 'https://github.com/pruthvis998', // Update with actual GitHub repository link
      demoLink: '#', // Update with demo/live link if available
    },
    {
      title: 'Dotnet MVC Web App with Functions & Blob Storage',
      description: 'Demonstrated expertise in seamlessly integrating Azure services with a .NET MVC web application.',
      features: [
        'Azure Queue Integration: Upload requests and process through Azure HTTP function',
        'Azure SQL Database: Processed requests written to Azure SQL database using Blob Trigger function',
        'Azure Blob Storage: Upload and resize images through MVC web app',
        'Azure Timer Trigger Function: Runs every five minutes, checking and updating database records',
        'SendGrid for Email Notifications',
        'REST API: Exposes CRUD operations via Azure HTTP triggers',
      ],
      tech: ['.NET MVC', 'Azure Functions', 'HTTP, Blob, Timer Triggers', 'Azure Services', 'Queue, SQL Database, Blob Storage', 'SendGrid'],
      githubLink: 'https://github.com/pruthvis998', // Update with actual GitHub repository link
      demoLink: '#', // Update with demo/live link if available
    },
  ]

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
            <span className="text-gray-900">Personal </span>
            <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-primary-300 flex flex-col"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="p-1.5 sm:p-2 bg-primary-100 rounded-lg">
                  <Code className="text-primary-600" size={20} className="sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">{project.title}</h3>
              </div>

              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed flex-grow">{project.description}</p>

              <div className="mb-3 sm:mb-4">
                <h4 className="font-semibold text-gray-900 mb-2 text-xs sm:text-sm">Key Features:</h4>
                <ul className="space-y-1">
                  {project.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-600 flex-shrink-0"></span>
                      <span>{feature.length > 60 ? feature.substring(0, 60) + '...' : feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-3 sm:mb-4">
                <h4 className="font-semibold text-gray-900 mb-2 text-xs sm:text-sm">Tech Stack:</h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white border border-primary-200 text-xs text-gray-700 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 mt-auto pt-3 sm:pt-4 border-t border-gray-200">
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-primary-700 transition-all duration-300"
                  whileHover={{ opacity: 0.9 }}
                >
                  <Github size={16} />
                  Source Code
                </motion.a>
                {project.demoLink && project.demoLink !== '#' && (
                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white border border-primary-600 text-primary-600 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-primary-50 transition-all duration-300"
                    whileHover={{ opacity: 0.9 }}
                  >
                    <ExternalLink size={16} />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}

export default Projects

