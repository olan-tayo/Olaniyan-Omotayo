import Sidebar from "@/blocks/Sidebar/Sidebar";
import { Metadata } from "next";
import React from "react";
import Home from "../blocks/Home/Home";
import Experience from "@/blocks/Experience/Experience";
import Projects from "@/blocks/Projects/Projects";

export const metadata: Metadata = {
  title: "Olaniyan Omotayo",
  description: "Olaniyan Omotayo's Porfolio",
};

const Page = () => {
  return (
    <div className="h-screen overflow-auto    md:h-[none]  bg-primary spacings">
      <div className=" block md:flex gap-0  md:gap-[26px] lg:gap-[56px] spacings">
        <div className="w-full md:w-[45%] h-full md:h-[87vh] text-primary-50">
          <Sidebar />
        </div>
        <div className="w-full md:w-[55%] h-full md:h-[100vh] overflow-x-auto text-primary-50">
          <section className="w-full" id="about">
            <Home />
          </section>

          <section className="w-full" id="experience">
            <Experience />
          </section>

          <section className="w-full" id="projects">
            <Projects />
          </section>

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
              <span className="underline underline-offset-2">
                {" "}
                Tailwind CSS
              </span>
              , deployed with Vercel. All text is set in the Inter typeface.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Page;
