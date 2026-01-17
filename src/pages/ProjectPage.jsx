import { useState } from 'react'
import ProjectSection from '../components/ProjectSection'
import { Loader2 } from 'lucide-react'

const ProjectPage = () => {
  const [isProjectShow,setIsProjectShow] = useState(false)
  const [isFetchingProject,setIsFetchingProject] = useState(false)

  // handle a getting a projects
  const handleGettingProject = () => {
    setIsFetchingProject(true)
      setTimeout(() => {
        setIsProjectShow(true)
        setIsFetchingProject(false)
      },2000)
  }
  return (
    <div>
        <div className='bg-linear-to-b from-slate-800 to-black font-mono text-white p-2'>
            <h1 className='text-white font-bold font-mono text-center text-lg sm:text-xl md:text-2xl lg:text-3xl bg-slate-700 w-fit mx-auto py-3 px-3 rounded-xl hover:scale-105 transition duration-500'>Projects</h1>
            <div className='justify-start p-2 m-2 bg-slate-900 rounded-md shadow-lg shadow-black/60 border-2 border-gray-500'>
                <div className='flex gap-2 text-[16px] sm:text-[19px] md:text-[20px] lg:text-[21px]'>
                    <h1 className='text-pink-400 font-bold'>Export</h1>
                    <h1 className='text-orange-500 font-bold'>const</h1>
                    <h1 className='text-cyan-500 font-bold'>findProjects</h1>
                    <p className='text-pink-400 font-bold'>=</p>
                    <h1 className='text-orange-500 font-bold'>async</h1>
                    <p className='text-yellow-500 font-bold'> ( </p>
                    <h1 className='text-yellow-600 font-bold'>req , res</h1>
                     <p className='text-yellow-500 font-bold '> ) </p>
                     <p className='text-orange-500 font-bold '> { "=>" } </p>
                     <p className='text-yellow-500 font-bold '> { "{ " } </p>
                </div>
                 <div className='p-2 m-2 text-[16px] sm:text-[19px] md:text-[20px] lg:text-[21px]'>
                        <h1 className='text-pink-400 font-bold'>try { " { " } </h1>
                  </div>
                  <div className='flex gap-2 ml-11 sm:ml-17 md:ml-20 md:gap-3 lg:ml-22 lg:gap-4 text-[15px] sm:text-[16px] md:text-[20px] lg:text-[21px]'>
                        <h1 className='text-orange-500 font-bold'>await </h1>
                        <div className='flex'>
                        <h1 className='text-pink-600 font-bold'>fetch</h1>
                        <h1 className='text-yellow-600 font-bold flex gap-0.5'>(<p className='text-green-500/80'>`https://api.github.com/GohelBhargav13/projects`,</p>{"["}</h1>
                        </div>
                  </div>
                  { isProjectShow ? <ProjectSection /> : <button className={`flex mx-auto mt-15 text-[24px] m-8 p-2 rounded-xl font-bold  border-r-4 border-r-white border-b-4 border-b-white border-t-2 border-white border-l-2 ${ isFetchingProject ? "bg-red-400/60 cursor-not-allowed" : "bg-red-500/40  hover:border-r-2 hover:border-b-2 hover:border-r-white hover:border-b-white hover:duration-500 hover:ease-in cursor-pointer"}`} onClick={handleGettingProject}>{ isFetchingProject ? <Loader2 className='font-bold w-full h-full justify-items-center animate-spin' /> : "GET /projects" }</button> }
                  <div className='p-2 m-2'>
                    <p className='text-yellow-600 font-bold text-[14px] sm:text-[16px] md:text-[19px] lg:[21px] ml-25 md:ml-28 lg:ml-30'>{"]"} )</p>
                    <p className='text-pink-400 font-bold text-[15px] sm:text-[16px] md:text-[19px] lg:text-[21px] ml-6'>{ " }" }</p>
                    <div className='p-1 m-1 text-[15px] sm:text-[16px] md:text-[19px] lg:[text-21px]'>
                        <h1 className='text-pink-400 font-bold'>catch (error) { "{ " }</h1>
                        <h1 className='text-cyan-500 font-bold ml-20 flex gap-1'> console.log("Error is :", <p className='text-yellow-500 font-bold text-xl'>error</p>) </h1>
                        <h1 className='text-pink-400 font-bold ml-20'>return;</h1>
                        <h1 className='text-pink-400 font-bold'>{ " }" }</h1>
                    </div>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectPage