"use client";

import React, { useEffect } from "react";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Experience from "./Experience/Experience";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const Content = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <div className="w-full md:w-[55%] overflow-x-auto text-primary-50">
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
        <p className="text-primary-50 text-base font-medium px-0 md:px-6 pt-[60px] md:pt-[40px] pb-[100px]">
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
        <p onClick={scrollToTop}>Scroll to top</p>
      </section>
    </div>
  );
};

export default Content;
