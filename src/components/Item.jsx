//Item: card que se renderiza por c/ objeto. Cada card es clikeable, toco y me manda al detalle.

import "../scss/item.scss";
import { Link } from "react-router-dom";
import React from "react"; 

const Item = ({ info }) => {//capturo info (es un objeto mapedo)
  return (
    <div className="card mb-5">
      <div className="row">
        <div className="col-md-7 pe-0">
          <img
            src={info.image}
            className="img-card w-100 vh-80 img-fluid rounded-start"
            alt={info.price}
            height=""
            width=""
          />
        </div>
        <div className="col-md-5 card-color">
          <div className="card-body">
            <h5 className="card-title">{info.title}</h5>
            <p className="card-text">{info.descripcion}</p>
            <button>
              <Link
                to={`/detalle/${info.id}`}
                className="rounded-pill btn btn-primary"
              >
                Ver detalles
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
