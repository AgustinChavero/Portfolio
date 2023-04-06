import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Landing from "./Pages/Landing/Landing";
import Navbar from "./Components/Navs/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";

function App() {
  const { pathname } = useLocation();
  return (
    <div className="bg-black">
      {pathname !== "/" && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      {pathname !== "/" && <Footer />}
    </div>
  );
}

export default App;
