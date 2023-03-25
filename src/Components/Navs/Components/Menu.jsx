import { useState } from "react";
import MenuSVG from "../../../Assets/Icons/menu.svg";

function Menu() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="fixed w-full top-0">
      <nav className="bg-blue-900 flex justify-end text-white transition-all">
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
            ? "bg-blue-900 absolute w-full h-[220px] text-white px-[40%] transition-all duration-100"
            : "bg-blue-900 absolute w-full h-[0px] text-white px-[40%]  transition-all duration-500"
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
            Sobre mi
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
            Tecnologias
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
            Experiencia
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
            Estudios
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
            Proyectos
          </li>
        </button>
      </ul>
    </div>
  );
}

export default Menu;
