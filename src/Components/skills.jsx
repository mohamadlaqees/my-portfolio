import React from "react";
function Skills({ data }) {
  return data.map((e) => {
    return (
      <swiper-slide>
        <div className="w-fit mr-auto ml-auto ">
          <div className="w-56 h-56 bg-white rounded-full relative">
            <img className="w-32 h-32 absolute top-1/4 left-12" src={e.path} alt="" />
          </div>
          <span className=" block  mb-10 mt-10  text-white text-lg font-bold tracking-wide ">
            {e.title}
          </span>
        </div>
      </swiper-slide>
    );
  });
}

export default Skills;
