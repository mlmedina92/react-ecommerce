//COMPONENTE ITEMLIST: que es la lista de items, es el encargado de mapear de generar por c/ prod de la base de datos un item- renderiza item

import React from 'react';
import Item from './Item';

//capturo el data q me pasa ilemlistcontainer, lo inicializo en [], me llaga un array de objetos y por cada objeto genero un item con su key y le mando ese objeto q tiene toda la inf.
const ItemList = ({data = []}) => {
  return (
    <div className="row">
      {data.map((item) => {
        return (
        <div className="col-sm-12 col-lg-6">  
        {/*  por cada elemento de data que viene de ItemListContainer necesito q crees un componente item. el map genera una lista, entonces a cada item tengo que ponerle una prop key q es un identificador para q react sepa q item es c/u, sino para react son todos los item iguaes y si le pido agregar nuevos o borrar es problematico. el valor q le paso a key es un identificcador unico objeto.id. A ESTE ITEM LE TENGO Q PASAR LA DATA, LA VOY A LLAMAR INFO , le paso como valor todo el item, todo el objeto      */}
          <Item key={item.id} info={item}/> 
        </div>
        )
      })}
      
    </div>
  )
}

export default ItemList;