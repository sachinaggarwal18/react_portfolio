import React from "react";
import { motion } from "framer-motion";
import {AiFillAndroid} from "react-icons/ai";
import { FaFaceSmile } from "react-icons/fa6";
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import DeveloperModeSharpIcon from '@mui/icons-material/DeveloperModeSharp';


const Services = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndThree: {
      opacity: 0,
      y: "-100%",
    },

    four: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <div id="services">
      <h2>Services</h2>
      <section>
        <motion.div
          className="serviceBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <h3>1+</h3>
          <p>Years Experience</p>
        </motion.div>
        <motion.div
          className="serviceBox2"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
        >
          <DeveloperModeSharpIcon />
          <span>Web Development</span>
        </motion.div>
        <motion.div
          className="serviceBox3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            delay: 0.2,
          }}
        >
          <FaFaceSmile />
          {/* <span>App Development</span> */}
        </motion.div>
        <motion.div
          className="serviceBox4"
          whileInView={animations.whileInView}
          initial={animations.four}
        >
          <AllInclusiveIcon />
          <span>DevOps Engineer</span>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;