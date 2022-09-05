import React from "react";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();
  let history = useNavigate(); // Hooks para manejar historial de navegacion

  if (cart.length === 0) {
    return (
      //return condicional (if)
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

  return (
    //return condicional (else)
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p>total: {totalPrice()}</p>
      <button
        onClick={() => history(-1)}
        className="rounded-pill btn btn-primary col-3"
      >
        Volver atrás
      </button>
    </>
  );
};

export default Cart;
