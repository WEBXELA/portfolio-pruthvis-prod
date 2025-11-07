import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Linkedin, ExternalLink, Users } from 'lucide-react'

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const teams = [
    {
      name: 'Yatri Cloud',
      description: 'A global tech learning community empowering 50,000+ learners worldwide',
      members: [
        {
          name: 'Yatharth Chauhan',
          role: 'Founder',
          linkedin: 'https://www.linkedin.com/in/yatharth-chauhan/',
          image: 'https://raw.githubusercontent.com/YatharthChauhan2362/prod-public-images/refs/heads/main/yatharth-chauhan-profile1.png',
        },
        {
          name: 'Nensi Ravaliya',
          role: 'Founder',
          linkedin: 'https://www.linkedin.com/in/nencyravaliya28/',
          image: 'https://raw.githubusercontent.com/yatricloud/yatri-images/refs/heads/main/Team%20Yatri%20Cloud/Nensi%20Ravaliya/profile-nensi-ravaliya.png',
        },
      ],
    },
    {
      name: 'AI Next Gen',
      description: 'Microsoft-focused AI learning community dedicated to spreading awareness about AI and Cloud products',
      members: [
        {
          name: 'Poornimma',
          role: 'Co-Founder, Microsoft Azure AI MVP',
          linkedin: 'https://www.linkedin.com/in/poornimmas/',
        },
        {
          name: 'Shreya Mahesh',
          role: 'COO AINext Gen',
          linkedin: 'https://www.linkedin.com/in/shreya-mahesh-/',
        },
        {
          name: 'Vivek G',
          role: 'Program Manager AINEXT Gen',
          linkedin: 'https://www.linkedin.com/in/vivek-g-746a58212/',
        },
        {
          name: 'Monika R',
          role: 'Marketing Lead AINext Gen',
          linkedin: 'https://www.linkedin.com/in/monika-r-/',
        },
        {
          name: 'Vasu Chowdary',
          role: 'Lead AiNext Gen',
          linkedin: 'https://www.linkedin.com/in/vasuchowdary/',
        },
        {
          name: 'Vasanth Kumar N',
          role: 'Finance Lead AINext Gen',
          linkedin: 'https://www.linkedin.com/in/vasanth-kumar-n-17404b254/',
        },
        {
          name: 'Moulica Chowdary',
          role: 'Technical Coordinator Lead AINextGen',
          linkedin: 'https://www.linkedin.com/in/moulicachowdary/',
        },
        {
          name: 'Veda H S',
          role: 'Innovation & Research Lead AINXTGEN',
          linkedin: 'https://www.linkedin.com/in/veda-h-s/',
        },
        {
          name: 'Akhil M',
          role: 'Event Lead AINextGen',
          linkedin: 'https://www.linkedin.com/in/akhil-m-1b43331a8/',
        },
        {
          name: 'Kokila K',
          role: 'Content Lead AINextGen',
          linkedin: 'https://www.linkedin.com/in/kokila-k-/',
        },
        {
          name: 'LIKHITHA RK',
          role: 'Graphics Lead AINextGen',
          linkedin: 'https://www.linkedin.com/in/likhitha-rk/',
        },
      ],
    },
  ]

  // Function to get initials for avatar
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  // Function to get profile image
  const getProfileImage = (member: { name: string; image?: string }) => {
    if (member.image) {
      return member.image
    }
    // Fallback to initials avatar
    return null
  }

  return (
    <section id="team" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
            <span className="text-gray-900">Our </span>
            <span className="text-gradient">Team</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Meet the passionate individuals driving innovation in cloud computing and AI education
          </p>
        </motion.div>

        <div className="space-y-16 sm:space-y-20 md:space-y-24 max-w-7xl mx-auto px-4">
          {teams.map((team, teamIndex) => (
            <motion.div
              key={team.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: teamIndex * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-full"
            >
              <div className="text-center mb-8 sm:mb-12">
                <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  {team.name === 'Yatri Cloud' ? (
                    <img 
                      src="/yatricloud-round-transparent.png" 
                      alt="Yatri Cloud Logo" 
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                    />
                  ) : team.name === 'AI Next Gen' ? (
                    <img 
                      src="/ainextgen-logo.jpeg" 
                      alt="AI Next Gen Logo" 
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-lg"
                    />
                  ) : (
                    <Users className="text-primary-600 sm:w-9 sm:h-9" size={28} />
                  )}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">{team.name}</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                  {team.description}
                </p>
              </div>

              <div className="flex justify-center">
                <div className={`grid gap-4 sm:gap-6 md:gap-8 w-full ${
                  team.name === 'Yatri Cloud' 
                    ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl justify-items-center' 
                    : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-6xl'
                }`}>
                  {team.members.map((member, memberIndex) => (
                    <motion.a
                      key={member.name}
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.8,
                      delay: teamIndex * 0.15 + memberIndex * 0.04,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                      className="group bg-white rounded-2xl p-4 sm:p-6 hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-primary-300 text-center flex flex-col items-center"
                    >
                      <div className="relative mb-4 sm:mb-5">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-primary-100 bg-primary-600 shadow-lg flex items-center justify-center ring-2 sm:ring-4 ring-primary-50">
                          {getProfileImage(member) ? (
                            <img
                              src={getProfileImage(member)!}
                              alt={member.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                // Fallback to initials if image fails to load
                                const target = e.target as HTMLImageElement
                                target.style.display = 'none'
                                const parent = target.parentElement
                                if (parent) {
                                  const fallback = document.createElement('div')
                                  fallback.className = 'w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-600 to-primary-700 text-white font-bold text-3xl'
                                  fallback.textContent = getInitials(member.name)
                                  parent.appendChild(fallback)
                                }
                              }}
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-600 to-primary-700 text-white font-bold text-3xl">
                              {getInitials(member.name)}
                            </div>
                          )}
                        </div>
                        <div className="absolute -bottom-2 -right-2 p-2.5 bg-primary-600 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                          <Linkedin className="text-white" size={18} />
                        </div>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base group-hover:text-primary-600 transition-colors leading-tight">
                        {member.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed min-h-[2rem] sm:min-h-[2.5rem] flex items-center justify-center">
                        {member.role}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-xs text-primary-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity mt-auto">
                        View LinkedIn
                        <ExternalLink size={12} />
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team

