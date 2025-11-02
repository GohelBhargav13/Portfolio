import React from "react";

const Footer = () => {
  return (
    <div>
        <footer className="text-white py-10 text-center bg-linear-to-b from-black to-slate-950 font-mono font-bold">
          <h2 className="text-3xl p-3 font-semibold mb-4">
            My Contributions....
          </h2>
          <img
            src={`https://ghchart.rshah.org/GohelBhargav13`}
            alt="Bhargav's GitHub chart"
            className="mx-auto w-full max-w-4xl"
          />
          <p className="text-gray-400 mt-4">
            © { new Date().getFullYear() } Built by Bhargav 🚀 | #BuiltByBhargav
          </p>
        </footer>
      </div>
  );
};

export default Footer;
