import React from "react";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return ( //return condicional (IF)
      
      <>
        <p>Aún no agregaste elementos en el carrito</p>
        <Link to="/">
          <button className="rounded-pill btn btn-primary">
            Ir a hacer compras
          </button>
        </Link>
      </>
    );
  }
  
  return ( //return condicional (else)
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p>total: {totalPrice()}</p>
    </>
  );
};

export default Cart;
