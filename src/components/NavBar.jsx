import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon } from "lucide-react";

const NavBar = () => {
  const [quoteIndex, setquoteIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // Motivaltional Quotes
  const motivationQuotes = [
    " 'work' : 'daily' ",
    " 'Learn' : 'daily' ",
    " 'Progress' : 'daily' ",
    " 'Success' : 'daily' ",
  ];

  // handle the interval using useEffect & setInterval
  useEffect(() => {
    const intervals = setInterval(() => {
      setquoteIndex((prev) => (prev + 1) % motivationQuotes.length);
    }, 2000);

    return () => clearInterval(intervals);
  }, []);

  // handle Toogle Button
  const handleToogle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <nav className="bg-slate-800 shadow-lg shadow-black/60 border-b-2 border-gray-500 px-6 py-2">
        <div className="flex justify-between items-center flex-row sm:flex-row md:flex-row">
          {/* Left side - Motivation Quote */}
          <div className="text-white font-mono mr-3 mt-1 p-1 rounded-lg text-[10px] sm:text-sm md:p-2 md:text-[16px] md:rounded-lg lg:rounded-xl lg-p-3 lg:text-lg max-w-[500px] w-[145px] sm:w-[200px] md:w-[240px] lg:w-[270px]  text-center bg-slate-700 font-bold">
            <p>
              {"{ "}
              {motivationQuotes[quoteIndex]}
              {" }"}
            </p>
          </div>

          {/* Right side - Navigation Links */}
          <ul className="space-x-4 hidden sm:hidden md:flex md:space-x-1 lg:flex">
            <li className="text-white text-lg font-mono hover:bg-slate-700 hover:ring-2 hover:ring-gray-400 px-3 py-1 rounded-md transition-all duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="text-white text-lg font-mono hover:bg-slate-700 hover:ring-2 hover:ring-gray-400 px-3 py-1 rounded-md transition-all duration-300">
              <Link to="/skills">Skills</Link>
            </li>
            <li className="text-white text-lg font-mono hover:bg-slate-700 hover:ring-2 hover:ring-gray-400 px-3 py-1 rounded-md transition-all duration-300">
              <Link to="/project">Projects</Link>
            </li>
            <li className="text-white text-lg font-mono hover:bg-slate-700 hover:ring-2 hover:ring-gray-400 px-3 py-1 rounded-md transition-all duration-300">
              <Link to="/about">About</Link>
            </li>
          </ul>

          <div className="text-white text-sm sm:text-sm md:text-md lg:text-lg md:hidden">
            <div className="mt-2 cursor-pointer justify-items-end" onClick={handleToogle}>
              <MenuIcon />
            </div>

            <div className={`${isOpen && 'flex-col mt-1 hover:border-b-2 hover:border-white sm:ml-1 md:ml-3 lg:ml-3 transition-all duration-700 justify-items-center p-1 sm:p-1 md:p-2 lg:p-3 gap-1 font-mono text-white text-sm bg-slate-700 w-[140px] sm:w-[140px] md:w-60 lg:w-[190px] rounded-xl'}`}>
             { isOpen && (
               <ul className={`mt-2 sm:mt-1.5 md:mt-2 lg:mt-3 text-sm p-0 sm:text-sm md:text-sm lg:text-lg ${isOpen ? 'transition duration-200' : ''}`}>
                <li className="text-white font-mono hover:bg-slate-700 hover:ring-2 hover:ring-gray-400 px-3 py-1 rounded-md transition-all duration-300">
                  <Link to="/">Home</Link>
                </li>
                <li className="text-white font-mono hover:bg-slate-700 hover:ring-2 hover:ring-gray-400 px-3 py-1 rounded-md transition-all duration-300">
                  <Link to="/skills">Skills</Link>
                </li>
                <li className="text-white font-mono hover:bg-slate-700 hover:ring-2 hover:ring-gray-400 px-3 py-1 rounded-md transition-all duration-300">
                  <Link to="/project">Projects</Link>
                </li>
                <li className="text-white font-mono hover:bg-slate-700 hover:ring-2 hover:ring-gray-400 px-3 py-1 rounded-md transition-all duration-300">
                  <Link to="/about">About</Link>
                </li>
              </ul>
             ) }
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
