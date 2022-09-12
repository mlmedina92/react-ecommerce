//CONTEXT: Sirve para guardar datos y comunicarlos entre componentes que no son padres e hijos. Por ej el ItemListContainer le pasa datos al Item sin pasar por prop al itemlist. Ese pasaje es posible creando contextos.  si no usara context el valor que esté en App lo tendria q pasar por prop a ItemLisContainer desp a ItemList que no los va a usar y desp se lo pasaria a Item: te salteas componentes - Carrito: uso context porque lo necesito en muchos componentes. No seria buena práctica hacer un pasamano de props entre todos. Al carrito lo necesitamos en el comp Cart, ItemDetailContainer(donde damos clik para agregar al carrito). Idc y cart son hermanos, para pasarle datos tendria que ser desde el padre de ambos (App) lo que seria mala práctica pq se empezaría a cargar de código.
//Para comunicar datos a:- Item (qe esta dentro de itemlistcontaniner y a su vez dentro del itemlist) y a:-  Cartwidgt (que esta dentro del cart)

//implementar cartcontect para mantener el estado de la compra del usuario

// Context es un objeto que tiene varias keys entre ellas provider para acceder a ella uso notacion de punto: CartContext.provider- Dentro de estas etiquetas pongo todo lo que pueda usar este contexto. En el atributo VALUE es donde guardamos la información que queremos mandar. sirve para pasar información entre comp hermanos que estan al mismo nivel 
//useCartContext: lo voy a usar en ID , cart y cartwidget
//tengo que mandar inf de ID al contexto y del contexto repartirla. el cotexto recibe y envia. cualquier comp que este denttro del Provider puede acceder a lo que tengo en el contexto 

//cada funcion de la logica del carrito setea el carrito. esa funcion es la que se pasa a otros comp. si seteo mi estado todos los comp que lean ese estado se van a actualizar

//componente CartProvider: hace toda la logica del carrito. Funciones para: Ver si hay un prod o no en el carrito (devuelve true o f), limpiar  carrito, Remover un prod, Agregar un prod con la logica para no aceptar duplicados.

import Swal from "sweetalert2";
import React, { useState, useContext } from "react"; //importo el hook que me permite usar contextos: useContext

const CartContext = React.createContext([]); // primero creo el contexto, como valor por default le pone []

//creo una funcion para usar el contexto , en vez de importar useContext en todos los comp donde los quiera usar creo una funcion useCartContext que automaticamnete me devuelva el valor seContext(CartContext) nos ahorramos de importa el carContext y el useContext en todos los componenetes , solo importamos la funcion useCartContext
export const useCartContext = () => useContext(CartContext);


//creo un componente para poder tener estados, funciones.
const CartProvider = ({ children }) => { //captura los hijos (props) que vienen desde App: lo que ahí esta envuelto en etiqueta CartProvider
  const [cart, setCart] = useState([]); //almaceno los prod que llegan al carrito en un estado Cart. Inicia en []

  const addProduct = (item, quantity) => { //se usa en ItemDetail donde esta el btn agregar al carrito. ese boton tiene la funcion addProduct. parametro item(objeto producto ) y cant solicitada: arguemntos que pasaste en ItemDetail
    if (isInCart(item.id)) {// si esta en el carrito este item setea cart con esto.. creo un nuevo array con map
      setCart(
        cart.map((product) => {
          return product.id === item.id ? { ...product, quantity: product.quantity + quantity } //a los q sean iguales dejalos tal cual estan pero al quantity agregale la cant seleccionada
            : product; //a los q no sean iguales dejalos talcual estan
//agrego al obejto product una prop quantity
        })
      );
    } else { // si no esta en el carrito este item setea cart con esto, necesito agregar creo un array nuevo con todos los objetos q ya estaba antes en cart, creo un nuevo objeto que va a tener todos los campos que tenia item pero ademas el quantity
      setCart([...cart, { ...item, quantity: quantity }])
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Producto añadido al carrito',
        showConfirmButton: false,
        timer: 1500
      })
    }
  };

  const totalPrice = () => {//$ total. valor inicial 0. cart es un array le aplico metodo reduce
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
  };
  const totalProducts = () => //cantidad de productos en el carrito : es lo qe se muestra en CartWidget
    cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity,0);

  const clearCart = () => {
    Swal.fire({
      title: 'Seguro quieres vaciar el carrito?',
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
        setCart([]); //Limpiar carrito (setear al cart como un [] )
      }
    })
  }

  const isInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false; //Ver si un prod esta en el carrito, recibe un argumento id. Nos devuelve(true si existe el objeto) o false(si no existe y da undefined)

  const removeProduct = (id) => {//recibo el id del prod a eliminar
    Swal.fire({
      title: '¿Desea eliminar el producto? ',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
      
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Producto eliminado del carrito !',
        )
      setCart(cart.filter((product) => product.id !== id)); //seteo el mismo carrito que estaba antes: dejo pasar los prod que no tengan ese id forma un nuevo array
      }//me quedo con todos los prod q no tengan este id
    })
  };

  return (
    //dentro del retunr devuelvo cartcontex.provider. dentro de provider puede asignarle valores para compartirlos al resto de componentes
    //atributo value: ahi pongo la inf que le quiero pasar a los componentes (salteando hijos)--> le paso un objeto por eso {{}}- a traes del value paso ESTADOS Y FUNCIONES
    //provider : provee de inf a todos los componentes que tenga dentro para que tengan acceso a esa inf
    <CartContext.Provider //entro con notacion de puntos a esta prop del obj context
      value={{ //paso estos valores osea funciones con atribute value y como objetos {{}}. en el componente que los reciba tengo que usar el hook UseContext
       //no se pasa el setdata, el setcar esta interno simepre en el contexto, paso una funcion que setee el carrito y paso
      //paso funcines que setean el cart(estado)
        clearCart: clearCart, //funciones
        isInCart: isInCart,
        removeProduct: removeProduct,
        addProduct: addProduct,
        totalPrice: totalPrice,
        totalProducts: totalProducts,
        cart: cart, //estado del cart
      }}
    >
      {children} 
      {/* renderiza los hijos (props) que vienen desde App: lo que ahí esta envuelto en etiqueta CartProvider */}

      {/* todo lo que sea hijo , todo lo que ponga anidado al CartProvider va a pasar por este cartContext.Provider*/}
    </CartContext.Provider>
  );
};

export default CartProvider; //el contexto se llama CartContext, el componente se llama CartProvider
