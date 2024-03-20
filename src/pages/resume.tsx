import React from "react";
import "../app/globals.css";

const Resume = () => {
  return (
    <div className="resume">
      <div className="h-screen w-full bg-[#313131]">
        <iframe
          src="https://firebasestorage.googleapis.com/v0/b/olaniyan-omotayo.appspot.com/o/Omotayo-Olaniyan.pdf?alt=media&token=5083f361-3141-4101-ae26-d411d65215e6"
          style={{ height: "98vh", width: "100%" }}
          allow="autoplay"
        ></iframe>
      </div>
    </div>
  );
};

export default Resume;
