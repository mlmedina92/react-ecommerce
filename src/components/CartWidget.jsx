import React from "react";
import "./styles/cartwidget.css";
import { useCartContext } from "../context/CartContext";

export const CartWidget = () => {
  const { totalProducts } = useCartContext();

  return (
    <>    
    <i className="bi bi-cart"></i> 
    <span>{totalProducts() || ''}</span>
    </>

    );
};

export default CartWidget;
