"use client";

import React, { useEffect } from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const Home = () => {
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
    <div className="w-full pb-0 md:py-0 px-0 md:px-6 pt-[5vh] md:pt-[13vh]">
      <div className="w-full  ">
        <p className="text-sm font-bold text-primary-50 uppercase mb-6">
          ABOUT
        </p>
        <p className="text-base font-normal text-primary-50 leading-6 mb-6 md:mb-0">
          I have an expertise as a seasoned Frontend Engineer with the ability
          to design sophisticated and adaptable user interfaces. Proficient in
          contemporary web development technologies, I specialize in creating,
          enhancing, and delivering high-impact enterprise-level solutions.
          Thriving in dynamic and innovative settings, I have a strong aptitude
          for producing visually engaging web experiences and facilitating
          seamless collaboration within cross-functional teams.
          <br />
          <br />
          When I’m not writing code, I’m usually going to the gym, hanging out
          with my family, or watching my favourite shows
        </p>
      </div>
    </div>
  );
};

export default Home;
