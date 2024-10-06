import React from "react";
import ai_planet_logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className=" px-6 py-4 bg-white">
      <Link to={'/'}>
      <img src={ai_planet_logo} alt="ai_planet_logo" className="mx-10" />
      </Link>
    </nav>
  );
};

export default NavigationBar;
