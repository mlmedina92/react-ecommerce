import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.jpeg";
import CartWidget from "./CartWidget";

const NavBar = () => {
  //Función para aplicar las clases nativas de react-router-dom para links activos
  const navLinkClassName = "nav-link";
  const navLinkClassNameActive = "nav-link active";

  return (
    <nav className="navbar navbar-expand-lg bg-light bg-opacity-75 container-fluid px-3">
      <NavLink className="navbar-brand" to="/">
        <img src={logo} alt="logo de mundo flotante" width="100" height="100"
        loading="lazy"
 />
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
      {/* en NavBAr reemplazo enlaces a por NavLinks y les digo con que ruta quiero q matchee cada link */}
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
              to="/categoria/ilustraciones"
            >
              Ilustraciones
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
            >
              <CartWidget />{" "}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
