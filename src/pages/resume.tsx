import React from "react";
import "../app/globals.css";

const Resume = () => {
  return (
    <div className="resume">
      <div className="h-screen w-full bg-[#313131]">
        <iframe
          src="https://firebasestorage.googleapis.com/v0/b/olaniyan-omotayo.appspot.com/o/Omotayo-Olaniyan.pdf?alt=media&token=6baf5d8b-0422-41aa-97a1-a82d659f76d9"
          style={{ height: "98vh", width: "100%" }}
          allow="autoplay"
        ></iframe>
      </div>
    </div>
  );
};

export default Resume;
