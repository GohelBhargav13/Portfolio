import React from 'react'

const ProjectSection = () => {

    const Projects = [
        { title:"TubeX", techStack: "[ 'ReactJs', 'ExpressJs', 'MongoDB', 'Socket.io', 'mongoose', 'JWT', 'ffmpeg', 'AWS S3', 'TailwindCSS' ]", 
            description:"A Video Streaming Platform, where users watch there favourite videos and Admin can upload videos.", 
            link:"https://github.com/GohelBhargav13/TubeX",
            functions: `{            uploadVideo : 'Uploads video to AWS S3',
                HLS:'Converts video to HLS format using ffmpeg',
                streamVideo: 'Streams video to user using .m3u8 index file with .ts chunks',
                linkedVideo:'User Can Like, Comment With live updates using Socket.io',
                adminPanel: 'Admin can manage videos and users (can change user Roles)'
            }` ,
            tools:"['Git', 'GitHub', 'Postman API']"
         },
        { title:"SkillSwap NetWork", techStack: "[ 'ReactJs', 'ExpressJs', 'MongoDB', 'Socket.io', 'mongoose', 'JWT' ]", 
            description:"A Social NetWroking Platform, Where Users Exchange Real Skills With Each Other and Earn Tokens.", 
            link:"https://github.com/GohelBhargav13/SkillSwapNetwork",
            functions: `{            createPost : 'Users can create posts For ShowCase there Skills',
                RequestSkill:'Users can Request Skills from other users by Paying Tokens',
                LiveFeatures: 'Users can like and Comment on Posts with live updates using Socket.io'
            }`,
            tools:"['Git', 'GitHub', 'Postman API']" 
        },
        { title:"AlumniConnect", techStack: "[ 'HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap' ]", 
            description:"AlumniConnect is bridge bwtween Student and Alumni, Where Alumni Post New Job Oppertunities and Students Apply for it.", 
            link:"https://github.com/GohelBhargav13/AlumniConnect",
            functions: `{             postJob : 'Alumni can post new job oppertunities for students',
                 applyJob:'Students can apply for the posted jobs',
                connectionRequest: 'Students can send connection requests to Alumni'
                adminPanel: 'Admin can manage users and job posts' 
    }`,
            tools:"['Git', 'GitHub', 'XAMPP']"
         },
        { title:"TaskHive (backend Project)", techStack: "['ExpressJs', 'MongoDB','mongoose', 'JWT' ]", 
            description:"TaskHive is a task management platform, where users can create, update, and delete tasks Of Particular Project.", 
            link:"https://github.com/GohelBhargav13/TaskHive",
            functions: `{            createProject : 'Users can create new projects to manage tasks',
                manageTasks:'Users can create, update, delete tasks within projects',
                userAuth: 'User authentication and authorization using JWT'
            }`,
            tools:"['Git', 'GitHub', 'Postman API']"
        }
    ]

  return (
    <div className='grid grid-cols-1 gap-2 p-2 mt-2 ml-40'>
        { Projects.map((project, idx) => (
            <>
             <p className='text-xl font-bold text-white'>{ idx }: { "{ " } </p>
                <div key={idx} className='bg-slate-800 p-2 py-2 m-2 w-fit font-mono rounded-xl ml-15 hover:transition duration-200'>
                    <div className='flex gap-2 ml-3 py-2'>
                            <h1 className='text-xl font-bold text-gray-950'>title</h1>
                            <p className='text-base italic text-gray-100 font-bold text-[17px]'>: "{ project.title }" ,</p>
                    </div>
                    <div className='flex gap-2 ml-3 py-2'>
                            <h1 className='text-xl font-bold text-gray-950'>description</h1>
                            <p className='text-base italic text-gray-100 font-bold text-[17px]'>: "{ project?.description }" ,</p>
                    </div>
                    <div className='flex gap-2 ml-3 py-2'>
                            <h1 className='text-xl font-bold text-gray-950'>TechStack</h1>
                            <p className='text-base italic text-gray-100 font-bold text-[17px]'>: "{ project?.techStack }" ,</p>
                    </div>
                     <div className='flex gap-2 ml-3 py-2'>
                            <h1 className='text-xl font-bold text-gray-950'>Features</h1>
                            <pre className='text-base italic text-gray-100 font-bold text-[17px]'>: "{ project?.functions }" ,</pre>
                    </div>
                     <div className='flex gap-2 ml-3 py-2'>
                            <h1 className='text-xl font-bold text-gray-950'>Tools</h1>
                            <p className='text-base italic text-gray-100 font-bold text-[17px]'>: "{ project?.tools }" ,</p>
                    </div>
                    <div className='flex gap-2 ml-3 py-2'>
                            <h1 className='text-xl font-bold text-gray-950'>Github: </h1>
                            <a href={project?.link} className='text-blue-500 underline font-bold' target='_blank'>"{ project?.link }"</a>
                    </div>
                </div>
                <p className='text-xl font-bold text-white ml-7'> { "}, " } </p>
            </>
        )) }
    </div>
  )
}

export default ProjectSection