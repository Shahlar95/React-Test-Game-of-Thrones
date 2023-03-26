import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,

} from "react-router-dom";

import Navbar from "./RootPaes/Navbar/Navbar";
import Home from "./RootPaes/Home/Home";
import About from "./RootPaes/About/About";
import Contact from "./RootPaes/Contact/Contact";

import "./App.css";
import Phone from "./RootPaes/Phone/Phone";
import Mail from "./RootPaes/Mail/Mail";
import ProfilAbout from "./RootPaes/ProfilAbout/ProfilAbout";

function App() {
  return (
    <>
   
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profil/:id" element={<ProfilAbout />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="phone" element={<Phone />} />
          <Route path="mail" element={<Mail />} />
        </Routes>
      </Router>
     
    </>
  );
}

export default App;
