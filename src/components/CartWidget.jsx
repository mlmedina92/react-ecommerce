// tiene el nro de prod seleccionados, el total.
//nos dice e subtotal de cada prod en un resumen de compra y el total de gastos de la compra

import React from "react";
import "../scss/cartWidget.scss";
import { useCartContext } from "../context/CartContext"; //importo hook para usar contexto

export const CartWidget = () => {
  const { totalProducts } = useCartContext();

  return (
    <>
      <i className="bi bi-cart icon-cart"></i>
      <span>{totalProducts() || ""}</span>
    </>
  );
};

export default CartWidget;





