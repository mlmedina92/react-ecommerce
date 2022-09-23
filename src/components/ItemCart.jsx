import React from "react";
import { useCartContext } from "../context/CartContext"; //Importo hook para usar context
import "../scss/itemCart.scss";

const ItemCart = ({ product }) => {
  const { removeProduct } = useCartContext();
  return (
    <>
      <div className="container card mb-4">
        <div className="row g-0">
          <div
            className="col-12 col-md-4 card-img-col"
            style={{ backgroundImage: `url(${product.image})` }}
          ></div>
          <div className="card-body col-12 col-md-8">
            <p className="card-title">{product.title}</p>
            <div className="container">
              <div className="row">
                <div className="col-3">
                  <p>Cantidad:</p>
                  <p>{product.quantity}</p>
                </div>
                <div className="col-3">
                  <p>Precio unidad: $ </p>
                  <p>{product.price}</p>
                </div>
                <div className="col-3">
                  <p>Subtototal: $</p>
                  <p>{product.price * product.quantity}</p>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-primary"
                    onClick={() => removeProduct(product.id)}
                  >
                    <i class="bi bi-trash3-fill"></i>{" "}
                  </button>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCart;
