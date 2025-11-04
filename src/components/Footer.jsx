import React from "react";

const Footer = () => {
  return (
    <div>
        <footer className="text-white py-10 text-center bg-linear-to-b from-black to-slate-950 font-mono font-bold">
          <h2 className="text-xl p-3 font-semibold mb-2 sm:text-xl md:text-xl lg:text-2xl md:mb-3">
            My Contributions....
          </h2>
          <img
            src={`https://ghchart.rshah.org/GohelBhargav13`}
            alt="Bhargav's GitHub chart"
            className="mx-auto w-[300px] max-w-2xl sm:w-[480px] sm:mx-auto md:w-[510px] md:mx-auto lg:w-full lg:mx-auto"
          />
          <p className="text-gray-400 mt-2 text-[10px] sm:text-[12px] md:text-[16px] lg:text-lg lg:mt-4">
            © { new Date().getFullYear() } Built by Bhargav 🚀 | #BuiltByBhargav
          </p>
        </footer>
      </div>
  );
};

export default Footer;
