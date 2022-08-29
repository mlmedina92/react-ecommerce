//necesitamos pedir todos los datos de productos , cargarlos y mandarselos a itemlist-
//COMPONENTE ITEM: es la CARD q se va a renderizar por c/u de los objetos 
//COMPONENTE ITEMLIST: que es la lista de items, es el encargado de mapear de generar por c/ prod de la base de datos un item
//COMPONENTE ITEMLISTCONTAINER: es el qe maneja toda la logica pq es un contenedor

import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom"; //para filtrar, para escuchar los parametros de la url
import {  getFirestore, collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  // uso destructuracion de objetos
  const [data, setData] = useState([]); // el estado es data y su setData y se va a inicializar en un []. 

  const { categoriaId } = useParams(); //hooks url, destructuring.

  useEffect(() => {
    //useEffect para pedir los productos, los guardo en data (seteo la data con los productos traidos) , data se envia a ItemList para q los renderice
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "productos");
        if (categoriaId) {
          const queryFilter = query(queryCollection, where('categoria', '==', categoriaId))
          getDocs(queryFilter)
            .then(res => setData(res.docs.map(product => ({id : product.id, ...product.data()}))))
       } else {
        getDocs(queryCollection)
        .then(res => setData(res.docs.map(product => ({id:product.id, ...product.data()}))))
      //antes de setear data hay q ver si se pasa un param por la url sino hay ningun parametro es pq estoy en el home ahi si se tiene q setear, lo primero es usar ese parametro para ver si existe
   }
  }, [categoriaId]); //  cada vez q la categoria cambia quiero que vuelva a hacer el useefect para q vuelva a hacer el pedido y se fije si existe la categoriaId y si cambio que me lo filtre de nuevo

  return (
    <>
      <ItemList data={data} />
    </>
  );
};

export default ItemListContainer;
 