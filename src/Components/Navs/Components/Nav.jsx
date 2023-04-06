import { Link } from "react-router-dom";
import Photo from "../../../Assets/Profile/Profile.jpg";

function Nav() {
  return (
    <div className="flex justify-between px-10 bg-slate-900 text-white py-2 border-b border-black fixed z-50 w-full">
      <ul>
        <li className="w-[100px]">
          <Link to="/">
            <img
              src={Photo}
              alt="logomalvinas"
              className="w-full rounded-full"
            />
          </Link>
        </li>
      </ul>
      <ul className="flex items-center">
        <li className="px-10">
          <Link to="#AboutMe">
            <p className="font-light text-xl hover:border-b hover:border-white">
              Sobre mi
            </p>
          </Link>
        </li>
        <li className="px-10">
          <Link to="#Technologies">
            <p className="font-light text-xl hover:border-b hover:border-white">
              Tecnologias
            </p>
          </Link>
        </li>
        <li className="px-10">
          <Link to="#Proyects">
            <p className="font-light text-xl hover:border-b hover:border-white">
              Proyectos
            </p>
          </Link>
        </li>
        <li className="px-10">
          <Link to="#Studies">
            <p className="font-light text-xl hover:border-b hover:border-white">
              Estudios y Experiencia
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
