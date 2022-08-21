import React from "react";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      //return condicional
      <>
        <p>No hay elementos en el carrito</p>
        <Link to="/">hacer compras</Link>
      </>
    );
  }
// esto es el else:
  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p>total: {totalPrice()}</p>
    </>
  );
};

export default Cart;
