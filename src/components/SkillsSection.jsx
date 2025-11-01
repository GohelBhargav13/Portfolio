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
      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 p-6 text-xl sm:text-2xl font-mono">
        <p className="text-orange-500 font-bold">const</p>
        <p className="text-yellow-500 font-bold">Skills = </p>
        <p className="text-white">[</p>
      </div>

      {/* Skills Grid */}
      <div className="p-2 m-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {skills.map((skill, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center gap-2 ml-10 sm:ml-10">
              
              {/* Index */}
              <p className="font-mono text-gray-300 text-base sm:text-lg">{idx} :</p>

              {/* Curly Bracket Opening */}
              <p className="text-xl sm:text-2xl text-gray-400">{'{'}</p>

              {/* Skill Card */}
              <div className="bg-white/10 backdrop-blur-md font-mono text-base sm:text-lg w-full sm:w-fit p-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
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
      <p className="text-xl sm:text-2xl text-white ml-6 sm:ml-10">{']'}</p>
    </div>
  )
}

export default SkillsSection
