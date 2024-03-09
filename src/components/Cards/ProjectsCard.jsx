/* eslint-disable react/prop-types */

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
// import { projects } from "../../constants";
import github from "../../assets/github.png";
import { Build, Live, design } from "../../assets";
const ProjectsCard = ({ projects }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
    >
      <Tilt
        options={{
          max: 10,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#140f32] p-8 rounded-2xl sm:w-[360px] w-full border-gray-100 border-opacity-5 border-1"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={projects.image}
            alt={projects.title}
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-1">
            {/* // Source code URL */}
            {projects.source_code && (
              <div
                className="black-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer"
                onClick={() => window.open(projects.source_code, "_blank")}
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}

            {/* // Live photo UrL */}
            {projects.live_url && (
              <div
                className="black-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer"
                onClick={() => window.open(projects.live_url, "_blank")}
              >
                <img
                  src={Live}
                  alt="Live Logo"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}

            {projects.in_development && (
              <div className="black-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer">
                <img
                  src={Build}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}
            {projects.designUrl && (
              <div
                className="black-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer"
                onClick={() => window.open(projects.designUrl, "_blank")}
              >
                <img
                  src={design}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}
          </div>
        </div>
        <div className="mt-3 ">
          <h3 className=" mt-2 font-semibold text-base">{projects.title}</h3>
          <p className="mt-2 font-light text-sm">{projects.description}</p>
          <div className="flex space-x-2 my-2">
            {/* Render technologies/icons here */}
            {projects.icons.map((icon, index) => (
              <img
                key={`icon-${index}`}
                src={icon}
                alt={projects.alt}
                className="w-6 h-6 rounded-full mt-2 ml-2 object-contain"
              />
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectsCard;
