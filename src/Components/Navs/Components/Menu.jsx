import { useState } from "react";
import MenuSVG from "../../../Assets/Icons/menu.svg";

function Menu() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="fixed w-full top-0">
      <nav className="bg-slate-900 flex justify-end text-white transition-all">
        <ul className="">
          <li>
            <button onClick={handleShow}>
              <img src={MenuSVG} alt="menu" />
            </button>
          </li>
        </ul>
      </nav>
      <ul
        className={
          show === true
            ? "bg-slate-900 absolute w-full h-[220px] text-white px-[40%] transition-all duration-100"
            : "bg-slate-900 absolute w-full h-[0px] text-white px-[40%]  transition-all duration-500"
        }
      >
        <button className="w-full">
          <li
            className={
              show === true
                ? "border-b border-1 text-center border-white pb-2 font-bold"
                : "hidden"
            }
          >
            <a href="#AboutMe" className="no-underline">
              Sobre mi
            </a>
          </li>
        </button>
        <button className="w-full">
          <li
            className={
              show === true
                ? "border-b border-1 text-center border-white py-2 font-bold"
                : "hidden"
            }
          >
            <a href="#Technologies" className="no-underline">
              Tecnologias
            </a>
          </li>
        </button>
        <button className="w-full">
          <li
            className={
              show === true
                ? "border-b border-1 text-center border-white py-2 font-bold"
                : "hidden"
            }
          >
            <a href="#Experience" className="no-underline">
              Experiencia
            </a>
          </li>
        </button>
        <button className="w-full">
          <li
            className={
              show === true
                ? "border-b border-1 text-center border-white py-2 font-bold"
                : "hidden"
            }
          >
            <a href="#Studies" className="no-underline">
              Estudios
            </a>
          </li>
        </button>
        <button className="w-full">
          <li
            className={
              show === true
                ? "border-b border-1 text-center border-white py-2 font-bold"
                : "hidden"
            }
          >
            <a href="#Proyects" className="no-underline">
              Proyectos
            </a>
          </li>
        </button>
      </ul>
    </div>
  );
}

export default Menu;
