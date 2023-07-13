import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";

import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <div>
        <div className="navlinks">
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#C35142" : "#313131",
            })}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#C35142" : "#313131",
            })}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#C35142" : "#313131",
            })}
            to="/news"
          >
            News
          </NavLink>

          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#C35142" : "#313131",
            })}
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#C35142" : "#313131",
            })}
            to="/services"
          >
            Services
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#C35142" : "#313131",
            })}
            to="/projects"
          >
            Projects
          </NavLink>
        </div>
        <div className="contact">
          <div className="contactLine">
            <BsFillTelephoneFill className="phone-icon" />
            <p>(+487) 384 9452</p>
          </div>
          <button>Get In Touch</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
