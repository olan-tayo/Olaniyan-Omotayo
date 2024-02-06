"use-client";

import Image from "next/image";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import althemis from "../../../public/althemis.jpeg";
import "../../app/globals.css";

const ProjectInfo = () => {
  return (
    <div className="spacings pt-[50px]  pb-[100px] bg-primary">
      <div className="text-primary-50 flex items-center flex-col cursor-pointer">
        <p className="text-base md:text-[30px] font-bold  uppercase mb-3 px-0 md:px-6">
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
          onClickItem={() => window.open("https://www.althemis.io/", "_blank")}
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
    </div>
  );
};

export default ProjectInfo;
