import React from "react";
import ExperienceCard from "./Cards/ExperienceCard";
import { experiences } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { styles } from "../styles";

const WorkExperience = () => {
  return (
    <>
      <motion.div>
        {/* <p
          className={`${styles.sectionSubText} text-center top-16 uppercase tracking-[8px] text-gray-200 text-3xl md:pb-12 `}
        >
          What I have done so far
        </p> */}
        <h2
          className={`uppercase tracking-[8px] top-16 text-gray-200 text-3xl pb-8 text-center md:pb-12`}
        >
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default WorkExperience;
