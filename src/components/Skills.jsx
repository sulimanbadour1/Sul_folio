import React from "react";
import { motion } from "framer-motion";
import { skills } from "../constants";
import SkillsCard from "./Cards/SkillsCard";
const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center mx-auto   md:text-left xl:flex-row max-w-[2000px]
        xl:px-10 min-h-screen justify-center items-center xl:space-y-0 md:pb-12"
    >
      <h3 className=" text-center absolute top-16 uppercase tracking-[8px] text-gray-200 text-3xl md:pb-12">
        Tech Stack
      </h3>
      <h3 className="absolute pt-12 top-16 uppercase tracking-[3px] text-gray-200 text-sm">
        That's what I'm good at <span className="text-[#5d509f]">.</span>
      </h3>
      <div className="m-8 grid grid-cols-6 gap-5 ">
        {skills.map((skill, index) => (
          <SkillsCard key={`skills-${index}`} skills={skill} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
