import { BarChart3, Users, CheckSquare, Calendar } from 'lucide-react';

const Advantages = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="container mx-auto px-4  md:px-12">

        <div className="text-center justify-start">
          <h1 className="inline-block border text-black px-8 py-4 rounded-full text-xl md:text-2xl font-extrabold shadow-xl mb-8">
            Project Reporting <span className="text-black">Features</span>
          </h1>
          <p className="text-gray-700  md:text-lg font-medium text-justify md:max-w-7xl mx-auto leading-relaxed">
            Project reporting is the process of collecting, analyzing, and sharing key information about a project&rsquo;s status, progress, performance, and outcomes with stakeholders. It helps ensure transparency, informed decision-making, and accountability throughout the project lifecycle.
          </p>
        </div>

      
        <div className="relative  mx-auto">

          <div className="grid grid-cols-1  gap-8 pt-16 ">
  
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#04BFBF] group transform hover:-translate-y-2">
              <div className="flex items-center mb-6 gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded group-hover:rotate-45 border-y-2 group-hover:border-[#04BFBF] group-hover:rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <BarChart3 className="w-4 h-4 md:w-6 md:h-6 text-black group-hover:text-[#04BFBF] group-hover:-rotate-45" />
                </div>
                <h2 className="text-xl md:text-3xl 2xl:text-3xl font-bold text-gray-900">Projects</h2>
              </div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                The Project Report offers a clear summary of all ongoing and completed projects, highlighting <strong>completion rates, resource allocation, and real-time status updates</strong>. It helps teams track progress, spot bottlenecks, and make informed decisions efficiently.
              </p>
            </div>

           
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-400 group transform hover:-translate-y-2">
              <div className="flex items-center mb-6 gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded group-hover:rotate-45 border-y-2 group-hover:border-purple-400 group-hover:rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Users className="w-4 h-4 md:w-6 md:h-6 text-black group-hover:text-purple-400 group-hover:-rotate-45" />
                </div>
                <h2 className="text-xl md:text-3xl font-bold text-gray-900 justify-end text-end">Team</h2>
              </div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                The Team Report provides insights into <strong> workload distribution, team productivity, and individual performance</strong>, helping managers ensure balanced assignments, recognize top performers, and support improvement where needed.
              </p>
            </div>

           
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-400 group transform hover:-translate-y-2">
              <div className="flex items-center mb-6 gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10  rounded group-hover:rotate-45 border-y-2 group-hover:border-blue-400 group-hover:rounded-full  shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <CheckSquare className="w-4 h-4 md:w-6 md:h-6 text-black group-hover:text-blue-400 group-hover:-rotate-45 " />
                </div>
                <h2 className="text-xl md:text-3xl font-bold text-gray-900">Task</h2>
              </div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                The Task Report offers a clear view of <strong>task status, priority levels, and completion trends</strong>. It helps teams track productivity, monitor deadlines, and improve time management by highlighting <strong>overdue vs. on-time tasks</strong>.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-red-400 group transform hover:-translate-y-2">
              <div className="flex items-center mb-6 gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10  rounded group-hover:rotate-45 border-y-2 group-hover:border-red-400 group-hover:rounded-full  shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Calendar className="w-4 h-4 md:w-6 md:h-6 text-black group-hover:text-red-400 group-hover:-rotate-45" />
                </div>
                <h2 className="text-xl md:text-3xl font-bold text-gray-900">Calendar</h2>
              </div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                The Calendar Report visualizes <strong>project activity</strong> with a <strong>3-month heatmap</strong>, shows <strong>deadline distribution by weekday</strong>, tracks <strong>resource availability</strong>, and highlights <strong>schedule conflicts</strong> to help optimize planning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;