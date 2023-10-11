import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { projects1 } from "../constants";
import youtube from "../assets/yticon.png";
const ProjectsCard1 = ({ projects }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
    >
      <Tilt
        options={{
          max: 25,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#151030] p-8 rounded-xl sm:w-[460px] w-full border-gray-100 border-opacity-5 border-1"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={projects.image}
            alt={projects.title}
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              className="black-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open(projects.source_code, "_blank")}
            >
              <img
                src={youtube}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-3 ">
          <h3 className=" mt-2 font-semibold text-base">{projects.title}</h3>
          <p className="mt-2 font-light text-sm">{projects.description}</p>
        </div>
        <div className="flex space-x-2 my-2">
          {/* Render technologies/icons here */}
          {projects.icons.map((icon, index) => (
            <img
              key={`icons-${index}`}
              src={icon}
              className="w-6 h-6 rounded-full mt-2 ml-2 object-contain"
            />
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects1 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center mx-auto   md:text-left xl:flex-col  max-w-[2000px]
xl:px-10 min-h-screen justify-center items-center xl:space-y-0 md:pb-12"
    >
      <h3 className="absolute top-32 uppercase tracking-[8px] text-gray-200 text-3xl md:pb-12">
        My 3D Projects.
      </h3>
      <h3 className="absolute pt-12 top-36 uppercase tracking-[3px] text-gray-200 text-sm">
        Design Engineer
      </h3>
      <p className="relative text-base top-40 sm:pl-0 md:pl-24 md:pr-24 max-w-6xl p-16 text-gray-200 ">
        I have worked as a Design Engineer in the field of 3D Printing, CAD/CAE
        and Robotics, and have designed and developed various 3D models and
        prototypes.
      </p>
      <div className="mt-20 flex flex-wrap gap-8 justify-center pt-40 p-5">
        {projects1.map((project, index) => (
          <ProjectsCard1 key={`projects-${index}`} projects={project} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects1;
