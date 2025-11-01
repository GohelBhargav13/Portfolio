import React from 'react'
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
        <nav className='bg-slate-800 text-end p-1 shadow-lg shadow-black/60 border-b-2 border-gray-500'>
            <ul className='flex place-content-end mx-auto sm:place-content-end'>
                <div className='px-0.5 py-1 m-3'>
                    <li className='text-white text-base hover:bg-slate-700 font-mono hover:text-shadow-white hover:duration-500 hover:p-1 px-0.5 py-0.5 rounded-md hover:ring-2'><Link to='/' > Home </Link></li>
                </div>
                 <div className='px-0.5 py-1 m-3'>
                    <li className='text-white text-base hover:bg-slate-700 font-mono hover:text-shadow-white hover:duration-500 hover:p-1 px-0.5 py-0.5 rounded-md hover:ring-2'><Link to='/skills' > Skills </Link></li>
                </div>
                 <div className='px-0.5 py-1 m-3'>
                    <li className='text-white text-base hover:bg-slate-700 font-mono hover:text-shadow-white hover:duration-500 hover:p-1 px-0.5 py-0.5 rounded-md hover:ring-2'><Link to='/project' > Projects </Link></li>
                </div>
                 <div className='px-0.5 py-1 m-3'>
                    <li className='text-white text-base hover:bg-slate-700 font-mono hover:text-shadow-white hover:duration-500 hover:p-1 px-0.5 py-0.5 rounded-md hover:ring-2'><Link to='/about' > About </Link></li>
                </div>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar