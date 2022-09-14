import React from "react";
import { useCartContext } from "../context/CartContext"; //Importo hook para usar context
import "../scss/itemCart.scss";

const ItemCart = ({ product }) => {
  const { removeProduct, clearCart } = useCartContext();
  return (
    <div className="card mb-3 mt-5">
      <div className="row g-0">
        <div className="col-md-8 card-img-col"  style={{backgroundImage: `url(${product.image})`}}>
          {/* <img
            className="img-fluid"
            src={product.image}
            alt={product.title}
            height=""
            width=""
          /> */}
        </div>
        <div className="card-body col-md-4">
          <h4 className="card-title">Obra de arte: {product.title}</h4>
          <p className="card-text">Stock disponible: {product.stock}</p>
          <p className="card-text">Producto adquirido: {product.quantity}</p>
          <p className="card-text">Precio unidad: $ {product.price}</p>
          <p className="card-text">
            <strong>Subtototal: $</strong>
            {product.price * product.quantity}
          </p>
          <div className="row">
            <button
              className="btn btn-primary"
              onClick={() => removeProduct(product.id)}
            >
              Eliminar producto
            </button>
          </div>
          <div className="row">
            <button className="btn btn-primary" onClick={() => clearCart()}>
              Vaciar carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
