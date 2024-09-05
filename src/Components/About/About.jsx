import React from "react";
import AboutImg from "../../assets/employee_working_cartoon-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                As a frontend developer,My expertise lies in using HTML, CSS, and JavaScript to bring designs to life,
                ensuring a seamless and responsive experience across 
                 all devices. I'm proficient in modern tools and frameworks like React, Tailwind CSS, and Vite, 
                which I use to build efficient, optimized web applications.
                I take pride in creating user-centric designs that not only look great but also enhance the overall user experience.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Devops
                </h1>
                <p className="text-sm md:text-md leading-tight">
                 Having hands on experience with some of the devops tools which includes docker,kubernetes and in version control it includes 
                 git and github.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                As a backend developer,My expertise includes designing and maintaining databases, implementing APIs, and ensuring secure and reliable 
                communication between the frontend and backend systems. I work Node.js and I am skilled in using databases such as MySQL,  MongoDB.
                I am committed to writing clean, maintainable code that supports seamless performance and scalability, ensuring that the backend infrastructure can handle the demands of
                 modern web applications.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
