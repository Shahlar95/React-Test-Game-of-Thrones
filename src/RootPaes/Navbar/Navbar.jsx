import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <Link to="/home">
          <p className="list">Home</p>
        </Link>
        <Link to="/about">
          <p className="list">About</p>
        </Link>
        <Link to="/contact">
          <p className="list">Contact</p>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
