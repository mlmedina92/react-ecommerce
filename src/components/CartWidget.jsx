import React from "react";
import "../scss/cartwidget.scss";
import { useCartContext } from "../context/CartContext";

export const CartWidget = () => {
  const { totalProducts } = useCartContext();

  return (
    <>
      <i className="bi bi-cart iconCart"></i>
      <span>{totalProducts() || ""}</span>
    </>
  );
};

export default CartWidget;
