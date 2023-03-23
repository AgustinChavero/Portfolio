import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import WhatsApp from "../../../Assets/Icons/whatsapp.svg";
import Gmail from "../../../Assets/Icons/gmail.svg";

function Contacts() {
  return (
    <div className="pt-20 sm:pt-5">
      <motion.div
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5 }}
        className="flex justify-center"
      >
        <div className="bg-yellow-50 w-[270px] flex justify-center rounded-xl transition-all">
          <img src={WhatsApp} alt="whatsapp" className="w-10 pr-3" />
          <Link
            to="https://api.whatsapp.com/send?phone=5492612797321"
            target="_blank"
          >
            <h3 className="flex justify-center text-lg font-bold text-slate-700 hover:text-slate-500 hover:text-xl transition-all">
              +54 9 261-279-321
            </h3>
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: +500 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5 }}
        className="flex justify-center py-3"
      >
        <div className="bg-yellow-50 w-[370px] flex justify-center rounded-xl transition-all">
          <img src={Gmail} alt="gmail" className="w-10 pr-3" />
          <Link to="" target="_blank">
            <h3 className="flex justify-center text-lg font-bold text-slate-700 hover:text-slate-500 hover:text-xl transition-all">
              agustin1996orellano@gmail.com
            </h3>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default Contacts;
