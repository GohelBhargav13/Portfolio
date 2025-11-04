import React, { useState } from "react";
import { toast } from "react-hot-toast";

const AboutPage = () => {
  const [userClick, setClick] = useState(false);
  const [message, setMessage] = useState("");

  const shortIntro = {
    data: `Hii ,
    I am passionate about 
        web, API , Servers and the Real-Time communication
        technologies And DevOps. I love to learn new things.
        `,
  };

  const Interests = [
    "Web Development",
    "API Development",
    "Real-Time Communication (Sockets)",
    "DevOps",
  ];

  const EducationDetails = [
    {
      name: "DIPLOMA",
      university: "GUJARAT TECHNOLOGICAL UNIVERSITY",
      duration: "Sept 2021 - Apr 2024",
      CGPA: "9.19 CGPA",
    },
    {
      name: "BACHELORS OF ENGINEERING",
      university: "GUJARAT TECHNOLOGICAL UNIVERSITY",
      duration: "Jul 2024 - Apr 2027",
      CGPA: "8.40 (CPI TILL SEM-4)",
    },
  ];

  const socialActive = [
    {
      appName: "LinkedIn",
      profileURL: "https://www.linkedin.com/in/bhargav-gohel-968919303/",
    },
    {
      appName: "GitHub",
      profileURL: "https://github.com/GohelBhargav13",
    },
  ];

  const handleUserClick = () => {
    try {
      setClick(true);
      toast.success("Message Sent to WEB GUY !!");
    } catch (error) {
      toast.error("Error in Sending Message to WEB GUY ");
      console.log("Error in Sending Message:", error);
    } finally {
      setTimeout(() => {
        setClick(false);
        setMessage("");
      }, 1500);
    }
  };

  return (
    <div className="bg-linear-to-b from-slate-800 to-black font-mono min-h-screen text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Short Introduction */}
        <div className="bg-slate-700 p-6 m-4 rounded-xl">
          <p className="font-bold text-xl mt-2">{"{ "}</p>
          <pre className="text-green-400 text-start ml-5 font-bold text-[17px] whitespace-pre-wrap">
            {shortIntro.data}
          </pre>
          <p className="font-bold text-xl">{"} "}</p>
        </div>

        {/* Interests */}
        <div className="bg-slate-700 p-6 m-4 rounded-xl">
          <div className="flex gap-2">
            <h1 className="text-yellow-400 font-bold text-xl">Interests = </h1>
            <p className="text-orange-500 font-bold text-xl">[</p>
          </div>
          <div className="p-2 text-[15px]">
            {Interests.map((skill, idx) => (
              <div
                key={idx}
                className="flex flex-wrap gap-2 py-1 hover:scale-105 duration-500 hover:font-bold"
              >
                <p>{idx}: {"{"}</p>
                <div className="bg-slate-950 w-fit rounded-xl p-2 mt-1 shadow-lg">
                  <h1>" {skill} "</h1>
                </div>
                <p className="mt-4">{" },"}</p>
              </div>
            ))}
          </div>
          <p className="font-bold text-orange-500 text-xl">{"] "}</p>
        </div>

        {/* Education Details */}
        <div className="bg-slate-700 p-6 m-4 rounded-xl">
          <div className="flex gap-2">
            <h1 className="text-yellow-400 font-bold text-xl">
              Education_Details ={" "}
            </h1>
            <p className="text-orange-500 font-bold text-xl">[</p>
          </div>
          <div className="p-2 text-[15px]">
            {EducationDetails.map((Ed, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-2 py-2 hover:scale-105 duration-500"
              >
                <p>{idx}: {"{"}</p>
                <div className="bg-slate-950 rounded-xl p-4 my-2">
                  <div>
                    <p>
                      <span className="text-blue-600">Education:</span>{" "}
                      <span className="text-green-600">" {Ed.name} ",</span>
                    </p>
                    <p>
                      <span className="text-blue-600">University:</span>{" "}
                      <span className="text-green-600">" {Ed.university} ",</span>
                    </p>
                    <p>
                      <span className="text-blue-600">Duration:</span>{" "}
                      <span className="text-green-600">" {Ed.duration} ",</span>
                    </p>
                    <p>
                      <span className="text-blue-600">CGPA:</span>{" "}
                      <span className="text-green-600">" {Ed.CGPA} ",</span>
                    </p>
                  </div>
                </div>
                <p>{" },"}</p>
              </div>
            ))}
          </div>
          <p className="font-bold text-orange-500 text-xl">{"] "}</p>
        </div>

        {/* Social Links */}
        <div className="bg-slate-700 p-6 m-4 rounded-xl">
          <div className="flex gap-2">
            <h1 className="text-yellow-400 font-bold text-xl">
              Social_Links ={" "}
            </h1>
            <p className="text-orange-500 font-bold text-xl">[</p>
          </div>
          <div className="p-2 text-[15px]">
            {socialActive.map((Sa, idx) => (
              <div
                key={idx}
                className="flex flex-wrap items-center gap-2 py-2 hover:scale-105 duration-500"
              >
                <p>{idx}: {"{"}</p>
                <div className="flex gap-2 bg-slate-950 rounded-xl p-2 mt-2 shadow-lg w-fit">
                  <h1 className="text-[14px]">"{Sa.appName}:"</h1>
                  <a
                    href={Sa.profileURL}
                    className="text-blue-400 break-all hover:underline"
                  >
                    {Sa.profileURL}
                  </a>
                </div>
                <p className="mt-4">{" },"}</p>
              </div>
            ))}
          </div>
          <p className="font-bold text-orange-500 text-xl">{"] "}</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-black p-6 mt-6 rounded-xl text-center">
        <h1 className="text-3xl font-bold bg-slate-700 inline-block px-4 py-2 rounded-xl hover:scale-105 transition">
          For Contact
        </h1>
        <h2 className="text-xl mt-4">
          You can contact me via Email :
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-left">
          <div className="px-4">
            <p>
             <span className="text-orange-500 mr-2">const</span>
              <span className="text-yellow-600">mail = </span>
              <span className="text-yellow-500">await </span>
              <span className="text-cyan-400">transporter.</span>
              <span className="text-pink-500">sendMail</span>
              <span className="text-cyan-400">(</span>
              <span className="text-orange-600">{"{"}</span>
            </p>
            <div className="mt-4">
              <label className="block text-yellow-600">From:</label>
              <input
                type="email"
                className="bg-slate-600 w-full rounded-xl p-2 mt-1"
                placeholder="Enter Your Email..."
              />
              <label className="block text-yellow-600 mt-3">To:</label>
              <input
                type="text"
                value="gohelbhargavxxx@gmail.com"
                disabled
                className="bg-slate-600 w-full rounded-xl p-2 mt-1"
              />
            </div>
          </div>

          <div className="px-4">
            <label className="block text-yellow-600">Message:</label>
            <textarea
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-slate-600 w-full rounded-xl p-2 mt-1"
              placeholder="Enter your message..."
            />
            <button
              onClick={handleUserClick}
              disabled={!message || userClick}
              className={`${
                !message
                  ? "bg-slate-800 cursor-not-allowed"
                  : "bg-yellow-600 cursor-pointer hover:bg-yellow-500"
              } w-fit px-4 py-2 mt-3 rounded-xl font-bold text-white`}
            >
              {userClick ? "/api/v1/message-sent" : "/api/v1/sent-message"}
            </button>
            <p className="text-pink-600 flex mt-2">{"}"} <p className="text-cyan-500">)</p> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
