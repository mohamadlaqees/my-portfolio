import React from "react";
import colorSharp from "../img/color-sharp.png";
import html from "../img/html.png";
import css from "../img/css.png";
import java from "../img/java.png";
import tailwind from "../img/tailwind.png";
import react from "../img/react.png";
import typescript from "../img/typescript.svg";
import Skills from "./skills";

function SectionTwo() {
  const skills = [
    {
      path: html,
      title: "HTML",
    },
    {
      path: css,
      title: "CSS",
    },
    {
      path: java,
      title: "Java Script",
    },
    {
      path: tailwind,
      title: "Tailwind css",
    },
    {
      path: react,
      title: "React JS",
    },
    {
      path: typescript,
      title: "Type script",
    },
  ];
  return (
    <div className="skills-container" id="skills">
      <div className="skills">
        <div className="text-white text-5xl font-bold tracking-wide text-center mt-20">
          Skills
          <div className="text-text mt-10 text-lg font-bold  tracking-wide text-center">
            Here is my skills
          </div>
          <div className="mt-10">
            <swiper-container
              slides-per-view="1"
              speed="500"
              css-mode="true"
              navigation="true"
              pagination="true"
            >
              <Skills data={skills} />
            </swiper-container>
          </div>
        </div>

        <div></div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="imag" />
    </div>
  );
}

export default SectionTwo;
