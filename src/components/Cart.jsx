import React from "react";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, totalPrice, clearCart } = useCartContext();
  let history = useNavigate();

  if (cart.length === 0) {
    return (
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
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}

      <div className="row">
        <button onClick={() => history(-1)} className="btn btn-primary col-3">
          Volver atrás
        </button>
        <button className="btn btn-primary" onClick={() => clearCart()}>
          Vaciar carrito
        </button>
      </div>

      <div className="row">
        <p>total de la compra: $ {totalPrice()}</p>
        <Link to="/checkout" className="btn btn-primary">
          Pagar
        </Link>
      </div>
    </>
  );
};

export default Cart;
