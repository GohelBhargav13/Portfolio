import { useEffect, useState } from "react";

const CodeSection = () => {
  const [codeShow, setCodeShow] = useState(0);

  const codeStrings = [
    {
      projectName: "Tubex",
      function:"Like a video",
      snippets:`if (!video.videoLikes.includes(userId)) {
        video.videoLikes.push(userId);
        await video.save(); // Must Remember

      io.emit("VideoLikeUpdated", {
        LikeCounts: video.videoLikes.length,
            userId,
            videoId,
            message: "Video Liked",
        });
}
            `,
    },
    {
      projectName: "Alumni Connect",
      function:"Connect Friends",
      snippets:`
<?php
require_once '../utills/db_conn.php';

if (!isset($_SESSION['alumni_id'])) {
    $_SESSION['message'] = ["success" => false, "final_msg" => "student id is not set"];
    header("Location:../login.php");
    exit();
}
$fetch_friends = "SELECT s.*, c.conn_id FROM studentmaster s  
    JOIN connectionmaster c ON c.sender_id = s.student_id 
    WHERE receiver_id = ? AND connection_status = 'accepted'";
$fetch_friends_stmt = $conn->prepare($fetch_friends);
?>`,
    },
    {
        projectName:"TaskHive",
        function:"Show All Members",
        snippets:` 
const showAllMembers = async (req, res) => {
  const { projectId } = req.params;
  try {
    const allUser = await ProjectMember.find({
        project:projectId
    }).select("-createdAt -updatedAt -__v -_id").populate("user","username")

    res.status(200).json(new ApiResponse(200,"Member's fetched successfully",allUser))

  } catch (error) {
    return res.status(500).json(new ApiError(500,"Internal Error to fetch members"))
  }
}; `
    }
  ];

  useEffect(() => {
    const intervalSet = setInterval(() => {
      setCodeShow((prev) => (prev + 1) % codeStrings.length);
    }, 3000); // show new code every 3s

    // When the component unmounts, clear the interval
    return () => clearInterval(intervalSet);
  }, []);

  return (
    <div className="bg-[#0d1117] text-[#00ff95] font-mono p-5 rounded-lg shadow-lg w-[90%] md:w-[600px] border border-gray-700">
      <div className="flex space-x-2 mb-3">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>

    <div className="p-2 font-mono">
    <div className="flex gap-3 p-2">
    <p className="font-bold text-orange-700">const</p>
    <p className="font-bold text-yellow-400">{ "projectSnippets =  " }</p>
    <p className="font-bold text-white">{ " {" }</p>
    </div>

<div className="mx-auto ml-10 w-100% h-auto">
    <h1 className="font-bold text-xl flex">
        <p className="text-gray-400 m-2">{"ProjectName: "}</p>
        <p className="text-blue-400 m-2">
            "{codeStrings[codeShow]?.projectName}"
        </p>
      </h1>
      <h1 className="font-bold text-xl flex">
        <p className="text-gray-400 m-2">{"Function: "}</p>
         <pre className="text-xl transition-all duration-500 ease-in-out m-2">
        "{codeStrings[codeShow]?.function}"
      </pre>
      </h1>
      <h1 className="font-bold text-lg flex w-70%">
        <p className="text-gray-400 m-2">{"Snippets: "}</p>
        <p className="text-sm mt-3 transition-all duration-500 ease-in-out whitespace-pre-wrap justify-between">
           " {codeStrings[codeShow]?.snippets}"
        </p>
      </h1>
      </div>
       <p className="font-bold mt-3 text-white">{ "} " }</p>
      </div>
    </div>
  );
};

export default CodeSection;
