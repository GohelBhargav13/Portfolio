import React, { useState } from "react";
import { toast } from "react-hot-toast";
const AboutPage = () => {
  const [userClick, setClick] = useState(false);
  const [message, setMessage] = useState("");

  // define the short introduction
  const shortIntro = {
    data: `Hii ,
    I am passionate about 
        web, API , Servers and the Real-Time communication
        technologies And DevOps. I love to learn new things.
        `,
  };

  // define Interests
  const Interests = [
    "Web Development",
    "API Development",
    "Real-Time Communication ( Sockets )",
    "DevOps",
  ];

  // Education Details
  const EducationDetails = [
    {
      name: "DIPLOMA",
      university: "GUJARAT TECHNOLOGICAL UNIVERSITY",
      duration: "Sept 2021 - Apr 2024",
      CGPA: "9.19 CGPA",
    },
    {
      name: "BACHOLARS OF ENGINEERING",
      university: "GUJARAT TECHNOLOGICAL UNIVERSITY",
      duration: "Jul 2024 - Apr 2027",
      CGPA: "8.40 (cpi TILL SEM-4)",
    },
  ];

  // Social Active
  const socialActive = [
    {
      appName: "LinkedIn",
      profileURL: "https://www.linkedin.com/in/bhargav-gohel-968919303/",
    },
    {
      appName: "GitHUB",
      profileURL: "https://github.com/GohelBhargav13",
    },
  ];

  // Handle User Click for sending message
  const handleUserClick = () => {
    console.log("User Clicked on Send Message Button ");
    try {
      setClick(true);
      toast.success("Message Sent to WEB GUY !!");
      return;
    } catch (error) {
      setClick(false);
      console.log("Error in Sending Message to WEB GUY ", error);
      toast.error("Error in Sending Message to WEB GUY ");
      return;
    } finally {
      setClick(false);
      console.log("finally block executed");
      setClick(false);
      setMessage("");
    }
  };

  return (
    <div>
      <div className="bg-linear-to-b from-slate-800 to-black font-mono">
        <div className="grid grid-cols-2 gap-5">
          {/* Short Introduction  */}
          <div className="bg-slate-700 text-white font-mono p-7 m-8 rounded-xl">
            <p className="font-bold text-white text-xl mt-10">{"{ "}</p>
            <pre className="text-green-400 text-start ml-5 font-bold text-[19px]">
              {shortIntro?.data}
            </pre>
            <p className="font-bold text-white text-xl">{"} "}</p>
          </div>
          {/* Interests */}
          <div className="bg-slate-700 text-white font-mono p-7 m-8 rounded-xl">
            <div className="flex gap-3">
              <h1 className="text-yellow-400 font-bold text-xl">
                Interests ={" "}
              </h1>
              <p className="text-orange-500 font-bold text-xl">[</p>
            </div>
            <div className="p-2 m-2 font-mono text-[15px]">
              {Interests.map((skill, idx) => (
                <div className="flex gap-2 py-1 hover:scale-105 duration-500 hover:font-bold hover:text-[15px] hover:cursor-pointer">
                  <p className="text-white">
                    {idx}: {"{"}
                  </p>
                  <div
                    key={idx}
                    className="bg-slate-950 w-fit rounded-xl p-2 mt-1 hover:scale-105 shadow-xl duration-500"
                  >
                    <h1 className="text-white">" {skill} "</h1>
                  </div>
                  <p className="text-white mt-6">{" },"}</p>
                </div>
              ))}
            </div>
            <p className="font-bold text-orange-500 text-xl">{"] "}</p>
          </div>
          {/* Educational Details */}
          <div className="bg-slate-700 text-white font-mono p-7 m-6 rounded-xl">
            <div className="flex gap-3">
              <h1 className="text-yellow-400 font-bold text-xl">
                Education_Details ={" "}
              </h1>
              <p className="text-orange-500 font-bold text-xl">[</p>
            </div>
            <div className="p-2 m-2 font-mono text-[15px]">
              {EducationDetails.map((Ed, idx) => (
                <div className="flex gap-2 py-1 hover:scale-105 duration-500 hover:cursor-pointer">
                  <p className="text-white">
                    {idx}: {"{"}
                  </p>
                  <div
                    key={idx}
                    className="bg-slate-950 w-fit rounded-xl p-4 my-2 mt-1"
                  >
                    <div className="my-2">
                      <div className="flex gap-2">
                        <h1 className="text-blue-600 text-xl">Education : </h1>
                        <h1 className="text-green-600 text-[18px]">
                          {" "}
                          " {Ed?.name} "{","}
                        </h1>
                      </div>
                      <div className="flex gap-2">
                        <h1 className="text-blue-600 text-xl">University : </h1>
                        <h1 className="text-green-600 text-[18px]">
                          {" "}
                          " {Ed?.university} "{","}
                        </h1>
                      </div>
                      <div className="flex gap-2">
                        <h1 className="text-blue-600 text-xl">Duration : </h1>
                        <h1 className="text-green-600 text-[18px]">
                          {" "}
                          " {Ed?.duration} "{","}
                        </h1>
                      </div>
                      <div className="flex gap-2">
                        <h1 className="text-blue-600 text-xl">CGPA : </h1>
                        <h1 className="text-green-600 text-[18px]">
                          {" "}
                          " {Ed?.CGPA} "{","}
                        </h1>
                      </div>
                    </div>
                  </div>
                  <p className="text-white mt-20">{" },"}</p>
                </div>
              ))}
            </div>
            <p className="font-bold text-orange-500 text-xl">{"] "}</p>
          </div>
          {/* Socially Active */}
          <div className="bg-slate-700 text-white font-mono p-7 m-8 rounded-xl">
            <div className="flex gap-3 mt-18">
              <h1 className="text-yellow-400 font-bold text-xl">
                Social_Links ={" "}
              </h1>
              <p className="text-orange-500 font-bold text-xl">[</p>
            </div>
            <div className="p-2 m-2 font-mono text-[15px]">
              {socialActive.map((Sa, idx) => (
                <div className="flex mt-8 gap-2 py-1 hover:scale-105 duration-500 hover:font-bold hover:text-[15px] hover:cursor-pointer">
                  <p className="text-white">{idx}:</p>
                  <p>{"{"}</p>
                  <div
                    key={idx}
                    className="flex gap-2 bg-slate-950 w-100% rounded-xl p-1.5 mt-4 hover:scale-105 shadow-xl duration-500"
                  >
                    <h1 className="text-white">" {Sa?.appName} :"</h1>
                    <h1 className="text-blue-500">{Sa?.profileURL}</h1>
                  </div>
                  <p className="text-white mt-6">{" },"}</p>
                </div>
              ))}
            </div>
            <p className="font-bold text-orange-500 text-xl">{"] "}</p>
          </div>
        </div>
        <div className="bg-black text-white font-mono p-2">
          <div className='"text-white font-bold font-mono text-center text-2xl sm:text-3xl bg-slate-700 w-fit mx-auto p-2 px-4 rounded-xl hover:scale-105 transition duration-500'>
            <h1 className="text-white font-bold text-3xl">For Contact</h1>
          </div>

          <div className="bg-linear-to-b from-slate-700 to-black rounded-xl p-6 m-8">
          
            {/* Node Mailer Design */}
            <h1 className="text-center text-xl mt-2">
              You can contact me via Email :{" "}
            </h1>
            <div className="grid grid-cols-2">
              <div className="ml-10 mt-8">
                <div className="flex gap-3">
                  <h1 className="text-orange-600">const</h1>
                  <h1 className="text-yellow-600">mail = </h1>
                  <h1 className="text-yellow-500">await </h1>
                  <div className="flex">
                    <h1 className="text-cyan-400">transporter.</h1>
                    <h1 className="text-pink-500">sendMail</h1>
                    <p className="text-cyan-400">(</p>
                    <p className="text-orange-600">{"{"}</p>
                  </div>
                </div>
                <div className="font-mono p-1 m-2 mt-5 ml-8">
                  <div className="flex gap-2 ml-4">
                    <h1 className="text-yellow-600 mt-2">From: </h1>
                    <input
                      type="email"
                      className="bg-slate-500 w-[250px] rounded-xl p-2 my-2 mt-1"
                      placeholder="Enter Your Email...."
                    />
                  </div>
                  <div className="flex gap-2 ml-4">
                    <h1 className="text-yellow-600 mt-2 ml-0.5">To: </h1>
                    <input
                      type="text"
                      value="gohelbhargavxxx@gmail.com"
                      className="bg-slate-500 w-[250px] rounded-xl p-2 my-2 mt-1 ml-4"
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex gap-3">
                  <p className="text-yellow-600 mt-2">Message: </p>
                  <textarea
                    rows="4"
                    cols="30"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-slate-500 w-[500px] rounded-xl p-2 my-2 mt-1"
                    placeholder="Enter a Message...."
                  />
                </div>
                <button
                  className={`${
                    !message
                      ? "bg-slate-800 w-fit rounded-xl p-2 my-2 mt-1 text-white font-bold font-mono text-[17px] ml-20 cursor-not-allowed"
                      : "bg-yellow-600 w-fit rounded-xl p-2 my-2 mt-1 text-white font-bold font-mono text-[17px] ml-20 cursor-pointer"
                  }`}
                  value="/api/v1/sent-message"
                  disabled={!message || userClick}
                  onClick={handleUserClick}
                >
                  {userClick ? "/api/v1/message-sent" : "/api/v1/sent-message"}
                </button>

                <p className="text-pink-800 font-bold flex">
                  {"}"}
                  <p className="text-cyan-500 font-bold">)</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
