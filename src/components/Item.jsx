//COMPONENTE ITEM: es la CARD q se va a renderizar por c/u de los objetos que simulemos traer.

import "../scss/item.scss";
import { Link } from "react-router-dom";
import React from "react";//importo hook que permite usar contextos

const Item = ({ info }) => {
 
  //capturo info q es un objeto mapedo
  //ITEM ES CADA CARD . cada card es clikeable, cuando toco me manda al detalle 
  return (
    <div className="card border rounded" >
    <img src={info.image} className="card-img-top img-fluid" alt="obra de arte"/>
    <div className="card-body">
      <h5 className="card-title">{info.title}</h5>
      <p className="card-text d-flex justify-content-between"> {info.descripcion}</p>
      <div className="card-footer p-3">
      <Link to={`/detalle/${info.id}`} classNameName="btn btn-primary">ver detalles</Link>
   </div>
    </div>
  </div>
  

  );
}

export default Item;
