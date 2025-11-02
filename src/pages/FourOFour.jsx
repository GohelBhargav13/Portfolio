import React from 'react'
import  NotFound  from "../assets/404_pages.png"

const FourOFour = () => {
  return (
    <div>
      <div className='bg-linear-to-b from-slate-800 to-black text-white text-center min-h-screen'>
        <div className='p-10 bg-linear-to-b from-slate-700 to-black w-fit mx-auto h-fit rounded-3xl'>
          <p className='text-2xl font-bold font-mono mt-4'> ❌ You're On Wrong Direction</p>
          <img 
            src={NotFound}
            alt='404'
            className='w-[1000px] mt-10 mx-auto'
          />
        </div>
      </div>
    </div>
  )
}

export default FourOFour