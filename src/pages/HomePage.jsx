import CodeSection from "../components/CodeSection";

const HomePage = () => {

  const profileData = {
    nameIntro: "Hello, I'm",
    name: "BHARGAV GOHEL",
    profile:
      `Computer Engineering student passionate about full-stack web development and DevOps. 
       Skilled in JavaScript, PHP and modern frameworks with hands-on experience developing academic
       and personal projects using MERN and PHP/MySQL stacks with some DevOps tools like Docker
       and AWS (EC2,S3,ECR,ECS...).`,
    resumeLink:
      "https://drive.google.com/file/d/1REqk2uKh2hPL5l7RkcilrsW_GGOtmtPD/view?usp=drive_link",
  };

  return (
    <div>
      <div className="h-screen max-w-full flex gap-80 bg-linear-to-b from-gray-800 to-black text-white">
        <div className="mt-22 flex gap-30 mx-auto">
          {/* Left Side - Profile Section */}
          <div className="mt-15 p-1 transition-transform duration-400 h-[400px] hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-b from-gray-700 to-black hover:shadow-black/80 rounded-lg hover:p-1 mx-auto">
            <div className="flex gap-3">
            <p className="font-bold text-orange-600 text-2xl font-mono">const</p>
            <p className="font-bold text-yellow-400 text-2xl font-mono">introPart = </p>
            <p className="font-mono text-2xl text-white">{' { '}</p>
            </div>
            <h1 className="text-2xl font-bold text-center mt-4 font-mono flex items-start justify-start">
                <span className=" text-blue-400 font-mono text-xl ml-4">{"name"}</span>
                <span className="text-white mx-1">:</span>
                <p className="text-green-400 font-mono text-2xl">"{profileData.nameIntro}"</p> 
            </h1>
            <h1 className="text-2xl font-bold text-center font-mono text-green-400">
              {profileData.name} "
            </h1>
            <p className="font-mono max-w-lg mt-2 p-3 flex justify-start items-start">
             <h1 className="text-2xl font-bold text-center font-mono flex items-start justify-start">
             <span className=" text-blue-400 text-xl">{"profile"}</span>
             <span className="text-white mx-1">:</span>
            </h1>
               <h1 className="font-bold font-mono text-green-400 text-justify">"{profileData.profile}" </h1>
            </p>
         
            {/* Resume Button */}
                <div className="flex items-center font-mono text-base text-gray-200">
                <span className="ml-4 text-blue-400 text-xl font-bold">{"Resume"}</span>
                <span className="text-white mx-2">:</span>
                <a
                    href={profileData.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 transition-colors duration-300"
                >
                    {"function resume()"}
                </a>
                <span className="text-white">;</span>
                </div>

               <p className="font-mono text-2xl">{'}'}</p>
          </div>

          {/* Right Side - Image */}
          <div>
            <CodeSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
