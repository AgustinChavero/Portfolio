import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function NameProfile() {
  return (
    <div>
      <div className="flex justify-center">
        <Link to="/home">
          <motion.h1
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.5 }}
            className="text-2xl sm:text-4xl lg:text-6xl font-bold mt-2 text-white p-10"
          >
            Agustin Daniel Chavero
          </motion.h1>
        </Link>
      </div>
    </div>
  );
}

export default NameProfile;
