//Item: card que se renderiza por c/ objeto. Cada card es clikeable, toco y me manda al detalle.

import "../scss/item.scss";
import { Link } from "react-router-dom";
import React from "react";

const Item = ({ info }) => {
  //capturo info (es un objeto mapedo)
  return (
    <div className="card">
      <div className="row g-0">
        <div className="col-md-8 pe-0">
          <img
            src={info.image}
            className="img-fluid rounded-start"
            alt={info.price}
            height=""
            width=""
          />
        </div>
        <div className="col-md-4 info-card">
          <div className="card-body">
            <h5 className="card-title">{info.title}</h5>
            <p className="card-text">{info.descripcion}</p>
            {/* el enlace LInk te lleva a la ruta detalle/numero de id que es dinamico */}
            <Link
              to={`/detalle/${info.id}`}
              className="btn btn-primary"
            >
              Ver detalles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
