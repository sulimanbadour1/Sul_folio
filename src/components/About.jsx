import React from "react";
import { motion } from "framer-motion";
import Card from "./Cards/Card/Card";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row
  max-w-6xl  px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-12 uppercase tracking-[8px] text-gray-200 text-3xl p-8">
        About Me
      </h3>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{
          duration: 1.2,
        }}
        className="md:mb-0 flex-shrink-0 w-50 h-50 rounded-full object-cover
      shadow-2xl pt-10 -pb-12 top-50"
      >
        <Card />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: false }}
        className="space-y-10 px-0 "
      >
        <h4 className="text-3xl font-semibold sm:pl-0 md:pl-20">
          A <span className="underline decoration-[#6b5ec9]">Little</span> about
          me.
        </h4>
        <p className="text-base sm:pl-0 md:pl-20">
          I'm a front-end developer based in Prague, Czechia.
          <br />I have serious passion for UI effects, animations and creating
          intuitive, dynamic user experiences.
          <br /> Well-organised person, problem solver, independent employee
          with high attention to detail.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
