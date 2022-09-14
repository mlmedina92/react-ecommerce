// en el detalle de cada producto hay un ItemCount

import React, { useState } from "react";
import { useCartContext } from "../context/CartContext"; //para usar contexto
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import "../scss/itemDetail.scss";

//Recibe data de ItemDetailcontainer.
export const ItemDetail = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext(); //hago destructuring para agarrar el valor del objeto que me manda CartContext para usar solo addProduct

  //defino funcion onAdd (la logica) en ItemDetail
  const onAdd = (quantity) => {
    //quantity es el valor del count
    setGoToCart(true); //cuando hace clik en agregar alcarrito se ejecuta la funcion onAdd que sete goTocart en true (si vale true se renderiza un link que te lleva a carrito)
    addProduct(data, quantity); //uso el addProduct y le paso valores : la data que es un objeto producto y la cantidad que eligio el usuario
  };

  return (
    <div className="card mb-3 container-fluid">
      <div className="row g-0 card-img-col">
        <div className="col-md-8">
          <img
            className="img-fluid"
            src={data.image}
            alt={data.title}
            height=""
            width=""
          />
        </div>

        <div className="card-body col-md-4 detail-info">
          <h4 className="card-title">{data.title}</h4>
          <p className="card-text">
            <strong>$: </strong>
            {data.price}
          </p>
          <p>Stock: {data.stock}</p>
          <p>Stock: {data.descripcion}</p>

          {/* gotoCart es un estado (si vale true se renderiza un link que te lleva a carrito si es false te lleva a ItemCount) */}
          {/* a la funcion onAdd que cree aca la paso por props al hijo */}
          {goToCart ? (
            <Link to="/carrito" className="btn btn-primary">
              Terminar compra
            </Link>
          ) : (
            <ItemCount initial={1} stock={data.stock} onAdd={onAdd} />
          )}
        </div>
      </div>
    </div>
  );
};

// NavLink es mas para el NavBar y Link para cualquier otro tipo de enlace

export default ItemDetail;

//* <ItemCount initial={1} stock={5} onAdd={onAdd} />--> reever  stok x defectp?
