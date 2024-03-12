// import { useState } from "react";
import Header from "../../components/Header/Header";
import "../../app/globals.css";
const Home = () => {
  // const [isShowImage, setIsShowImage] = useState(false);

  return (
    <div className="w-full relative pb-0 md:py-0 px-0 md:px-6 pt-[5vh] md:pt-[16vh]">
      <div className="w-full  ">
        <Header>About</Header>
        <p className="text-xs md:text-[15px] font-normal text-primary-50 leading-6 mb-6 md:mb-0">
          Hello, I am Omotayo but people call me {'"'}Shosho{'"'}. I am
          passionate about solving problems faced by the society using the best
          technologies. I love paying attention to details. One of the things
          that makes me excited is seeing ideas come to life.
          <br />
          <br />
          When I{"’"}m not writing code, I{"’"}m usually going to the gym,
          playing with{" "}
          <span className="luna text-[#555555] font-bold">Luna</span> or hanging
          out with my friends and family, or watching my favourite shows.
        </p>
      </div>
    </div>
  );
};

export default Home;
