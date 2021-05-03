import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/img/logo.svg";
import "../styles/components/Header.scss";

const Header = () => {
  const [dropPropiedades, setDropPropiedades] = useState(false);
  const [dropNotas, setDropNotas] = useState(false);
  const [dropTestimoniales, setDropTestimoniales] = useState(false);
  const [isDrop, setIsDrop] = useState(false);

  const handleDropPropiedades = () => {
    setDropPropiedades(!dropPropiedades);
    setDropNotas(false);
    setDropTestimoniales(false);
  };

  const handleDropBlog = () => {
    setDropNotas(!dropNotas);
    setDropPropiedades(false);
    setDropTestimoniales(false);
  };

  const handleDropTestimoniales = () => {
    setDropTestimoniales(!dropTestimoniales);
    setDropPropiedades(false);
    setDropNotas(false);
  };

  const handleDrop = () => {
    setIsDrop(!isDrop);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="mynav">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" />
          </Link>

          <button
            className={`navbar-toggler ${isDrop ? "collapsed" : ""}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={isDrop}
            aria-label="Toggle navigation"
            onClick={handleDrop}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div
          className={`collapse navbar-collapse ${isDrop ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li
              className={`nav-item dropdown ${dropPropiedades ? "show" : ""}`}
            >
              <button
                className="nav-link dropdown-toggle"
                onClick={handleDropPropiedades}
              >
                Propiedades
              </button>

              <div
                className={`dropdown-menu  ${dropPropiedades ? "show" : ""}`}
              >
                <Link
                  className="dropdown-item"
                  to="/propiedades/"
                  onClick={handleDropPropiedades}
                >
                  Todas las propiedades
                </Link>

                <div className="dropdown-divider"></div>

                <Link
                  className="dropdown-item"
                  to="/propiedades/nueva_propiedad/"
                  onClick={handleDropPropiedades}
                >
                  Nueva propiedad
                </Link>
              </div>
            </li>

            <li className={`nav-item dropdown ${dropNotas ? "show" : ""}`}>
              <button
                className="nav-link dropdown-toggle"
                onClick={handleDropBlog}
              >
                Blog
              </button>

              <div className={`dropdown-menu  ${dropNotas ? "show" : ""}`}>
                <Link
                  className="dropdown-item"
                  to="/blog"
                  onClick={handleDropBlog}
                >
                  Entradas del Blog
                </Link>

                <div className="dropdown-divider"></div>

                <Link
                  className="dropdown-item"
                  to="/blog/nueva_entrada_blog/"
                  onClick={handleDropBlog}
                >
                  Nueva entrada de blog
                </Link>
              </div>
            </li>

            <li
              className={`nav-item dropdown ${dropTestimoniales ? "show" : ""}`}
            >
              <button
                className="nav-link dropdown-toggle"
                onClick={handleDropTestimoniales}
              >
                Testimoniales
              </button>

              <div
                className={`dropdown-menu  ${dropTestimoniales ? "show" : ""}`}
              >
                <Link
                  className="dropdown-item"
                  to="/testimoniales"
                  onClick={handleDropTestimoniales}
                >
                  Lista de Testimoniales
                </Link>

                <div className="dropdown-divider"></div>

                <Link
                  className="dropdown-item"
                  to="/testimoniales/nuevo_testimonial/"
                  onClick={handleDropTestimoniales}
                >
                  Nueva Testimonial
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
