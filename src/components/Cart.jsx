import React from "react";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore"
import Swal from "sweetalert2";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();
  let history = useNavigate(); // Hooks para manejar historial de navegacion

  const order = { //datos hardcodeados de oc
    buyer:{
      name:'lis',
      email:'lm30540@gmail.com',
      phone:123,
      adres:'asd'
    },
    item: cart.map(product =>({id: product.id, title:product.title, price: product.price, quantity:product.quantity})),
    total: totalPrice()
  }

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection,order) //metodo post para agregar inf a firebase
      .then(({ id }) => console.log (id));
      Swal.fire({
        title: 'Su orden de compra se cargó con éxito!',
        text: 'Gracias por ser parte de este Mundo flotante',
        imageUrl: 'https://res.cloudinary.com/dmatgvjjy/image/upload/v1661885787/mundoFlotante/20211112_180955_2_1_mkaban.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })}

  if (cart.length === 0) {
    return (
      //return condicional (if)
      <>
        <p>Aún no agregaste elementos en el carrito</p>
        <Link to="/">
          <button className="btn btn-primary">
            Ir a hacer compras</button>
        </Link>
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
      <button
        onClick={() => history(-1)}
        className="rounded-pill btn btn-primary col-3"
      >
        Volver atrás
      </button>
     {/*clik  en boton-> genera oc en firebase */}
      <button className="rounded-pill btn btn-primary" onClick={handleClick}>Emitir orden </button>
    </>
  );
};

export default Cart;

// Cargar orden de compra: en vez de hacer el metodo get hacemos el metodo post  para guardar una orden de compra. al hacer clik en un boton del carrito se emite una orden de comra. los datos de un us deberian venir en un form
