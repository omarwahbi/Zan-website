import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/blackLogo.svg";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg mb-3 navbar-theme">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse font" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className={`nav-link  fs-5 font navbar-link-color `}
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  className="nav-link  navbar-link-color fs-5"
                  to="/Projects"
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  className="nav-link navbar-link-color fs-5"
                  to="/About"
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
          <Link
            className="navbar-brand fw-bold fs-3 text-danger-emphasis ml-auto" // Add ml-auto class to move the logo to the right
            to="/"
          >
            <img src={logo} height="55" alt="Zan doors logo" loading="lazy" />
          </Link>
        </div>
      </nav>
      <div className="container">
        <hr className="navbar-line" />
      </div>
    </div>
  );
}
