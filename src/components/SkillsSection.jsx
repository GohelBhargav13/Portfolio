import React from 'react'

const SkillsSection = () => {

  const skills = [
    { name: "HTML", skill_percentage: "80%", skill_logo: "html-logo" },
    { name: "CSS", skill_percentage: "70%", skill_logo: "css-logo" },
    { name: "JavaScript", skill_percentage: "75%", skill_logo: "js-logo" },
    { name: "ReactJS", skill_percentage: "75%", skill_logo: "react-logo" },
    { name: "NodeJS", skill_percentage: "60%", skill_logo: "node-logo" },
    { name: "ExpressJS", skill_percentage: "75%", skill_logo: "express-logo" },
    { name: "MongoDB", skill_percentage: "65%", skill_logo: "mongodb-logo" },
    { name: "Git", skill_percentage: "60%", skill_logo: "git-logo" },
    { name: "GitHub", skill_percentage: "70%", skill_logo: "github-logo" },
    { name: "TailwindCSS", skill_percentage: "60%", skill_logo: "tailwind-logo" },
    { name: "PHP", skill_percentage: "65%", skill_logo: "php-logo" },
    { name: "MySQL", skill_percentage: "70%", skill_logo: "mysql-logo" },
    { name: "Python", skill_percentage: "30%", skill_logo: "python-logo" },
    { name: "Docker", skill_percentage: "30%", skill_logo: "docker-logo" }
  ];

  return (
    <div className="bg-linear-to-b from-slate-800 to-black min-h-screen text-white p-6">
      
      {/* Title */}
      <h1 className="text-white font-bold font-mono text-center text-2xl sm:text-3xl bg-slate-700 w-fit mx-auto p-2 px-4 rounded-xl hover:scale-105 transition duration-500">
        My Skills
      </h1>

      {/* JavaScript-style Header */}
      <div className="flex flex-wrap justify-start sm:justify-start gap-2 p-3 sm:p-3 md:p-4 lg:p-5 text-sm sm:text-lg md:text-xl lg:text-2xl font-mono">
        <p className="text-orange-500 font-bold">const</p>
        <p className="text-yellow-500 font-bold">Skills = </p>
        <p className="text-white">[</p>
      </div>

      {/* Skills Grid */}
      <div className="p-2 m-2">
        <div className="grid grid-cols-1 w-fit ml-28 sm:ml-4 sm:text-sm md:ml-4 lg:ml-4 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-9">
          {skills.map((skill, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center gap-2 ml-8 sm:ml-14 md:ml-15 lg:ml-18">
              
              {/* Index */}
              <div className='flex gap-1 sm:gap-2'>
              <p className="font-mono text-gray-300 text-base sm:text-[16px]">{idx}</p>
              <p className=''>:</p>
              </div>

              {/* Curly Bracket Opening */}
              <p className="text-xl sm:text-2xl text-gray-400">{'{'}</p>

              {/* Skill Card */}
              <div className="bg-white/10 backdrop-blur-md font-mono text-sm  sm:text-[13px] sm:flex ml-7 sm:ml-7 md:ml-8 lg:ml-8 border-l-2 border-l-slate-400 hover:border-l-slate-900 sm:text-lg w-full md:text-[14px] md:w-[250px] lg:text-[16px] sm:w-fit p-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap gap-1">
                    <p className="text-sky-400 font-semibold">SkillName:</p>
                    <span className="text-white">{skill?.name}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <p className="text-sky-400 font-semibold">Knowledge(%):</p>
                    <span className="text-white">{skill?.skill_percentage}</span>
                  </div>
                </div>
              </div>

              {/* Curly Bracket Close */}
              <p className="text-xl sm:text-2xl text-gray-400">{'},'}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Array End Bracket */}
      <p className="text-xl sm:text-2xl text-white ml-8 sm:ml-9 md:ml-10 lg:ml-11">{']'}</p>
    </div>
  )
}

export default SkillsSection
