//COMPONENTE ITEM: es la CARD q se va a renderizar por c/u de los objetos que simulemos traer.

import "../scss/item.scss";
import { Link } from "react-router-dom";
import React from "react";//importo hook que permite usar contextos

const Item = ({ info }) => {
 
  //capturo info q es un objeto mapedo
  //ITEM ES CADA CARD . cada card es clikeable, cuando toco me manda al detalle 
  return (
    <Link to={`/detalle/${info.id}`} className="card">
      <img src={info.image} alt="" />
      <p>{info.title}</p>
     </Link>
  );
}

export default Item;
