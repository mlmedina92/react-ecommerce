//ItemList:es la lista de items. Encargado de mapear y generar por c/ prod de la base de datos un item- renderiza item. 

import React from "react";
import Item from "./Item";

//Capturo el data que me pasa IlemListContainer, lo inicializo en []: Llega un array de objetos y por cada elemento de data (objeto) que llega genero un componente Item con su key y mando ese objeto q tiene toda la inf. El map genera una lista, entonces a cada Item tengo que ponerle una prop key( es un identificador para que react sepa q item es c/u, para que no sea problemático agregar o borrar productos. El valor que le paso a key es un identificcador unico (objeto.id). A Item le paso la data (la llamo info), le paso como valor todo el item, todo el objeto.
const ItemList = ({ data = [] }) => {
  return (
    <>
      <h4 className="text-center mb-5">Conoce algunas de sus obras de arte</h4>
      <div className="row">
        {data.map((item) => {
          return (
            <div className="col-sm-12 col-lg-6">
              <Item key={item.id} info={item} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ItemList;
