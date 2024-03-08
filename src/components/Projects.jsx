import { motion } from "framer-motion";
import { projects } from "../constants";
import ProjectsCard from "./Cards/ProjectsCard";
const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center mx-auto   md:text-left xl:flex-col  max-w-[2000px]
xl:px-10 min-h-screen justify-center items-center xl:space-y-0 md:pb-12"
    >
      <h3 className="absolute top-32 uppercase tracking-[8px] text-gray-200 text-3xl md:pb-12">
        Projects.
      </h3>

      <h3 className="absolute pt-12 top-36 uppercase tracking-[3px] text-gray-200 text-sm">
        My work
      </h3>
      <p className="relative text-base top-40 sm:pl-0 md:pl-20 max-w-6xl p-16 text-gray-200 ">
        I have worked on a variety of projects, ranging from 3d modelling to
        UI/UX and software development. Here are a few of my favourites. Each
        project is breifly described and links to the source code are provided.
        It reflects my passion for learning new technologies, and my love for
        building things.
      </p>
      <div className="mt-20 flex flex-wrap gap-7 justify-center pt-40">
        {projects.map((project, index) => (
          <ProjectsCard key={`projects-${index}`} projects={project} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
