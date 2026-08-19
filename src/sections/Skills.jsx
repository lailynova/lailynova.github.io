import { useState } from 'react';


const withBase = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

const skills = [
  { name: 'HTML', icon: '/html.png', level: 'Expert' },
  { name: 'CSS', icon: '/css.png', level: 'Expert' },
  { name: 'JavaScript', icon: '/javascript.png', level: 'Intermediate' },
  { name: 'Typescript', icon: '/typescript.png', level: 'Beginner' },
  { name: 'React', icon: '/react.svg', level: 'Intermediate' },
  { name: 'Express', icon: '/expressjs.webp', level: 'Beginner' },
  { name: 'firebase', icon: '/firebase.webp', level: 'Intermediate' },
  { name: 'Postgre', icon: '/postgre.png', level: 'Beginner' },
  { name: 'Tailwind', icon: '/tailwindcss.png', level: 'Intermediate' },
  { name: 'Typescript', icon: '/typescript.png', level: 'Intermediate' },
  { name: 'Vercel', icon: '/vercel.png', level: 'Beginner' },
  { name: 'Vite', icon: '/vite.svg', level: 'Beginner' },
];

const toolSkills = [
  { name: 'Figma', icon: '/figma.png', level: 'Intermediate' },
  { name: 'firebase', icon: '/firebase.webp', level: 'Intermediate' },
  { name: 'Postgre', icon: '/postgre.png', level: 'Beginner' },
  { name: 'Vercel', icon: '/vercel.png', level: 'Beginner' },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('tech');

  return (
    <section id="skills" className="relative bg-[#242424] text-white py-12 px-6 flex flex-row justify-center items-center">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div data-aos="fade-right" className="absolute top-30 left-6 md:top-28 md:left-20">
          <div className="flex items-center gap-3 mb-1">
            <h2 className="text-3xl font-extrabold text-[#777777]">My</h2>
            <div className="flex-1 border-t-4 rounded-sm border-[#777777]"></div>
          </div>
          <h3 className="text-3xl font-extrabold italic text-white">SKILLS</h3>
        </div>

        {/* Tabs */}
        <div data-aos="fade-in" className="flex gap-4 mb-10 mt-45">
          <button
            className={`px-4 py-2 rounded-md ${activeTab === 'tech' ? 'bg-[#404040]' : ''}`}
            onClick={() => setActiveTab('tech')}
          >
            Tech Stack
          </button>
          <button
            className={`px-4 py-2 rounded-md ${activeTab === 'tools' ? 'bg-[#404040]' : ''}`}
            onClick={() => setActiveTab('tools')}
          >
            Tools
          </button>
        </div>

        {/* Grid Items */}
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10">
          {(activeTab === 'tech' ? skills : toolSkills).map((skill, index) => (
            <div
              key={index}
              className="group border border-white rounded-md p-4 flex items-center gap-3 bg-[#242424] hover:scale-105 hover:shadow-white transition duration-300"
            >
              <img src={withBase(skill.icon)} alt={skill.name} className="w-8 h-8 rounded-sm" />
              <div>
                <h4 className="font-bold">{skill.name}</h4>
                <p className="text-xs text-gray-400 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {skill.level}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
