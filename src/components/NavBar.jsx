import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [quoteIndex, setquoteIndex] = useState(0);

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

  return (
    <div>
      <nav className="bg-slate-800 shadow-lg shadow-black/60 border-b-2 border-gray-500 px-6 py-2">
        <div className="flex justify-between items-center">
          {/* Left side - Motivation Quote */}
          <div className="text-white font-mono md:text-lg max-w-[500px] bg-slate-700 p-3 rounded-xl font-bold">
            <p>{"{ "}{motivationQuotes[quoteIndex]}{" }"}</p>
          </div>

          {/* Right side - Navigation Links */}
          <ul className="flex space-x-4">
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
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
