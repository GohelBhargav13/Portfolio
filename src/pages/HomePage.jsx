import CodeSection from "../components/CodeSection";


const HomePage = () => {
  const profileData = {
    nameIntro: "Hello, I'm",
    name: "BHARGAV GOHEL",
    profile: `Computer Engineering student passionate about full-stack web development and DevOps. 
       Skilled in JavaScript, PHP and modern frameworks with hands-on experience developing academic
       and personal projects using MERN and PHP/MySQL stacks with some DevOps tools like Docker
       and AWS (EC2, S3, ECR, ECS...).`,
    resumeLink:
      "https://drive.google.com/file/d/1REqk2uKh2hPL5l7RkcilrsW_GGOtmtPD/view?usp=drive_link",
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-800 to-black text-white flex flex-col justify-center items-center px-4">
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center gap-12 md:gap-20 lg:gap-32 mt-1">
        {/* Left Section - Profile Info */}
        <div className="bg-linear-to-b from-gray-800 to-gray-900 hover:from-gray-700 hover:to-black rounded-xl p-5 transition-transform duration-300 hover:scale-105 shadow-lg shadow-black/70 max-w-lg 
        w-full sm:mt-3 sm:w-[400px] md:w-[700px] lg:w-[600px]">
          <div className="flex items-center text-sm md:text-base lg:text-lg gap-2">
        
            <p className="font-bold text-orange-600 font-mono">const</p>
            <p className="font-bold text-yellow-400 font-mono">introPart =</p>
            <p className="font-mono text-white">{'{'}</p>
      
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex items-center">
              <span className="text-blue-400 font-mono ml-4">"name"</span>
              <span className="text-white mx-1">:</span>
              <p className="text-green-400 font-mono">"{profileData.nameIntro}"</p>
            </div>

            <h1 className="text-green-400 font-mono text-xl md:text-2xl font-bold ml-4">
              {profileData.name}"
            </h1>

            <div className="mt-3 ml-4">
              <div className="flex items-start">
                <span className="text-blue-400 font-mono">"profile"</span>
                <span className="text-white mx-1">:</span>
              </div>
              <p className="text-green-400 font-mono text-justify text-sm md:text-base leading-relaxed mt-1">
                "{profileData.profile}"
              </p>
            </div>

            {/* Resume Link */}
            <div className="flex items-center text-sm md:text-base mt-3 ml-4">
              <span className="text-blue-400 font-mono">"Resume"</span>
              <span className="text-white mx-2">:</span>
              <a
                href={profileData.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors duration-300"
              >
                {"function resume()"}
              </a>
              <span className="text-white ml-1">;</span>
            </div>
          </div>

          <p className="font-mono text-2xl mt-4 ml-1">{'}'}</p>
        </div>

        {/* Right Section - Code Display */}
        <div className="w-full max-w-md md:max-w-lg flex justify-center">
          <CodeSection />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
