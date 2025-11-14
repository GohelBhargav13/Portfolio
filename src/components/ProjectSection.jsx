import React from 'react'

const ProjectSection = () => {
  const Projects = [
    { 
      title: "TubeX",
      techStack: "[ 'ReactJs', 'ExpressJs', 'MongoDB', 'Socket.io', 'mongoose', 'JWT', 'ffmpeg', 'AWS S3', 'TailwindCSS' ]", 
      description: "A Video Streaming Platform where users can watch videos and Admin can upload/manage videos.", 
      link: "https://github.com/GohelBhargav13/TubeX",
      functions: `{ 
        uploadVideo : 'Uploads video to AWS S3',
        HLS : 'Converts video to HLS format using ffmpeg',
        streamVideo : 'Streams video using .m3u8 and .ts chunks',
        linkedVideo : 'Users can Like & Comment (live via Socket.io)',
        adminPanel : 'Admin can manage videos and users'
      }`,
      tools: "['Git', 'GitHub', 'Postman API']",
      live_on:"https://tube-x.vercel.app/"
    },
    { 
      title: "SkillSwap Network",
      techStack: "[ 'ReactJs', 'ExpressJs', 'MongoDB', 'Socket.io', 'mongoose', 'JWT' ]", 
      description: "A social platform where users exchange skills and earn tokens.", 
      link: "https://github.com/GohelBhargav13/SkillSwapNetwork",
      functions: `{ 
        createPost : 'Users can create posts to showcase skills',
        RequestSkill : 'Users can request skills by paying tokens',
        LiveFeatures : 'Like & comment on posts (real-time via Socket.io)'
      }`,
      tools: "['Git', 'GitHub', 'Postman API']"
    },
    { 
      title: "AlumniConnect",
      techStack: "[ 'HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap' ]", 
      description: "A bridge between Students and Alumni — post jobs, apply, and connect.", 
      link: "https://github.com/GohelBhargav13/AlumniConnect",
      functions: `{ 
        postJob : 'Alumni can post job opportunities',
        applyJob : 'Students can apply for jobs',
        connectionRequest : 'Students send connection requests',
        adminPanel : 'Admin manages users and jobs'
      }`,
      tools: "['Git', 'GitHub', 'XAMPP']"
    },
    { 
      title: "TaskHive (Backend Project)",
      techStack: "['ExpressJs', 'MongoDB', 'mongoose', 'JWT' ]", 
      description: "Task management platform where users manage project-based tasks.", 
      link: "https://github.com/GohelBhargav13/TaskHive",
      functions: `{ 
        createProject : 'Users can create new projects',
        manageTasks : 'Create, update, delete tasks',
        userAuth : 'JWT-based authentication and authorization'
      }`,
      tools: "['Git', 'GitHub', 'Postman API']"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center p-3 mt-5">
      {Projects.map((project, idx) => (
        <div key={idx} className="bg-slate-800 text-gray-200 font-mono rounded-2xl shadow-lg shadow-black/40 
            w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] xl:w-[60%] 
            p-4 sm:p-6 md:p-7 m-3 hover:scale-[1.02] transition-transform duration-300 ease-in-out">
          
          <p className="text-orange-400 font-bold mb-2 text-sm sm:text-base md:text-lg">
            {idx}: {"{"}
          </p>

          <div className="ml-3 space-y-3">
            <div className="flex flex-wrap gap-2">
              <h1 className="text-yellow-300 font-bold">title:</h1>
              <p className="text-green-400">"{project.title}" ,</p>
            </div>

            <div className="flex flex-wrap gap-2">
              <h1 className="text-yellow-300 font-bold">description:</h1>
              <p className="text-green-400">"{project.description}" ,</p>
            </div>

            <div className="flex flex-wrap gap-2">
              <h1 className="text-yellow-300 font-bold">techStack:</h1>
              <p className="text-green-400 wrap-break-word">"{project.techStack}" ,</p>
            </div>

            <div>
              <h1 className="text-yellow-300 font-bold mb-1">features:</h1>
              <pre className="text-green-400 text-sm sm:text-base whitespace-pre-wrap overflow-x-auto">
                "{project.functions}"
              </pre>
            </div>

            <div className="flex flex-wrap gap-2">
              <h1 className="text-yellow-300 font-bold">tools:</h1>
              <p className="text-green-400 wrap-break-word">"{project.tools}" ,</p>
            </div>

            <div className="flex flex-wrap gap-2">
              <h1 className="text-yellow-300 font-bold">github:</h1>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline hover:text-blue-300"
              >
                "{project.link}"
              </a>
            </div>
            { project.live_on && (
              <div className="flex flex-wrap gap-2">
              <h1 className="text-yellow-300 font-bold">Live On:</h1>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline hover:text-blue-300"
              >
                "{project.live_on}"
              </a>
            </div>
            ) }
          </div>

          <p className="font-bold text-orange-400 mt-2 text-sm sm:text-base md:text-lg">{"},"}</p>
        </div>
      ))}
    </div>
  )
}

export default ProjectSection
