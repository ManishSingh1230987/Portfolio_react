import React from "react";
import avatarImg from "../../assets/3d-cartoon-portrait-person-practicing-law-profession-removebg-preview.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1><br />

        <p className="text-sm md:text-4xl font-normal flex leading-normal tracking-tighter">Software Engineer</p> <br />
        <p className="text-sm md:text-2xl tracking-tight ">
        I am a final year student passionate about leveraging
        emerging web technologies to create intuitive and impactful
        digital experiences that meet user needs . I am eager to
        contribute to projects that leverage front-end and back-end
        technologies such as HTML, CSS, JavaScript, React.js ,
        databases and many more. Having good hold over problem
        solving in Data Structures and Algorithm.
        </p>
       <a href="#Footer"> <button id="Contact" className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button>
        </a>
      </div>
      <div>
        <img className="" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
