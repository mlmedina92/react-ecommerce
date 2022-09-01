//Necesitamos pedir todos los datos de productos, cargarlos y mandarselos a ItemList. Maneja la logica (es un contenedor).

import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";//Para filtrar,escuchar los parametros de la url.
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  //Uso destructuración de objetos
  const [data, setData] = useState([]); //Estado es data y su setData y se va a inicializar en un [].

  const { categoriaId } = useParams(); //Hooks url, destructuring.

  useEffect(() => {
    //useEffect: para pedir los productos. Los guardo en data (seteo la data con los productos traidos) , data se envia a ItemList para q los renderice.
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
      //Antes de setear data hay que ver si se pasa un param por la url. Si no hay ningun parametro es pq estoy en el home ahi si se tiene q setear.Lo primero es usar ese parametro para ver si existe.
    }
  }, [categoriaId]); // Cada vez que categoriaId cambia vuelve a hacer el useEffect para que vuelva a hacer el pedido y se fije si existe la categoriaId y si cambió que lo filtre de nuevo.

  return (
    <>
      <ItemList data={data} />
    </>
  );
};

export default ItemListContainer;
