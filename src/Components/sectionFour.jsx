import React from "react";
import contact from "../img/contact-img.svg";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function SectionFour() {
  const { ref, inView } = useInView({
    threshold: 0.2,
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
  },[inView]);
  return (
    <div ref={ref} className="contact-container" id="contact">
      <motion.div className=" contact-img" animate={animation}>
        <img src={contact} alt="" />
      </motion.div>
      <motion.div animate={animation}>
        <div className="text-5xl text-white font-bold">Get In Touch</div>
        <div className="text-center  mt-48 bg-white p-10 rounded-md h-60">
          <div className=" text-2xl mt-10 text-black tracking-normal font-bold">
            mohamadlk24@gmail.com
          </div>
          <div className="mt-10">
            <a
              href="mailto: mohamadlk24@gmail.com"
              className="pt-2 pb-2 pl-8 pr-8 rounded-md bg-cursor text-xl text-white "
            >
              send
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default SectionFour;
