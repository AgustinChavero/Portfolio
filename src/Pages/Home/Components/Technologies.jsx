import TypeScript from "../../../Assets/Technologies/typescript.svg";
import JavaScript from "../../../Assets/Technologies/javascript.svg";
import Python from "../../../Assets/Technologies/python.svg";
import Sql from "../../../Assets/Technologies/sql.svg";
import TheCSS from "../../../Assets/Technologies/css.svg";
import TheHTML from "../../../Assets/Technologies/html.svg";
import NextJS from "../../../Assets/Technologies/nextjs.svg";
import ReactJS from "../../../Assets/Technologies/react.svg";

import Tailwind from "../../../Assets/Technologies/tailwind.svg";
import Sequelize from "../../../Assets/Technologies/sequelize.svg";
import PostgreSQL from "../../../Assets/Technologies/postgresql.svg";

import NodeJS from "../../../Assets/Technologies/node.svg";

import Techs from "../../../Assets/Icons/techs.png";

function Technologies() {
  return (
    <div className="md:flex lg:min-w-[1280px]  bg-blue-300/10 shadow-2xl shadow-black text-white rounded-xl backdrop-blur-3xl">
      <div className="p-5">
        <img src={Techs} alt="techs_icon" />
      </div>
      <div className="flex-col justify-start lg:w-full">
        <div className="flex justify-center lg:justify-start lg:pl-[120px] lg:pt-5">
          <h1 className="font-bold text-xl text-white md:text-6xl sm:text-5xl">
            Tecnologias
          </h1>
        </div>
        <div className="lg:flex-col justify-around">
          <div className="">
            <div className="flex justify-center space-x-1">
              <img src={JavaScript} alt="javascript" />
              <img src={Sql} alt="sql" />
              <img src={ReactJS} alt="reactjs" />
              <img src={TheHTML} alt="html" />
              <img src={TheCSS} alt="css" />
              <img src={Tailwind} alt="tailwind" />
              <img src={Sequelize} alt="sequelize" />
              <img src={PostgreSQL} alt="postgresql" />
              <img src={NodeJS} alt="nodejs" />
            </div>
          </div>
        </div>
        <div className="lg:flex justify-around">
          <div className="lg:w-[300px]">
            <div className="flex justify-center space-x-5 lg:pl-5"></div>
          </div>
          <div className="lg:w-[300px]">
            <div>
              <h2 className="font-semibold text-xl md:text-3xl sm:text-2xl text-center md:text-left md:p-5 py-2">
                Aprendiendo
              </h2>
            </div>
            <div className="flex justify-center space-x-5 lg:pl-5">
              <img src={Python} alt="python" />
              <img src={TypeScript} alt="typescript" />
              <img src={NextJS} alt="nextjs" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
