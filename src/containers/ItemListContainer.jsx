// Pide datos de productos, los cargar y manda a ItemList. Maneja la logica (es un contenedor).

import React, { useState, useEffect } from "react";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";//Para filtrar,escuchar los parametros de la url.
import { getFirestore, collection, getDocs, query, where} from "firebase/firestore";
import CustomLoader from "../components/CustomLoader";

const ItemListContainer = () => {
  //Uso destructuración de objetos
  const [data, setData] = useState([]); //Estado es data y su setData y se va a inicializar en un [].
  const { categoriaId } = useParams(); //Hooks url, destructuring.

  useEffect(() => {
    //useEffect: para pedir los productos. Los guardo en data (seteo data con los productos traidos). Data se envia a ItemList que los renderiza.
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "productos");
    if (categoriaId) {
      const queryFilter = query(
        queryCollection,
        where("categoria", "==", categoriaId)
      );
      getDocs(queryFilter).then((res) =>
        setData(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setData(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
//Antes de setear data hay que ver si se pasa un param por la url. Si no hay ningun parametro estoy en el home ahi si se tiene q setear. Lo primero es usar ese parametro para ver si existe.
    }
  }, [categoriaId]); // Cada vez que categoriaId cambia vuelve a hacer el useEffect -> vuelve a hacer el pedido y se fija si existe la categoriaId y si cambió que lo filtre de nuevo.

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
