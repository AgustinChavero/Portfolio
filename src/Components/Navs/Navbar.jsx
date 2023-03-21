import { Link } from "react-router-dom";

import { motion } from "framer-motion";

function Nav() {
  return (
    <motion.nav
      initial={{ color: "#ff0000" }}
      transition={{ duration: 3 }}
      animate={{ color: "#000" }}
      className=""
    >
      <ul>
        <li>
          <Link to="">Inicio</Link>
        </li>
        <li>
          <Link to="">Acerca de mi</Link>
        </li>
        <li>
          <Link to="">Contacto</Link>
        </li>
      </ul>
    </motion.nav>
  );
}

export default Nav;
