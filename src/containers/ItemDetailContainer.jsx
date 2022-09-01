import React, { useState, useEffect } from "react";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const [data, setData] = useState({}); //Guardo lo que pedi. Se inicia como {}
  const { detalleId } = useParams();
  useEffect(() => {
    const querydb = getFirestore(); //1- Trer base de datos de firestore
    const queryDoc = doc(querydb, "productos", detalleId);//2- Crear puntero al dato que queremos traer
    getDoc(queryDoc) //3- traer el dato con una promesa
      .then((res) => setData({ id: res.id, ...res.data() })); //como la prom se resolvió bien, cargo el data con el setdata: data pasa de guardar un {} al obj entero, cdo esto sucede se tiene que re renderizar pq data cambió.
  }, [detalleId]);

  return (
    <ItemDetail data={data} /> //Le mando la inf del objeto al ItemDetail.
  );
};

export default ItemDetailContainer;