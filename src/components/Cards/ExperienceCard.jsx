import React from "react";
import { styles } from "../../styles";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "6px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full ">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[18px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[12px] font-semibold mt-1"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wide"
          >
            {point}
          </li>
        ))}
      </ul>
      <div className="flex space-x-2 my-2">
        {/* Render technologies/icons here */}
        {experience.icons.map((icon, index) => (
          <img
            key={`icon-${index}`}
            src={icon}
            alt={experience.alt}
            className="w-6 h-6 rounded-full ml-4"
          />
        ))}
      </div>
    </VerticalTimelineElement>
    // <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[600px] snap-center bg-[#36344328] p-6 hover:opacity-90 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden mt-8">
    //   <img
    //     src={experience.icon}
    //     alt={experience.company_name}
    //     className="w-20 h-20 rounded-full xl:w-[80px] xl:h-[80px] object-cover object-top"
    //   />
    //   <div className="px-0 md:px-10">
    //     <h4 className="text-1xl font-extralight">{experience.title}</h4>
    //     <p className="font-semibold text-1xl mt-1">{experience.company_name}</p>
    //     <div className="flex space-x-2 my-2">
    //       {/* Render technologies/icons here */}
    //       {experience.icons.map((icon, index) => (
    //         <img
    //           key={`icon-${index}`}
    //           src={icon}
    //           alt={experience.company_name}
    //           className="w-6 h-6 rounded-full"
    //         />
    //       ))}
    //     </div>
    //     <p className="uppercase my-3 text-gray-300">{experience.date}</p>
    //     <ul className="list-disc space-y-2 ml-5 mr-4 text-xs">
    //       {experience.points.map((point, index) => (
    //         <li key={`point-${index}`}>{point}</li>
    //       ))}
    //     </ul>
    //   </div>
    // </article>
  );
};

export default ExperienceCard;
