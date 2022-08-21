//simular que traemos de una base de datos los datos y los mostamos x pantalla.
//necesitamos pedir todos los datos de films , cargarlos y mandarselos a itemlist-

//COMPONENTE ITEM: es la CARD q se va a renderizar por c/u de los objetos que simulemos traer.
//COMPONENTE ITEMLIST: que es la lista de items, es el encargado de mapear de generar por c/ prod de la base de datos un item
//COMPONENTE ITEMLISTCONTAINER: es el qe maneja toda la logica pq es un contenedor

import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom"; //para filtrar , para escuchar los parametros de la url
import {  getFirestore, collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  // uso destructuracion de objetos
  const [data, setData] = useState([]); //pido los productos y los guardo en data , data q sera enviado a ItemList para q los renderice. el estado es data con su setData y se va a inicializar en un []

  const { categoriaId } = useParams(); //hooks url, destructuring.

  useEffect(() => {
    //uso useEffect para hacer peticiones
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "productos");
        if (categoriaId) {
          const queryFilter = query(queryCollection, where('categoria', '==', categoriaId))
          getDocs(queryFilter)
            .then(res => setData(res.docs.map(product => ({id : product.id, ...product.data()}))))
       } else {
        getDocs(queryCollection)
        .then(res => setData(res.docs.map(product => ({id:product.id, ...product.data()}))))
      //antes de setear data hay q ver si se pasa un param por la url sino hay ningun paramtero es pq estoy en el home ahi si se tiene q setear, lo primero es usar ese parametro para ver si existe
   }
  }, [categoriaId]); //  cada vez q la categoria cambia quiero que vuelva a hacer el useefect para q vuelva a hacer el pedido y se fije si existe la categoriaId y si cambio que me lo filtre de nuevo

  return (
    <>
      {/* le ordeno al contador q se puede mover pero dentro de un rango
    cdo alguien agregue agregar al carrito pasame el nro q el cliente clikeo pasame 3. para que me lo des te paso como prop un callback: una funcion q le paso por param para ejecutarla desp ahi adentro- vos me pasas un valor quantity y yo lo quiero imprimir en consola- cdo ejecute onAdd se tiene q ejecutar la funcion onAAd
   */}
      <ItemList data={data} />
    </>
  );
};

export default ItemListContainer;
