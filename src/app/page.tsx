import Content from "@/blocks/Content";
import Sidebar from "@/blocks/Sidebar/Sidebar";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Olaniyan Omotayo",
  description: "Olaniyan Omotayo's Porfolio",
};

const Page = () => {
  return (
    <div className=" bg-primary spacings">
      <div className=" block md:flex gap-0  md:gap-[26px] lg:gap-[56px] spacings">
        <Sidebar />

        <Content />
      </div>
    </div>
  );
};

export default Page;
