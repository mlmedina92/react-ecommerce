import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.png";
import CartWidget from "./CartWidget";

const NavBar = () => {
  //funcion para aplicar las clases nativas de react router dom para links activos
  const navLinkClassName = "nav-link";
  const navLinkClassNameActive = "nav-link active";

  return (
    <nav className="navbar navbar-expand-lg bg-light bg-opacity-75">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="logo de la marca" width="60" height="60" />
        </NavLink>
        {/* menu mobile */}
        <button
          className="navbar-toggler bg-light bg-opacity-75"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarId"
          aria-controls="navbarId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list"></i>
        </button>

        {/* Links menú pcipal */}

        <div
          className="collapse navbar-collapse justify-content-end text-uppercase"
          id="navbarId"
        >
          <ul className="navbar-nav ms-auto text-start">
            <li className="nav-item">
              <NavLink
                className={navLinkClassName}
                activeclassname={navLinkClassNameActive}
                to="/"
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={navLinkClassName}
                activeclassname={navLinkClassNameActive}
                to="/categoria/cuadros"
              >
                Cuadros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={navLinkClassName}
                activeclassname={navLinkClassNameActive}
                to="/categoria/murales"
              >
                Murales
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={navLinkClassName}
                activeclassname={navLinkClassNameActive}
                to="/contacto"
              >
                Contacto
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={navLinkClassName}
                activeclassname={navLinkClassNameActive}
                to="/sobre-mi"
              >
                Sobre mi
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={navLinkClassName}
                activeclassname={navLinkClassNameActive}
                to="/carrito"
              ><CartWidget/>              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
