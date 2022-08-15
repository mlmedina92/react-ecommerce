//COMPONENTE ITEMLIST: que es la lista de items, es el encargado de mapear de generar por c/ prod de la base de datos un item- renderiza item

import React from 'react';
import Item from './Item';

//capturo el data, lo inicializo en [], me llaga un array de objetos y por cada objeto genero un item con su key y le mando ese objeto q tiene toda la inf.
const ItemList = ({data = []}) => {
  return (
    data.map(film => <Item key={film.id} info={film}/>) // por cada elemento de data que viene de ItemListContainer y que lo llamo film, necesito q crees un componente item. el map geera una lista, entonces a cada item tengo que ponerle una prop key q es un identificador para q react sepa q item es c/u, sino para react son todos los item iguaes y si le pido agregar nuevos o borrar es problematico. el valor q le paso a key es un identificcador unic--- objeto.id. A ESTE ITEM LE TENGO Q PASAR LA DATA, LA VOY A LLAMAR INFO , le paso como valor todo el film, todo el objeto 
  )
}

export default ItemList;