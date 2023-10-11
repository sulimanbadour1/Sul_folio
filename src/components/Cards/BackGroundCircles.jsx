import React from "react";
import { motion } from "framer-motion";
const BackGroundCircles = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 0.1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5 }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border  border-[#fff] rounded-full h-[100px] w-[100px] mt-52  animate-ping" />
      <div className="absolute border  border-[#fff] rounded-full h-[300px] w-[300px] mt-52  animate-ping" />
      <div className="absolute border  border-[#fff] rounded-full h-[500px] w-[500px] mt-52  animate-ping" />
      <div
        className="rounded-full border border-[#ecebed] opacity-20 h-[200px] w-[200px] absolute mt-52
      animate-pulse"
      />
      <div className="absolute border  border-[#fff] rounded-full h-[500px] w-[500px] mt-52  animate-ping" />
    </motion.div>
  );
};

export default BackGroundCircles;
