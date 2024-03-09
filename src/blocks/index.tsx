"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content";

const All = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className=" bg-primary spacings shadow-cursor-container">
      <div className=" block md:flex gap-0  md:gap-[26px] lg:gap-[36px] spacings">
        <Sidebar />
        <Content />
      </div>
      {/* Shadow cursor element */}
      <div
        className="shadow-cursor"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      ></div>
    </div>
  );
};

export default All;
