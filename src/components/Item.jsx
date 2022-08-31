//COMPONENTE ITEM: es la CARD q se va a renderizar por c/u de los objetos que simulemos traer.

import "../scss/item.scss";
import { Link } from "react-router-dom";
import React from "react";//importo hook que permite usar contextos

const Item = ({ info }) => {
 
  //capturo info q es un objeto mapedo
  //ITEM ES CADA CARD . cada card es clikeable, cuando toco me manda al detalle 
  return (
<div className="card mb-5" >
  <div className="row">
    <div className="col-md-7 pe-0">
      <img src={info.image} className="img-card w-100 vh-80 img-fluid rounded-start" alt={info.price}/>
    </div>
    <div className="col-md-5 card-color">
      <div className="card-body">
        <h5 className="card-title">{info.title}</h5>
        <p className="card-text">{info.descripcion}</p>
        <button><Link to={`/detalle/${info.id}`} className="rounded-pill btn btn-primary">Ver detalles</Link></button>
     </div>
    </div>
  </div>
</div>
    
/* <div classNameNameName="card" >
  <div classNameName="row g-0"
    <div classNameName="col-md-4">
      <img src={info.image} classNameNameName="img-fluid rounded-start" alt="obra de arte"/>
    </div>
    <div classNameNameName="col-md-8">
      <div className="card-body">
            <h5 classNameNameName="card-title">{info.title}</h5>
            <p classNameName="card-tect">Lorem ipsum dolor sit amet.</p>
            <Link to={`/detalle/${info.id}`} classNameNameNameName="btn btn-primary">Ver detalles</Link>
      </div>
    </div>
  </div> */
    
  
  );
}

    




export default Item;
