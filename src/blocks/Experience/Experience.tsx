import Header from "@/components/Header/Header";
import React from "react";
import { Content } from "../Content";

const Experience = ({ page }: Content) => {
  const experiences = [
    {
      date: {
        from: "2021",
        to: "present",
      },
      role: "Front End Engineer",
      company: "Crop2cash",
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
    {
      date: {
        from: "JAN 2021",
        to: "APR 2021",
      },
      role: "Front End Engineer",
      company: "AudalLabs",
      summary:
        "Collaborated with stakeholders during development processes to confirm creative proposals and design best practices.Researched emerging web technologies such as Astro and trends for possible incorporation into sites",
      skills: [
        "HTML/CSS/SCSS",
        "Tailwind css",
        "React",
        "Gatsby",
        "Wordpress",
        "Teleport",
        "Javascript",
      ],
    },
    {
      date: {
        from: " 2021",
        to: " 2022",
      },
      role: "Software Engineer",
      company: "Freelance",
      summary:
        "Built a front-end website prelaunch page for a fruit venturing system. Demonstrated excellence in creating visually compelling, user-centric webapp which aligns perfectly with Sterling Bank's Torrista vision of booking tours. Designed interface for a Canvas application for drawing and designs for enhanced collaboration, with HTML, CSS, and Bootstrap",
      skills: [
        "HTML/CSS/SCSS",
        "Tailwind css",
        "Bootstrap",
        "React",
        "Javascript",
        "Typescript",
        "Next js",
      ],
    },
  ];

  return (
    <div>
      {" "}
      <div className="w-full pt-[56px] ">
        <div
          className={`${
            page === "experience" &&
            "block md:hidden fixed top-0 w-[100vh] h-fit pt-6 pb-0  pl-0 pr-3  backdrop-blur about bg-primary"
          }`}
        >
          {page === "experience" && <Header>EXPERIENCE</Header>}
        </div>

        <div
          className={`${page === "experience" ? "hidden md:block" : "block"} `}
        >
          <Header style="mb-6 px-0 md:px-6">EXPERIENCE</Header>
        </div>

        <div>
          {experiences?.map((experience, index) => {
            return (
              <div
                key={index}
                className="mb-[60px] md:mb-[48px]  p-0
                 md:p-6 md:hover:rounded-lg transition-all duration-300"
              >
                <div className="flex gap-2 md:gap-4 items-center mb-6">
                  <p className="text-base md:text-[15px] font-normal text-primary-100 uppercase">
                    {experience?.date?.from} - {experience?.date?.to}
                  </p>
                  <div className="flex items-center gap-1 cursor-pointer ">
                    <p className="text-base md:text-[15px] font-medium text-primary-50">
                      {experience?.role}, {experience?.company}
                    </p>
                    {/* <div>
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
                    </div> */}
                  </div>
                </div>
                <p className="text-base md:text-[15px] font-normal leading-6 text-primary-50  mb-6">
                  {experience?.summary}
                </p>
                {/* SKILLS */}
                <div className="flex flex-wrap gap-2 items-center">
                  {experience?.skills?.map((skill, index) => {
                    return (
                      <div
                        key={index}
                        className="rounded-2xl bg-secondary-50 flex justify-center w-fit px-4 py-1 text-secondary"
                      >
                        <p className="text-base md:text-[15px] font-semibold">
                          {skill}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
