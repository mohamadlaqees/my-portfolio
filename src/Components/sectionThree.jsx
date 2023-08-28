import React, { useState } from "react";
import Projects from "./projects";
import temp1 from "../img/tem1.png";
import temp2 from "../img/tem2.png";
import temp3 from "../img/tem3.png";
import pms from "../img/pms.png";
import store from "../img/store.png";

function SectionThree() {
  const templates = [
    {
      path: temp1,
      route: "https://mohamadlaqees.github.io/template-one/",
      name: "Template 1",
    },
    {
      path: temp2,
      route: "https://mohamadlaqees.github.io/template-2/",
      name: "Template 2",
    },
    {
      path: temp3,
      route: "https://mohamadlaqees.github.io/template-3/",
      name: "Template 3",
    },
  ];
  const projects = [
    {
      path: pms,
      route: "",
      name: "Pharmacy managment system",
    },
    {
      path: store,
      route: "",
      name: "Online pharmacy store",
    },
  ];
  const [tShow, setTShow] = useState(true);
  const [rShow, setRShow] = useState(false);
  return (
    <div className="w-full  bg-black pb-20" id="projects">
      <div className="text-white text-5xl font-bold tracking-wide text-center pt-20 ">
        Projects
        <div className="text-text mt-10 text-lg font-bold  tracking-wide text-center">
          Here is my all react projects and all training templates
        </div>
      </div>
      <div className="flex justify-center text-white text-xl font-bold  mt-4">
        <button
          className={`${tShow ? "tab1 active" : "tab1"} `}
          onClick={() => {
            setTShow(true);
            setRShow(false);
          }}
        >
          Training projects
        </button>
        <button
          className={`${rShow ? "tab2 active" : "tab2"}`}
          onClick={() => {
            setRShow(true);
            setTShow(false);
          }}
        >
          React projects
        </button>
      </div>
      <div
        className={` ${
          tShow
            ? "mt-4 grid grid-flow-row justify-center  xl:grid xl:grid-cols-3   gap-14 pt-16 pb-16 pl-20 pr-20 transition-all duration-500 "
            : "hidden"
        }`}
      >
        <Projects data={templates} clas="projects-overlay" />
      </div>{" "}
      <div
        className={`${
          rShow
            ? " mt-4 grid grid-flow-row  justify-center xl:grid xl:grid-cols-2 xl:ml-52  gap-14  pt-16 pb-16  transition-all duration-500 "
            : "hidden"
        }`}
      >
        <Projects data={projects} clas="projects-overlay2" />
      </div>{" "}
    </div>
  );
}

export default SectionThree;
