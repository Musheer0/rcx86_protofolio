import React, { useEffect, useRef } from "react";

const Home = () => {
  return (
    <section className="w-full  rounded-lg p-5" id="about">
      <div className="title">
        <h1 className="text-[12vw] lg:text-[7vw] leading-none relative w-fit  header-username">
          Mr.Rc
        </h1>
      </div>
      <div  className="about py-3 text-lg w-full  lg:w-2/3">
        <p className="">
          Passionate High School Student with a keen interest in Low-Level
          Computer Science Research, Design, and Programming. Currently building
          <span className="bg-pink-600  text-white font-bold px-1">
            <a target="_blank" href="https://zathura-app.github.io/"> Zathura </a>
          </span>
          and creating content at
          <span className="bg-green-600 mx-1 font-bold text-white px-1 ">
            <a target="_blank" href="https://guidedhacking.com/"> GuidedHacking </a>
          </span>
          .
        </p>
      </div>
    </section>
  );
};

export default Home;
