import { useEffect, useState } from "react";

const CodeSection = () => {
  const [codeShow, setCodeShow] = useState(0);

  const codeStrings = [
    {
      projectName: "Tubex",
      function: "Like a video",
      snippets: `if (!video.videoLikes.includes(userId)) {
  video.videoLikes.push(userId);
  await video.save(); // Must Remember

  io.emit("VideoLikeUpdated", {
    LikeCounts: video.videoLikes.length,
    userId,
    videoId,
    message: "Video Liked",
  });
}`,
    },
    {
      projectName: "Alumni Connect",
      function: "Connect Friends",
      snippets: `<?php
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
      projectName: "TaskHive",
      function: "Show All Members",
      snippets: `const showAllMembers = async (req, res) => {
  const { projectId } = req.params;
  try {
    const allUser = await ProjectMember.find({ project: projectId })
      .select("-createdAt -updatedAt -__v -_id")
      .populate("user", "username");

    res.status(200).json(new ApiResponse(200, "Members fetched successfully", allUser));
  } catch (error) {
    return res.status(500).json(new ApiError(500, "Internal Error to fetch members"));
  }
};`,
    },
    {
      projectName: "DevHub",
      function: "Handle New Link & delete a link",
      snippets: `  // Handle a new link section
  const newLinkHandler = () => {
    if(!currLink.trim()) return

    setPostLink((prev) => [...prev,currLink])
    toast.success("New Link Added")
    setCurrLink("")
  }
  
  // Handle a delete link
  const handleDeleteLink = (index) => {
    setPostLink((prev) => prev.filter((_,i) => i !== index))
  }`,
    },
  ];

  useEffect(() => {
    const intervalSet = setInterval(() => {
      setCodeShow((prev) => (prev + 1) % codeStrings.length);
    }, 3500); // 3.5s rotation
    return () => clearInterval(intervalSet);
  }, []);

  return (
    <div className="bg-[#0d1117] text-[#00ff95] font-mono p-4 rounded-lg shadow-lg border border-gray-700 w-[95%] sm:w-[85%] md:w-[600px] lg:w-[700px] mx-auto transition-all duration-300">
      {/* Top Bar */}
      <div className="flex space-x-2 mb-3">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>

      {/* Code Section */}
      <div className="text-sm sm:text-base md:text-[16px] leading-relaxed">
        <div className="flex items-center gap-2 mb-2">
          <p className="font-bold text-orange-700">const</p>
          <p className="font-bold text-yellow-400">projectSnippets =</p>
          <p className="font-bold text-white">{'{'}</p>
        </div>

        <div className="ml-5 sm:ml-7 md:ml-10">
          <p className="text-gray-400 mb-1">
            ProjectName: <span className="text-blue-400">"{codeStrings[codeShow]?.projectName}"</span>
          </p>
          <p className="text-gray-400 mb-1">
            Function: <span className="text-blue-400">"{codeStrings[codeShow]?.function}"</span>
          </p>

          <p className="text-gray-400 mb-1">Snippets:</p>
          <pre className="text-green-400 text-[12px] sm:text-sm md:text-[14px] bg-[#0d1117] p-2 rounded overflow-x-auto whitespace-pre-wrap border-l-2 border-green-400 transition-all duration-500 ease-in-out">
            {codeStrings[codeShow]?.snippets}
          </pre>
        </div>

        <p className="text-white mt-2">{'}'}</p>
      </div>
    </div>
  );
};

export default CodeSection;
