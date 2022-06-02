import React from "react";
import Hero from "../components/Sections/Hero";
import { motion } from "framer-motion";
const Landing = () => {
  return (
    <motion.div  initial={{opacity:0}} animate={{opacity:1}}>
      <Hero />
    </motion.div>
  );
};

export default Landing;
