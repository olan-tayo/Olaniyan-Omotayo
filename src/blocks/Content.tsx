"use client";

import React, { useEffect, useState } from "react";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Experience from "./Experience/Experience";
import { Element } from "react-scroll";

const Content = () => {
  // const [activeSection, setActiveSection] = useState<string | null>(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const aboutSection = document.getElementById("about");
  //     const projectsSection = document.getElementById("projects");

  //     if (
  //       aboutSection &&
  //       window.scrollY >= aboutSection.offsetTop &&
  //       window.scrollY < projectsSection
  //         ? projectsSection?.offsetTop
  //         : 0
  //     ) {
  //       setActiveSection("about");
  //     } else if (
  //       projectsSection &&
  //       window.scrollY >= projectsSection.offsetTop
  //     ) {
  //       setActiveSection("projects");
  //     } else {
  //       setActiveSection(null);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // console.log(activeSection);

  return (
    <div className="w-full md:w-[60%] overflow-x-auto text-primary-50">
      <Element className="w-full" name="about">
        <Home />
      </Element>

      <Element className="w-full" name="projects">
        <Projects />
      </Element>

      <Element className="w-full" name="experience">
        <Experience />
      </Element>

      <section>
        <p className="text-primary-50 text-base md:text-[15px] font-medium px-0 md:px-6 pt-[60px] md:pt-[40px] pb-[100px]">
          Coded in{" "}
          <span className="underline underline-offset-2">
            Visual Studio Code{" "}
          </span>
          by yours truly. Built with
          <span className="underline underline-offset-2">
            {" "}
            Next.js
          </span> and{" "}
          <span className="underline underline-offset-2"> Tailwind CSS</span>,
          deployed with Vercel. All text is set in the Inter typeface.
        </p>
      </section>
    </div>
  );
};

export default Content;
