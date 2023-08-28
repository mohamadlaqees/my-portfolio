import React from "react";

function Projects({ data, clas }) {
  return data.map((e) => (
    <div className="w-96 h-64">
      <div className={clas}>
        <img src={e.path} alt="" className="w-96 h-64 rounded-xl " />
      </div>
      <div className="text-white mt-4 text-lg text-center font-bold relative transition-all duration-500 hover:text-cursor tracking-wide">
        <a href={e.route}>{e.name}</a>
      </div>
    </div>
  ));
}

export default Projects;
