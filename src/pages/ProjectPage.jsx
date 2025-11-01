import React from 'react'
import ProjectSection from '../components/ProjectSection'

const ProjectPage = () => {
  return (
    <div>
        <div className='bg-linear-to-b from-slate-800 to-black font-mono text-white p-2'>
            <h1 className='text-white font-bold font-mono text-center text-2xl sm:text-3xl bg-slate-700 w-fit mx-auto py-3 px-3 rounded-xl hover:scale-105 transition duration-500'>Projects</h1>
            <div className='justify-start p-2 m-2 bg-slate-900 rounded-md shadow-lg shadow-black/60 border-2 border-gray-500'>
                <div className='flex gap-2 '>
                    <h1 className='text-pink-400 font-bold text-xl'>Export</h1>
                    <h1 className='text-orange-500 font-bold text-xl'>const</h1>
                    <h1 className='text-cyan-500 font-bold text-xl'>findProjects</h1>
                    <p className='text-pink-400 font-bold text-xl'>=</p>
                    <h1 className='text-orange-500 font-bold text-xl'>async</h1>
                    <p className='text-yellow-500 font-bold text-xl'> ( </p>
                    <h1 className='text-yellow-600 font-bold text-xl'>req , res</h1>
                     <p className='text-yellow-500 font-bold text-xl'> ) </p>
                     <p className='text-orange-500 font-bold text-xl'> { "=>" } </p>
                     <p className='text-yellow-500 font-bold text-xl'> { "{ " } </p>
                </div>
                 <div className='p-2 m-2'>
                        <h1 className='text-pink-400 font-bold text-xl'>try { " { " } </h1>
                  </div>
                  <div className='p-2 m-2 flex gap-4 ml-20'>
                        <h1 className='text-orange-500 font-bold text-xl'>await </h1>
                        <div className='flex'>
                        <h1 className='text-yellow-600 font-bold text-xl'>db.</h1>
                        <h1 className='text-yellow-600 font-bold text-xl'>Project.</h1>
                        <h1 className='text-yellow-600 font-bold text-xl'>find ( [</h1>
                        </div>
                  </div>
                  <ProjectSection />
                  <div className='p-2 m-2'>
                    <p className='text-yellow-600 font-bold text-xl ml-30'>] )</p>
                    <p className='text-pink-400 font-bold text-xl ml-6'>{ " }" }</p>
                    <div className='p-2 m-2'>
                        <h1 className='text-pink-400 font-bold text-xl'>catch (error) { "{ " }</h1>
                        <h1 className='text-cyan-500 font-bold text-xl ml-20 flex gap-1'> console.log("Error is :", <p className='text-yellow-500 font-bold text-xl'>error</p>) </h1>
                        <h1 className='text-pink-400 font-bold text-xl ml-20'>return;</h1>
                        <h1 className='text-pink-400 font-bold text-xl'>{ " }" }</h1>
                    </div>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectPage