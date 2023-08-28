import React from "react";
import contact from "../img/contact-img.svg";
function SectionFour() {
  return (
    <div className="contact-container" id="contact">
      <div className=" contact-img">
        <img src={contact} alt="" />
      </div>
      <div>
        <div className="text-5xl text-white font-bold">Get In Touch</div>
        <div className="text-center  mt-48 bg-white p-10 rounded-md h-60">
          <div className=" text-2xl mt-10 text-black tracking-normal font-bold">
            mohamadlk24@gmail.com
          </div>
          <div className="mt-10">
            <a
              href = "mailto: mohamadlk24@gmail.com"
              className="pt-2 pb-2 pl-8 pr-8 rounded-md bg-cursor text-xl text-white "
            >
              send
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
