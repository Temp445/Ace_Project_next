
import Image from 'next/image'
import icon1 from '../assets/icon.png'
import icon2 from '../assets/icon-2.png'
import icon3 from '../assets/icon-3.png'
import icon4 from '../assets/icon-4.png'
import icon5 from '../assets/icon-5.png'
import icon6 from '../assets/icon-6.png'
import icon7 from '../assets/icon-7.png'
import icon8 from '../assets/icon-8.png'
import icon9 from '../assets/icon-9.png'


const features = [
  {
    icon: icon1,
    title: 'Multi-Project Management',
    description: "Easily create and oversee multiple projects with centralized control for seamless organization.",
  },
  {
    icon: icon2,
    title: 'Detailed Task Assignment & Tracking',
    description: 'Define granular tasks within projects, assign them to team members, and track progress, deadlines, and completion rates.',
  },
   {
    icon: icon3,
    title: 'Role-Based Team Member Management',
    description: 'Manage users with customizable roles such as Admin and Member, ensuring secure and appropriate access.',
  },
  {
    icon: icon4,
    title: 'Project-Specific Team Allocation',
    description: 'Assign team members to specific projects with role-specific permissions to optimize collaboration and responsibility.',
  },
 
  {
    icon: icon5,
    title: 'Interactive Gantt Chart Visualization',
    description: 'Visualize project timelines, task durations, dependencies, and deadlines through dynamic, easy-to-understand Gantt charts.',
  },
  {
    icon: icon6,
    title: 'Configurable Performance Metrics',
    description: 'Set and adjust performance parameters to evaluate team contributions based on completion, quality, and timeliness.',
  },
  {
    icon: icon7,
    title: 'Automatic Star Player Identification',
    description: 'Highlight top-performing team members automatically, recognizing those who excel in meeting deadlines and delivering quality work.',
  },
  {
    icon: icon8,
    title: 'Insightful Dashboards',
    description: 'Access comprehensive dashboards showcasing active projects, team stats, completed projects, upcoming deadlines, and overdue tasks.',
  },
  {
    icon: icon9,
    title: 'Custom Reports & Analytics',
    description: 'Generate detailed reports and actionable insights to analyze project health, team productivity, and identify areas for improvement.',
  },
]

const Features = () => {
  return (
    <div className="py-10 md:py-16   md:mt-10" id="features">
      <div className=" px-4 sm:px-6 lg:px-8 container mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900 ">
            What We Offer
          </h2>
          <p className="md:text-lg text-slate-700 max-w-5xl mx-auto text-justify md:text-center">
           ACE Projects helps your team plan smarter, collaborate seamlessly, and deliver on time with intuitive task management, real-time tracking, and streamlined communication—boosting productivity for projects of any size.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-5 transition-all duration-300 hover:shadow-xl hover:translate-y-1 border border-blue-100"
            >
              <div className="flex items-start">
                <div className="w-24 md:w-28 mr-4">
                  <Image src={feature.icon} alt={feature.title} width={100} height={100} />
                </div>
                <div>
                  <h3 className="text-base md:text-xl font-semibold text-slate-800 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 text-sm md:text-base">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features
