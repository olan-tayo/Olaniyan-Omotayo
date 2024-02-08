"use client";

import React, { useEffect, useState } from "react";
import { database } from "../../services/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { ProjectsType } from "@/types/projects";
import althemis from "../../../public/althemis.jpeg";
import ModalComponent from "../../components/Modals/modal";
import Image from "next/image";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const dbInstance = collection(database, "projects");

const Projects = () => {
  const [projects, setProjects] = useState<ProjectsType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleGetProjects = async () => {
    let res = await getDocs(dbInstance);
    let newData: ProjectsType[] = [];
    res.forEach((doc) => {
      let data = doc.data() as ProjectsType;
      newData.push(data);
    });
    setProjects((prevState: ProjectsType[]) => [...prevState, ...newData]);
  };

  const handleOpenModal = (index: number) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  useEffect(() => {
    handleGetProjects();
  }, []);

  return (
    <div>
      <div className="w-full pt-[56px] ">
        <p className="text-[15px] font-bold text-primary-50 uppercase mb-6 px-0 md:px-6">
          PROJECTS
        </p>

        <div>
          {projects?.map((project: ProjectsType, index: number) => {
            return (
              <div
                key={index}
                onClick={() => setIsModalOpen(true)}
                className="block lg:flex gap-4 w-full pb-[70px] md:pb-6  md:p-6 md:hover:bg-[#202531] md:hover:rounded-lg transition-all duration-300  cursor-pointer "
              >
                <div className="h-[120px] lg:h-[63px] w-[80%] lg:w-[120px] rounded-[2px] border-[0.5px] border-secondary border-[dashed] mb-4 lg:mb-0">
                  <img
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
                    {project?.skills?.map((skill: string, index: number) => {
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
              // <Link key={index} href="/project/1">
              // </Link>
            );
          })}
        </div>

        {/* <Link href="/resume">
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
        </Link> */}

        <ModalComponent
          title=""
          subtitle=""
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          <div className="text-primary">
            <p className="text-base md:text-[20px] font-bold  uppercase mb-6 px-0 md:px-6">
              ALTHEMIS
            </p>

            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              interval={3000}
              showArrows={false}
              showStatus={false}
              stopOnHover={false}
              transitionTime={1000}
              onClickItem={() =>
                window.open("https://www.althemis.io/", "_blank")
              }
            >
              <div className="my-9 md:my-9 p-1 md:p-4 w-full cursor-pointer">
                <Image src={althemis} alt="althemis" className="" />
              </div>
              <div className="my-9 md:my-9 p-1 md:p-4 w-full cursor-pointer">
                <Image src={althemis} alt="althemis" className="" />
              </div>
              <div className="my-9 md:my-9 p-1 md:p-4 w-full cursor-pointer">
                <Image src={althemis} alt="althemis" className="" />
              </div>
              <div className="my-9 md:my-9 p-1 md:p-4 w-full cursor-pointer">
                <Image src={althemis} alt="althemis" className="" />
              </div>
              <div className="my-9 md:my-9 p-1 md:p-4 w-full cursor-pointer">
                <Image src={althemis} alt="althemis" className="" />
              </div>
              <div className="my-9 md:my-9 p-1 md:p-4 w-full cursor-pointer">
                <Image src={althemis} alt="althemis" className="" />
              </div>
            </Carousel>
          </div>
        </ModalComponent>
      </div>
    </div>
  );
};

export default Projects;
