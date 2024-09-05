import React from "react";
import bannerImg from "../../assets/photo-C8q0KQHG.webp";
import gymImg from "../../assets/ambitious-studio-rick-barrett-Z__WwJxWP0g-unsplash.jpg";
import projectImg from "../../assets/DALL·E 2024-09-05 01.09.11 - A background image with a modern, minimalistic design. The background should be a smooth gradient, transitioning from deep blue at the top to light te.webp";

const ProjectCard = ({ title, main, sourceCodeUrl }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <img className="p-4" src={projectImg} alt="" />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        <a
          href={sourceCodeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <button className="w-full text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] overflow-hidden align-middle">
            Source Code
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
