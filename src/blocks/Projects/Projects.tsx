"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Althemis from "../../../public/althemis.jpeg";
import Torrista from "../../../public/torrista.jpeg";
import Kamoky from "../../../public/kamoky.jpeg";
import Aretehub from "../../../public/arete.jpeg";

import {
  // Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const Projects = () => {
  const projects = [
    {
      img: Althemis,
      name: "Althemis",

      summary:
        "Successfully optimized data presentation processes for the Sharp app, enhancing efficiency for large datasets and thereby improving user experience for thousands of agribusinesses.",
      skills: [
        "React",
        "Javascript",
        "Typescript",
        "Jest",
        "Tailwind css",
        "Material UI",
      ],
    },
    {
      img: Torrista,
      name: "Torrista",

      summary:
        "Successfully optimized data presentation processes for the Sharp app, enhancing efficiency for large datasets and thereby improving user experience for thousands of agribusinesses.",
      skills: [
        "React",
        "Javascript",
        "Typescript",
        "Jest",
        "Tailwind css",
        "Material UI",
      ],
    },
    {
      img: Kamoky,
      name: "Kamoky",

      summary:
        "Successfully optimized data presentation processes for the Sharp app, enhancing efficiency for large datasets and thereby improving user experience for thousands of agribusinesses.",
      skills: [
        "React",
        "Javascript",
        "Typescript",
        "Jest",
        "Tailwind css",
        "Material UI",
      ],
    },
    {
      img: Aretehub,
      name: "Aretehub",

      summary:
        "Successfully optimized data presentation processes for the Sharp app, enhancing efficiency for large datasets and thereby improving user experience for thousands of agribusinesses. Led project planning, provided regular updates to management, and developed a live web application.  Troubleshooted technical issues and resolved problems within a reasonable timeframe, ensuring minimal disruption to the platform's users.",
      skills: [
        "React",
        "Javascript",
        "Typescript",
        "Jest",
        "Tailwind css",
        "Material UI",
      ],
    },
  ];

  return (
    <div>
      <div className="w-full pt-[56px] ">
        <p className="text-[15px] font-bold text-primary-50 uppercase mb-6 px-0 md:px-6">
          PROJECTS
        </p>

        <div>
          {projects?.map((project, index) => {
            return (
              <div
                key={index}
                className="block lg:flex gap-4 w-full pb-[70px] md:pb-6  md:p-6 md:hover:bg-[#202531] md:hover:rounded-lg transition-all duration-300  cursor-pointer "
              >
                <div className="h-[120px] lg:h-[63px] w-[80%] lg:w-[120px] rounded-[2px] border-[0.5px] border-secondary border-[dashed] mb-4 lg:mb-0">
                  <Image
                    alt={project?.name}
                    src={project?.img}
                    className="h-[120px] lg:h-[63px] w-[100%]"
                  />
                </div>
                <div className="">
                  <div className="flex gap-4 items-center mb-2">
                    <div className="flex items-center gap-1">
                      <p className="text-[15px] font-medium text-primary-50">
                        {project?.name}
                      </p>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M7 17L17 7"
                            stroke="#FAF6F6"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7 7H17V17"
                            stroke="#FAF6F6"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-[15px] font-normal leading-6 text-primary-50  mb-6 max-w-[537px]">
                    {project?.summary}
                  </p>
                  {/* SKILLS */}
                  <div className="flex flex-wrap gap-2 items-center">
                    {project?.skills?.map((skill, index) => {
                      return (
                        <div
                          key={index}
                          className="rounded-2xl bg-secondary-50 flex justify-center w-fit px-4 py-1 text-secondary"
                        >
                          <p className="text-[15px] font-semibold">{skill}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <Link href="/resume">
          <div className="flex items-center gap-1 cursor-pointer px-0  md:px-6 mt-[15px] md:mt-[36px]">
            <p className="text-[15px] font-medium text-primary-50">
              View Project Library
            </p>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M7 17L17 7"
                  stroke="#FAF6F6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 7H17V17"
                  stroke="#FAF6F6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
