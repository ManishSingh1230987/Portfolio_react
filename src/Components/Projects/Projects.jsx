import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Portfolio"
          main="This is a portfolio website created in React and used some component library with Tailwind CSS."
          sourceCodeUrl="https://github.com/yourusername/portfolio"  // Update with the actual GitHub URL
        />
        <ProjectCard
          title="React Job Portal"
          main="This is a job portal created in React and Tailwind, and a .json file is being used as a mock backend."
          sourceCodeUrl="https://github.com/ManishSingh1230987/react_job_portal.git"  // Update with the actual GitHub URL
        />
        <ProjectCard
          title="Gym Management System"
          main="This is a website created for gym owners to make management work for the owner better and easier."
          sourceCodeUrl="https://github.com/ManishSingh1230987/Gym_Management_System.git"  // Update with the actual GitHub URL
        />
      </div>
    </div>
  );
};

export default Projects;
