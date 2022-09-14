// Pide datos de productos, los cargar y manda a ItemList. Maneja la logica (es un contenedor).

import React, { useState, useEffect } from "react";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where} from "firebase/firestore";
import CustomLoader from "../components/CustomLoader";

const ItemListContainer = () => {
  //Uso destructuración de objetos
  const [data, setData] = useState([]); //Estado es data y su setData y se va a inicializar en un [].
  const { categoriaId } = useParams(); //Hooks useParams. Capturo categoriaId desde app quien es el padre y le manda esta informacion.

  useEffect(() => {
    //qery db :data base 
    //useEffect: para pedir los productos. Los guardo en data (seteo data con los productos traidos). Data se envia a ItemList que los renderiza.
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "productos");
    if (categoriaId) { // si me llega una categoriaId por parametro renderiza una cosa (productos filtrados que coincidan con esa categoria)
      const queryFilter = query(
        queryCollection,
        where("categoria", "==", categoriaId)
      );
      getDocs(queryFilter).then((res) =>
        setData(res.docs.map((product) => ({ id: product.id, ...product.data() }))
        ) //por cada iteracion itero cada producto
      );
    } else {//si me llega una categoriaId por parametro renderiza otra cosa (todo)
      getDocs(queryCollection).then((res) =>
        setData(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
// hook UseParams: Antes de setear data con el valor de la peticion, hay que ver si se pasa un parametro por la url. Si no llega ningun parametro es porque estoy en el home ahi seteo data con todos los prod de ItemListcontainer. Sirve para filtrar,escuchar los parametros de la url.
    }
  }, [categoriaId]); // array de dependencia del useEffect: Cada vez que categoriaId cambia vuelve a hacer el useEffect : vuelve a hacer el pedido y se fija si llega algo por el parametro osea si existe la categoriaId y si cambió lo filtra de nuevo (para que cambie lo que se muestra en pantalla).-si cambia se repite el pedido 

  if(data.length === 0) {
    return (
      <>
        <CustomLoader />
      </>
    );
  } else {
    return (
      <>
        <ItemList data={data} />
      </>
    );
  }

};

export default ItemListContainer;
