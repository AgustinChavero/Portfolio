import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Landing from "./Pages/Landing/Landing";
import Navbar from "./Components/Navs/Navbar";
import Menu from "./Components/Navs/Menu";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function actualizarAnchoNavegador() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", actualizarAnchoNavegador);
    return () => {
      window.removeEventListener("resize", actualizarAnchoNavegador);
    };
  }, []);
  const { pathname } = useLocation();
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-300 via-amber-200 to-yellow-300">
      {pathname !== "/" && <Menu />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      {pathname !== "/" && <Footer />}
    </div>
  );
}

export default App;
