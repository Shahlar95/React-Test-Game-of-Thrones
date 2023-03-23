import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Phone from "../Phone/Phone";
import Mail from "../Mail/Mail";
import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="contact">
        <div className="phone">
          <Link to="/phone">Phone</Link>
        </div>
        <div className="mail1">
          <Link to="/mail">E-mail</Link>
        </div>
        <Routes>
          <Route path="/phone" element={<Phone />} />
          <Route path="/mail" element={<Mail />} />
        </Routes>
      </div>
    </>
  );
}

export default Contact;
