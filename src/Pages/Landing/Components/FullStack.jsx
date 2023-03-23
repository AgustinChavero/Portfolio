import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Fullstack from "../../../Assets/fullstacklogo.png";

function FullStack() {
  return (
    <div className="flex justify-center rounded-full">
      <motion.div
        initial={{ x: +1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5 }}
        className="px-5"
      >
        <img
          src={Fullstack}
          alt="fullstack"
          className="w-96 rounded-full mt-5"
        />
      </motion.div>
    </div>
  );
}

export default FullStack;
