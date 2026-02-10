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
      "https://drive.google.com/file/d/1C0YXRVeQm2PYfi7oWHdaySQ2COYU_3IC/view",
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-800 to-black text-white flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 py-8">
  <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-24 mt-4 w-full max-w-7xl">
    
    {/* Left Section - Profile Info */}
    <div className="bg-linear-to-b from-gray-800 to-gray-900 hover:from-gray-700 hover:to-black 
      rounded-2xl p-4 sm:p-6 md:p-8 
      transition-transform duration-300 hover:scale-105 shadow-lg shadow-black/70 
      w-full sm:max-w-sm md:max-w-lg lg:max-w-xl text-center sm:text-left">
      
      <div className="flex flex-wrap justify-start sm:justify-start items-center text-xs sm:text-sm md:text-base lg:text-lg gap-2">
        <p className="font-bold text-orange-600 font-mono">const</p>
        <p className="font-bold text-yellow-400 font-mono">introPart =</p>
        <p className="font-mono text-white">{'{'}</p>
      </div>

      <div className="mt-4 space-y-3 sm:space-y-4">
        <div className="flex flex-row sm:flex-row items-start sm:items-start sm:justify-start">
          <span className="text-blue-400 font-mono sm:ml-4">"name"</span>
          <span className="text-white sm:mx-1">:</span>
          <p className="text-green-400 font-mono">"{profileData.nameIntro}"</p>
        </div>

        <h1 className="text-green-400 font-mono text-center sm:text-start text-lg sm:text-xl md:text-2xl font-bold sm:ml-4">
          {profileData.name}"
        </h1>

        <div className="mt-3 sm:ml-4">
          <div className="flex items-start justify-start sm:justify-start">
            <span className="text-blue-400 font-mono">"profile"</span>
            <span className="text-white mx-1">:</span>
          </div>
          <p className="text-green-400 font-mono text-justify text-sm sm:text-base leading-relaxed mt-1 px-2 sm:px-0">
            "{profileData.profile}"
          </p>
        </div>

        {/* Resume Link */}
        <div className="flex flex-row gap-0.5 sm:flex-row text-start sm:items-start text-xs sm:text-sm md:text-base mt-3 sm:ml-4 justify-center sm:justify-start">
          <span className="text-blue-400 font-mono">"Resume"</span>
          <span className="text-white sm:mx-2">:</span>
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

      <p className="font-mono text-xl text-start sm:text-2xl mt-4 ml-1">{'}'}</p>
    </div>

    {/* Right Section - Code Display */}
    <div className="w-full sm:max-w-md md:max-w-lg flex justify-center px-2 sm:px-0 mt-8 lg:mt-0">
      <CodeSection />
    </div>
  </div>
</div>

  );
};

export default HomePage;
