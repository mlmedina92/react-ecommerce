import React from "react";
import { useCartContext } from "../context/CartContext";//Importo hook para usar context 
import "../scss/itemCart.scss";

const ItemCart = ({ product }) => {
  const { removeProduct } = useCartContext();

  return (
    <div>
      <img src={product.image} alt={product.title} />
      <div>
        <p>Obra de arte: {product.title}</p>
        <p>Cantidad: {product.stock}</p>
        <p>Precio unidad: {product.price}</p>
        <p>
          <strong>Subtototal: $</strong>
          {product.price * product.price}
        </p>
        <button
          className="rounded-pill btn btn-primary"
          onClick={() => removeProduct(product.id)}
        >
          Eliminar producto
        </button>
      </div>
    </div>
  );
};

export default ItemCart;
