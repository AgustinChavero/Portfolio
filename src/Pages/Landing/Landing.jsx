import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Profile from "../../Assets/Profile/Profile.jpg";
import Fullstack from "../../Assets/fullstacklogo.png";

import WhatsApp from "../../Assets/Icons/whatsapp.svg";
import Gmail from "../../Assets/Icons/gmail.svg";

function Landing() {
  return (
    <div className="overflow-hidden pt-10">
      <div className="flex justify-center rounded-full px-5">
        <Link to="/home">
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <img
              src={Profile}
              alt="agustin_chavero"
              className="w-96 rounded-full shadow-lg shadow-black"
            />
          </motion.div>
        </Link>
      </div>
      <div className="border-black border-b-2 flex justify-center">
        <motion.h1
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5 }}
          className="text-2xl sm:text-4xl lg:text-6xl font-bold mt-2 text-slate-700 p-10"
        >
          Agustin Daniel Chavero
        </motion.h1>
      </div>
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
      <div className="pt-20 sm:pt-5">
        <motion.div
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5 }}
          className="flex justify-center"
        >
          <img src={WhatsApp} alt="whatsapp" className="w-10 pr-3" />
          <Link
            to="https://api.whatsapp.com/send?phone=5492612797321"
            target="_blank"
          >
            <h3 className="flex justify-center text-lg font-bold text-slate-700 ">
              +54 9 261-279-321
            </h3>
          </Link>
        </motion.div>
        <motion.div
          initial={{ x: +500 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5 }}
          className="flex justify-center py-3"
        >
          <img src={Gmail} alt="gmail" className="w-10 pr-3" />
          <Link to="" target="_blank">
            <h3 className="flex justify-center text-lg font-bold text-slate-700">
              agustin1996orellano@gmail.com
            </h3>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Landing;