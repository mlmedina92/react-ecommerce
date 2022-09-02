//Logica para el carrito:
//Función para ver si hay un prod o no en el carrito
//Función para limpiar el carrito
//Función para remover un prod
//Función para agregar un prod con la logica para no aceptar duplicados

import React, { useState, useContext } from "react";
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); //Va a ser el carrito

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

  const totalPrice = () => {//$ total
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
  };
  const totalProducts = () => //cantidad de productos en el carrito :
    cart.reduce(
      (acumulador, productoActual) => acumulador + productoActual.quantity,
      0
    );

  const clearCart = () => setCart([]); //Limpiar carrito (setear al cart como un [] )

  const isInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false; //Ver si esta en el carrito

  const removeProduct = (id) => {
    setCart(cart.filter((product) => product.id !== id)); //Dejo pasar los prod que no tengan ese id forma un nuevo array
    debugger;
  };

  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalPrice,
        totalProducts,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
