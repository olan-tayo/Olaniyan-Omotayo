"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content";

const All = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseEnter = () => {
      setHovered(true);
    };

    const handleMouseLeave = () => {
      setHovered(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const cursorStyle = {
    left: `${cursorPosition.x}px`,
    top: `${cursorPosition.y}px`,
    backgroundColor: isHovered ? "#202531" : "transparent",
    boxShadow: isHovered ? "0 0 10px rgba(0, 0, 0, 0.3)" : "none",
  };

  return (
    <div className=" bg-primary spacings">
      <div className="custom-cursor" style={cursorStyle}></div>
      <div className=" block md:flex gap-0  md:gap-[26px] lg:gap-[36px] spacings">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
};

export default All;
