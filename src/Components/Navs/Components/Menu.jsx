import { useState } from "react";
import { Link } from "react-router-dom";
import { HiBars3, HiBars3BottomLeft } from "react-icons/hi2";

function Menu() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div
      className={`transition-all text-white duration-100 ease-linear fixed top-0 bg-slate-900 z-50
        ${show === true ? "w-full h-screen" : "w-20 h-20 rounded-br-full"}
      `}
    >
      <button onClick={handleShow} className="">
        {!show ? (
          <HiBars3 className="w-12 h-12" />
        ) : (
          <HiBars3BottomLeft className="w-12 h-12" />
        )}
      </button>
      {show && (
        <>
          <ul className="flex-col justify-center">
            <li className="w-full text-center py-5 text-2xl font-light">
              <Link to="#AboutMe" className="hover:border-b hover:border-white">
                Sobre mi
              </Link>
            </li>
            <li className="w-full text-center py-5 text-2xl font-light">
              <Link
                to="#Technologies"
                className="hover:border-b hover:border-white"
              >
                Tecnologias
              </Link>
            </li>
            <li className="w-full text-center py-5 text-2xl font-light">
              <Link
                to="#Proyects"
                className="hover:border-b hover:border-white"
              >
                Proyectos
              </Link>
            </li>
            <li className="w-full text-center py-5 text-2xl font-light">
              <Link to="#Studies" className="hover:border-b hover:border-white">
                Estudios y Experiencia
              </Link>
            </li>
          </ul>
        </>
      )}
    </div>
  );
}

export default Menu;
