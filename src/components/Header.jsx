import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/img/logo.svg";
import "../styles/components/Header.scss";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <Link className="navbar-brand" to="/">
         <img src={logo} alt="logo"/>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/propiedades">
                Propiedades
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/testimoniales">
                Testimoniales
              </Link>
            </li>
          </ul>
        </div>

      </nav>
    </header>
  );
};

export default Header;
