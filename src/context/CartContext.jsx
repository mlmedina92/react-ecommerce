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
      title: 'Seguro quieres vaciar el carrito?',
      // text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Vaciar carrito!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Carrito vaciado',
        )
      }
    })
  }

  const isInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false; //Ver si esta en el carrito

  const removeProduct = (id) => {
    setCart(cart.filter((product) => product.id !== id)); //Dejo pasar los prod que no tengan ese id forma un nuevo array
    Swal.fire({
      title: '¿Desea eliminar el producto? ',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Producto eliminado del carrito !',
        )
      }
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
