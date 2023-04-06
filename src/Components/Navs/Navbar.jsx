import Nav from "./Components/Nav";
import Menu from "./Components/Menu";
import useMediaQuery from "../Hooks/UseMediaQuery";
import { motion } from "framer-motion";

function Navbar() {
  let smallScreens = useMediaQuery("(min-width: 1020px)");
  return (
    <motion.nav className="">{smallScreens ? <Nav /> : <Menu />}</motion.nav>
  );
}

export default Navbar;
