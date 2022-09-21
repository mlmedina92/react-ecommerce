import React, { useState } from "react";
import { useCartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import "../scss/itemDetail.scss";

export const ItemDetail = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(data, quantity);
  };

  return (
    <div className="card mb-3 container-fluid">
      <div className="row g-0 card-img-col">
        <div className="col-md-8">
          <img
            loading="lazy"
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

export default ItemDetail;
