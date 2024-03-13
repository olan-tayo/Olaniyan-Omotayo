// import { useState } from "react";
import Header from "../../components/Header/Header";
import "../../app/globals.css";

import { Content } from "../Content";
const Home = ({ page }: Content) => {
  return (
    <div className="w-full relative pb-0 md:py-0 px-0 md:px-6 pt-[5vh] md:pt-[16vh]">
      <div className="w-full  ">
        <div>
          <div
            className={`${
              page === "about" &&
              "block md:hidden fixed top-0 w-[100vh] h-fit pt-6 pb-0  pl-0 pr-3  backdrop-blur about bg-primary "
            }`}
          >
            {page === "about" && <Header>About</Header>}
          </div>

          <div className={`${page === "about" ? "hidden md:block" : "block"} `}>
            <Header>About</Header>
          </div>

          <p className="text-base md:text-[15px] font-normal text-primary-50 leading-6 mb-6 md:mb-0">
            Hello, I am Omotayo but people call me {'"'}Shosho{'"'}. I am
            passionate about solving problems faced by the society using the
            best technologies. I love paying attention to details. One of the
            things that makes me excited is seeing ideas come to life.
            <br />
            <br />
            When I{"’"}m not writing code, I{"’"}m usually going to the gym,
            playing with{" "}
            <span className="luna text-[#555555] font-bold">Luna</span>, hanging
            out with my friends and family, or watching my favourite shows.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
