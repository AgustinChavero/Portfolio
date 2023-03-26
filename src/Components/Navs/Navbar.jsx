import { useEffect, useState } from "react";
import Menu from "./Components/Menu";
import Nav from "./Components/Nav";

function Navbar() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
      console.log(windowSize);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative z-50">
      <Menu />
    </div>
  );
}

export default Navbar;
