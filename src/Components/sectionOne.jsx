import React, { useEffect } from "react";
import { useState } from "react";
import headerImg from "../img/header-img.svg";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {  motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function SectionOne() {
  const [text] = useTypewriter({
    words: ["Web developer", "React js developer"],
    typeSpeed: 150,
    deleteSpeed: 50,
    loop: 0,
  });

  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    } else {
      animation.start({
        x: "-100vw",
      });
    }
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [inView]);

  return (
    <div className="secOne">
      <div
        className={`${
          scrolled
            ? "w-full flex justify-between pt-2 pb-3  pl-10 pr-10 fixed z-50 transition-all duration-500 bg-scroll  "
            : "w-full flex justify-between  pt-8 pl-16 pr-16 fixed z-50 transition-all duration-500 "
        } `}
      >
        <div className="w-fit min-w-fit h-8 text-2xl  lg:text-4xl rounded-sm font-bold text-white ">
          MY PORTFOLIO
        </div>

        <div className="hidden xl:flex ">
          <div className="flex items-center  gap-12 mr-20 text-xl transition-all ">
            <span className="text-links hover:text-white">
              <a href="#home">Home</a>
            </span>
            <span className="text-links hover:text-white">
              <a href="#skills">Skills</a>
            </span>
            <span className="text-links hover:text-white">
              <a href="#projects">Projects</a>
            </span>
          </div>

          <div>
            <div className="badge ml-48">
              <a
                href="https://www.linkedin.com/in/mohamad-lakees-4b2869238/"
                target="_blank"
                rel="noreferrer"
              >
                in
              </a>
            </div>
          </div>

          <a href="#contact" className="contact ">
            Contact me
          </a>
        </div>

        <div
          className={`${
            scrolled
              ? "block text-white text-2xl  xl:hidden z-10 cursor-pointer relative"
              : "block text-white text-2xl  xl:hidden z-10 cursor-pointer relative"
          }`}
          onClick={() => setShow(!show)}
        >
          <i class="fa fa-solid fa-bars"></i>
          <div
            className={`${
              show ? "  h-72 w-52 p-6" : " p-0 h-0 w-0 "
            } absolute top-7 right-4  rounded-md bg-black bg-opacity-60  transition-all duration-500 overflow-hidden  `}
          >
            <div className=" transition-all ">
              <span className="text-links text-lg block mb-4  hover:text-white">
                <a href="#home">Home</a>
              </span>
              <span className="text-links text-lg block mb-4 hover:text-white">
                <a href="#skills">Skills</a>
              </span>
              <span className="text-links text-lg block mb-4   hover:text-white">
                <a href="#projects">Projects</a>
              </span>
            </div>

            <div>
              <div className="badge mb-4 ">
                <a
                  href="https://www.linkedin.com/in/mohamad-lakees-4b2869238/"
                  target="_blank"
                  rel="noreferrer"
                >
                  in
                </a>
              </div>
            </div>

            <div className=" menu  text-center">
              <div className="p-2 w-40 ">
                <a href="#contact">Contact me</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={ref} className=" md:flex md:justify-between" id="home">
        <motion.div className="welcome-container" animate={animation}>
          <span className="welcome">Welcome to my portfolio</span>
       
          <div className="text-text mt-10 text-lg font-bold w-text tracking-wide">
            This is my personal portfolio that contain all my skills , projects
            , training templates and contact informations
          </div>
        </motion.div>
        <motion.div className="mt-80 md:mt-40" animate={animation}>
          <img src={headerImg} alt="" />
        </motion.div>
      </div>
    </div>
  );
}

export default SectionOne;
