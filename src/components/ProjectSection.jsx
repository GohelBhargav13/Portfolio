import React, { useState } from 'react'
import { ChevronDown,ChevronUp } from "lucide-react"

const ProjectSection = () => {
  const Projects = [
    { 
      title: "DevHub",
      techStack: "[ 'ReactJs', 'ExpressJs', 'Postgresql', 'Socket.io', 'drizzle', 'JWT', 'TailwindCSS' ]", 
      description: "A platform where devs can share a latest tech news, tech updates with tech community.", 
      link: "https://github.com/GohelBhargav13/Devhub",
      functions: `{ 
        createPost : 'create a fresh tech post',
        savePost: 'users can save a posts'
        Q&A: 'A time bound question&Answer section where devs can ask a quesions to the community'
        deleteAccount:'A new feature of user account deletion',
        RT-Comment:'A real-time comment system on the Q&A',
        adminPanel : 'Admin can manage posts and users'
      }`,
      tools: "['Git', 'GitHub', 'Postman API','docker']",
      live_on:"https://devhub-self.vercel.app/"
    },
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

  // state of the show button
  const [isshow,setIsShow] = useState(false)
  const [projectIndex,setIsProjectIndex] = useState(null)
  const [projectLimit,setIsProjectLimit] = useState(2)

  // handle the show toggle
  const handleToggelShow = (projectIndex) => {
    setIsProjectIndex(prev => prev === projectIndex ? null : projectIndex)
    setIsShow(prev => projectIndex !== null ? true : false)
    console.log(projectIndex)
  }

  // handle the change a limit of the project show
  const handleChangeProjectLimit = () => {
    setIsProjectLimit(prev => prev === Projects.length ? 2 : Projects.length)
  }

  return (
    <div className="flex flex-col items-center justify-center p-3 mt-5">
      { Projects.map((project, idx) => (
        <>
          { idx < projectLimit ? (
            <div key={idx} className="bg-slate-800 text-gray-200 font-mono rounded-2xl shadow-lg shadow-black/40 
              w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] xl:w-[60%] 
              p-4 sm:p-6 md:p-7 m-3 hover:scale-[1.02] transition-transform duration-300 ease-in-out">
            { isshow && idx === projectIndex ? <ChevronUp className='p-0.5 m-2 cursor-pointer bg-slate-950/40 rounded-xl border-2 border-gray-500 hover:bg-slate-900/20' onClick={() => handleToggelShow(idx)} />  : <ChevronDown className='p-0.5 m-2 cursor-pointer bg-slate-950/40 rounded-xl border-2 border-gray-500 hover:bg-slate-900/20' onClick={() => handleToggelShow(idx)}/>
            } 
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

              { isshow && projectIndex === idx ? (
                <div className={`${isshow ? "transform transition-transform duration-300 rotate-2" : ""}`}>
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

                  <div className="flex flex-wrap gap-2 sm:text-wrap">
                    <h1 className="text-yellow-300 font-bold">github:</h1>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 underline overflow-hidden hover:text-blue-300"
                    >
                      "{project.link}"
                    </a>
                  </div>
                  { project.live_on && (
                    <div className="flex flex-wrap gap-2 sm:text-wrap">
                    <h1 className="text-yellow-300 font-bold">Live on:</h1>
                    <a
                      href={project?.live_on}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 underline text-wrap hover:text-blue-300"
                    >
                      "{project?.live_on}"
                    </a>
                  </div>
                  ) }
                </div>
              ) : <div className='text-[18px] font-bold text-black/70 animate-pulse'>Want to explore more? Toggle to view full project details.</div>}
            </div>
            <p className="font-bold text-orange-400 mt-2 text-sm sm:text-base md:text-lg">{"},"}</p>
          </div>
          ) : <></> }
        </>
      ))}
      { <button className='bg-slate-950/80 p-2 rounded-lg text-blue-600/90 border-r-4 border-r-slate-600/80 border-b-4 border-b-slate-600/80 border-t-2 border-t-slate-600/80 border-l-2 border-l-slate-600/80 hover:border-r-2 hover:border-r-slate-600/80 hover:border-b-2 hover:border-b-slate-600/80 hover:duration-300 hover:ease-in cursor-pointer' onClick={handleChangeProjectLimit}>{ `${Projects.length === projectLimit ? "wrap up" : `show ${Projects.length - projectLimit}+`}` }</button> }
    </div>
  )
}

export default ProjectSection
