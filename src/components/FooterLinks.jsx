import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.png";

const FooterLinks = () => {
    return (
      <div className="pt-4 px-20 py-4">
        <div className="container">
          <div className="row">
            <div className="d-none d-sm-block col-12 col-md-3">
              <NavLink className="text-decoration-none" to="/">
                <img
                  src={logo}
                  alt="Ecomerce"
                  width="100"
                  height="30"
                />
              </NavLink>
            </div>
            <div className="col-12 col-md-3 mb-3">
              <ul className="list-unstyled">
                <li className="pb-2">
                  <NavLink className="text-decoration-none" to="/">
                    Inicio
                  </NavLink>
                </li>
                <li className="pb-2">
                  <NavLink className="text-decoration-none" to="/categoria/cuadros">
                    Cuadros
                  </NavLink>
                </li>
                <li className="pb-2">
                  <NavLink className="text-decoration-none" to="/categoria/murales">
                    Murales
                  </NavLink>
                </li>
                <li className="pb-2">
                  <NavLink className="text-decoration-none" to="/contacto">
                    Contacto
                  </NavLink>
                </li>
                <li className="pb-2">
                  <NavLink className="text-decoration-none" to="/sobre-mi">
                    Sobre mi
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-3 mb-3">
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a
                    className="text-decoration-none"
                    href="tel:2494287779"
                    title="Administración"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-telephone-fill"></i><strong>   Administración. </strong>
                    Llamada
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="text-decoration-none"
                    href="tel:2494460909"
                    title="Administración"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-telephone-fill"></i><strong>   Ventas.</strong> Llamada :
                    2494460909
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="text-decoration-none"
                    href="https://wa.me/2494328146"
                    title="Administración"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-whatsapp"></i><strong>   Ventas.</strong> WhatsApp
                    2494328146
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="text-decoration-none"
                    href="https://goo.gl/maps/xDRhASVev4MzqwPs5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-geo-alt-fill"></i><strong>   Belgrano 1271</strong>
                    <br />
                    Tandil (7000), Buenos Aires, Arg.
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-3">
              <p className="texto-footer">CONOCÉ MIS REDES</p>
              <ul className="list-unstyled d-inline-flex">
                <li className="me-3">
                  <a
                    className="text-decoration-none fs-5"
                    href="https://www.facebook.com/paula.pipo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
                <li className="me-3">
                  <a
                    className="text-decoration-none fs-5"
                    href="https://www.instagram.com/mundo.flotante/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="text-decoration-none fs-5"
                    target="_blank"
                    href="mailto:paulettepipo.illustration@gmail.com"
                    rel="noopener noreferrer"
                    title="E-mail"
                  >
                    <i className="bi bi-envelope-fill"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default FooterLinks;