import Content from "@/blocks/Content";
import Sidebar from "@/blocks/Sidebar/Sidebar";
import All from "@/blocks/all";
import { Metadata } from "next";
import React, { useEffect, useState } from "react";

export const metadata: Metadata = {
  title: "Olaniyan Omotayo",
  description: "Olaniyan Omotayo's Porfolio",
};

const Page = () => {
  return <All />;
};

export default Page;
