import React, { useState } from "react";
import {  NavLink } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Resume from "./Resume";
import mainpic from "../assests/lovesh.png"
const Header = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <div>
      <i
        className={`bi bi-list mobile-nav-toggle d-xl-none ${
          toggle ? "bi-x" : ""
        }`}
        onClick={() => settoggle(!toggle)}
      ></i>
      <div className="main" id="main">
        <header id="header" style={{ left: toggle ? "0px" : "" }}>
          <div className="d-flex flex-column">
            <div className="profile">
              <img
                src={mainpic}
                alt=""
                className="img-fluid rounded-circle"
              />
              <h1 className="text-light">
                <NavLink to="/" clas>Lovesh Pandya</NavLink>
              </h1>
              <div className="social-links mt-3 text-center">
                <NavLink to="#" className="facebook">
                  <i className="bi bi-facebook" />
                </NavLink>
                <NavLink to="#" className="instagram">
                  <i className="bi bi-instagram" />
                </NavLink>

                <NavLink to="#" className="linkedin">
                  <i className="bi bi-linkedin" />
                </NavLink>
              </div>
            </div>
            <nav
              id="navbar"
              className="nav-menu navbar d-flex justify-content-center"
            >
              <ul>
                <li>
                  <NavLink to="/" className="nav-link scrollto ">
                    <i className="bi bi-house" /> <span>Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about">
                    <i className="bi bi-person" /> <span>About</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/skills" className="nav-link scrollto">
                    <i className="bi bi-journal-bookmark-fill" />{" "}
                    <span>Skill</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/resume" className="nav-link scrollto">
                    <i className="bi bi-file-person-fill" /> <span>Resume</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/portfolio" className="nav-link scrollto">
                    <i className="bi bi-file-earmark-person" />{" "}
                    <span>Portfolio</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/services" className="nav-link scrollto">
                    <i className="bi bi-server" /> <span>Services</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="nav-link scrollto">
                    <i className="bi bi-envelope" /> <span>Contact</span>
                  </NavLink>
                </li>
              </ul>
            </nav>
            {/* .nav-menu */}
          </div>
        </header>
        {/* End Header */}
      </div>
      <a href="/" class="back-to-top d-flex align-items-center justify-content-center">  <i className="bi bi-arrow-up-short" /></a>
      {/* <About />
      <Skills />
      <Resume />
      <Portfolio />
      <Services />
      <Contact /> */}
      
    </div>
  );
};

export default Header;
