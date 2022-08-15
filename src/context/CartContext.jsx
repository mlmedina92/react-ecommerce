//logica para el carrito
//funcion para ver si hay un prod o no en el carrito
//func para limpiar el carrito
//func para remover un prod
//func para agregar un prod con la logica para no aceptar duplicados

import React, { useState, useContext } from "react";
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); //va a ser el carrito

  const addProduct = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((product) => {
          return product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product;
        })
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const totalPrice = () => {//para saver el $ total
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
  }
//para saber la cant de prod en el carrito :
  const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

  const clearCart = () => setCart([]); //limpiar carrito es = a setear al cart como un []

  const isInCart = (id) => cart.find((product) => product.id === id) ? true : false; //ver si esta en el carrito

  const removeProduct = (id) =>
    setCart(cart.filter((product) => product.id !== id)); //dejo pasar todos lso prod q no tengan ese id foran un nuevo array

  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalPrice,
        totalProducts,
        cart
    }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
