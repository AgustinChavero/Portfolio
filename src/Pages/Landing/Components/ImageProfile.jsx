import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Profile from "../../../Assets/Profile/Profile.jpg";

function ImageProfile() {
  return (
    <div>
      <Link to="/home">
        <motion.div
          className="rounded-full hover:opacity-100"
          animate={{
            boxShadow: [
              "20px 0px 30px rgb(239 68 68)",
              "20px 0px 30px rgb(255 255 255)",
              "20px 0px 30px rgb(239 68 68)",
              "20px 0px 30px rgb(255 255 255)",
              "20px 0px 30px rgb(239 68 68)",
              "20px 0px 30px rgb(255 255 255)",
              "20px 0px 30px rgb(239 68 68)",
            ],
            border: ["2px solid white"],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            times: [0, 1.5, 3, 4.5, 6, 7.5, 9, 10.5],
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
        >
          <img
            src={Profile}
            alt="agustin_chavero"
            className="w-96 rounded-full hover:scale-90 transition-all"
            title="Haga click aqui"
          />
        </motion.div>
        {/* 
        <div className="flex justify-center absolute mx-48">
          <button className="bg-neutral-800 hover:bg-black hover:border-white text-white border-2 border-black absolute rounded-md p-1 transition-all">
            Ingrese
          </button>
        </div> */}
      </Link>
    </div>
  );
}

export default ImageProfile;
