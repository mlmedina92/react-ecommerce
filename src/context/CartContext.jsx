//Logica carrito. Funciones para:
//Ver si hay un prod o no en el carrito
//Limpiar el carrito
//Remover un prod
//Agregar un prod con la logica para no aceptar duplicados
import Swal from "sweetalert2";
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
      setCart([...cart, { ...item, quantity }])
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Producto añadido al carrito',
        showConfirmButton: false,
        timer: 1500
      })
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

  const clearCart = () => {
    setCart([]); //Limpiar carrito (setear al cart como un [] )
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'carrito vaciado con éxito',
      showConfirmButton: false,
      timer: 1500
    })
  }

  const isInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false; //Ver si esta en el carrito

  const removeProduct = (id) => {
    setCart(cart.filter((product) => product.id !== id)); //Dejo pasar los prod que no tengan ese id forma un nuevo array
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'producto eliminado',
      showConfirmButton: false,
      timer: 1500
    })
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
