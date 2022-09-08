// en el detalle de cada producto hay un ItemCount

import React, { useState } from "react";
import { useCartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import "../scss/itemDetail.scss";

//Recibe data de ItemDetailcontainer.
export const ItemDetail = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext(); //hago destructuring para agarrar el valor del objeto que me manda CartContext para usar solo addProduct


  //defino funcion onAdd (la logica) en ItemDetail
  const onAdd = (quantity) => {//quantity es el valor del count
    setGoToCart(true); //cuando hace clik en agregar alcarrito se ejecuta la funcion onAdd que sete goTocart en true (si vale true se renderiza un link que te lleva a carrito)
    addProduct(data, quantity); //uso el addProduct y le paso valores : la data que es un objeto producto y la cantidad que eligio el usuario
  };

  return (
    <div className="mb-5">
      <div className="card">
        <img
          className="card-img-top image-detail"
          src={data.image}
          alt={data.title}
          height=""
          width=""        />
        <div className="card-body">
          <h4 className="card-title">{data.title}</h4>
          <p className="card-text">
            <strong>$: </strong>
            {data.price}
          </p>
          <p>{data.stock}</p>
        {/* gotoCart es un estado (si vale true se renderiza un link que te lleva a carrito si es false te lleva a ItemCount) */}
          {goToCart ? (
            <Link to="/carrito" className="rounded-pill btn btn-primary">
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
