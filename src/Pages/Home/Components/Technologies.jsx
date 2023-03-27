import { motion } from "framer-motion";

import TypeScript from "../../../Assets/Technologies/typescript.svg";
import JavaScript from "../../../Assets/Technologies/javascript.svg";
import Python from "../../../Assets/Technologies/python.svg";
import TheCSS from "../../../Assets/Technologies/css.svg";
import TheHTML from "../../../Assets/Technologies/html.svg";
import NextJS from "../../../Assets/Technologies/nextjs.svg";
import ReactJS from "../../../Assets/Technologies/react.svg";

import Tailwind from "../../../Assets/Technologies/tailwind.svg";
import Sequelize from "../../../Assets/Technologies/sequelize.svg";
import PostgreSQL from "../../../Assets/Technologies/postgresql.svg";

import NodeJS from "../../../Assets/Technologies/node.svg";

function Technologies() {
  const techs = [
    ReactJS,
    JavaScript,
    Tailwind,
    TheCSS,
    TheHTML,
    Sequelize,
    PostgreSQL,
    NodeJS,
  ];

  const loads = [Python, TypeScript, NextJS];

  return (
    <div className="bg-techs bg-fixed bg-cover bg-no-repeat w-full">
      <motion.div className="text-white text-4xl backdrop-blur-sm bg-black/70 w-full">
        <motion.div
          initial={{ y: -1000 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.5 }}
          className="flex justify-center py-10 bg-white/40 mb-10"
        >
          <h2 className="font-light text-xl md:text-5xl sm:text-2xl text-left p-5">
            TECNOLOGIAS
          </h2>
        </motion.div>
        <div className="md:flex justify-center mx-10 py-16">
          {techs.map((e) => {
            return (
              <motion.div
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{ duration: 1.5 }}
                className="p-5"
              >
                <div className="flex justify-center">
                  <img src={e} alt="e" className="w-[120px]" />
                </div>
                <div className="flex justify-center">
                  <h2 className="text-center"></h2>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="flex justify-center py-1 mb-10">
          <h2 className="font-light text-xl md:text-4xl sm:text-2xl text-left p-1">
            TECNOLOGIAS EN PROCESO
          </h2>
        </div>
        <div className="md:flex justify-center mx-10 py-16">
          {loads.map((e) => {
            return (
              <motion.div
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{ duration: 1.5 }}
                className="p-5"
              >
                <div className="flex justify-center">
                  <img src={e} alt="e" className="w-[120px]" />
                </div>
                <div className="flex justify-center">
                  <h2 className="text-center"></h2>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

export default Technologies;
