import "../scss/item.scss";
import { Link } from "react-router-dom";
import React from "react";

const Item = ({ info }) => {
  return (
    <div className="card overflow-hidden">
      <div className="row g-0">
        <div
          className="col-md-8 col-md-8 pe-0 card-img-col"
          style={{ backgroundImage: `url(${info.image})` }}
        ></div>
        <div className="col-md-4 info-card">
          <div className="card-body">
            <h5 className="card-title">{info.title}</h5>
            <p className="card-text">{info.descripcion}</p>
            <Link to={`/detalle/${info.id}`} className="btn btn-primary">
              Ver
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
