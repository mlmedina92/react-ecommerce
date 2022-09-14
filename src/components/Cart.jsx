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
        <div className="container-fluid mb-5">
          <div className="row">
            <h6 className="text-center">
              Aún no agregaste elementos en el carrito
            </h6>
          </div>
          <div className="row">
            <Link to="/" className=" text-center btn btn-primary">
              Ir a hacer compras
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    //return condicional (else) - hace un map de los elem del carrito
    //por cada product del carrito genera un itemCart
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p>total de la compra: $ {totalPrice()}</p>
      <button onClick={() => history(-1)} className="btn btn-primary col-3">
        Volver atrás
      </button>
      {/*clik  en boton-> genera oc en firebase */}
      <Link to="/checkout" className="btn btn-primary">
        Pagar
      </Link>
    </>
  );
};

export default Cart;

// Cargar orden de compra: en vez de hacer el metodo get hacemos el metodo post  para guardar una orden de compra. al hacer clik en un boton del carrito se emite una orden de comra. los datos de un us deberian venir en un form
