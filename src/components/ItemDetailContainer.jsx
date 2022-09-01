import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const [data, setData] = useState({}); //Guardo lo que pedi. Se inicia como {}
  const { detalleId } = useParams();
  useEffect(() => {
    const querydb = getFirestore(); //1- trer la base de datos de firestore
    const queryDoc = doc(querydb, "productos", detalleId);//2- crear un puntero al dato q queremos traer
    getDoc(queryDoc) //3- traer el dato con una promesa
      .then((res) => setData({ id: res.id, ...res.data() })); //como la prom se resolvio bien , cargo el data conn el setdata, data pasa de tener guardado un {} a tener el obj entero, cdo esto sucede se tiene que re renderizar pq data cambio
  }, [detalleId]);

  return (
    <ItemDetail data={data} /> //le mando la inf del objeto al ItemDetail
  );
};

export default ItemDetailContainer;
