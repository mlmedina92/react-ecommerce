// ItemCount: sabe cual es el nro (si sube o baja). Cdo  damos clik al boton agregar al carrito ese valor se pasa al comp padre (ItemDetail: sube información por medio de evento) para que haga la logica de agregar al carrito.

// Para cambiar el numero de ItemCount necesitamos que este persista: usamos el hook UseState con la variable count.

// clik en boton + o - se ejecuta una funcion que modifica el count que es un estado -> provocamos una re renderizacion y el count ya no diria el valor inicial 1 por ej sino 2 si toque el boton +.
//SetCount : cambia, setea el valor de la var count en count +1 o -1.
//cdo hago clik en boton - ejecuto la func decrease y seteo el valor de count en 1 menos de lo q valia. Como se modifica el count lo q esta dentro del return se vuelve a renderiar y se actualiza el count.
//boton + y - : prop disabled para ponerle max(stok) y min. Si stok = 0 el boton queda desactivado.
// useEffect: cada vez q cambie el valor incial por ej, se resetea y no hay que actualizarlo.

import React, { useState, useEffect } from "react";
import "../scss/itemCount.scss";
import { useNavigate } from "react-router-dom";

const ItemCount = ({ initial, stock, onAdd }) => {
  //recibe funcion onAdd x props
  let history = useNavigate(); // Hooks para manejar historial de navegacion

  //destructuring de props
  const [count, setCount] = useState(parseInt(initial));

  const decrease = () => {
    setCount(count - 1);
  };

  const increase = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setCount(parseInt(initial)); //seteo el valor inicial cada vez q haya un cambio en initial. (initial llega de ItemDetailContainer)
  }, [initial]);

  return (
    <div className="container-fluid">
      <div className="row">
        <button
          disabled={count <= 1}
          onClick={decrease}
          className="btn btn-primary mb-2 col-4"
        >
          -
        </button>
        <span className="mb-2 col-4 text-center count-num">{count}</span>
        <button
          disabled={count >= stock}
          onClick={increase}
          className="btn btn-primary mb-2 col-4"
        >
          +
        </button>
      </div>

      {/* Clik en agregar al carrito: ejecucta func anonima, llamo a otra funcion q es onAdd pero le paso como argumento el valor del count(que seria quantity en la declaracion de la funcion ) por ej 4.  onAdd esta declarada en el padre ItemDetail y recien ahi la ejecuta - cuando hagan click en agregar el carrito lo unico q hace es pasarle al padre el valor(por medio de evento clik). Cdo hago click en agrega al carrito qeremos que desaparezca el contador y aparezca un nuevo botos que nos mande al Cart. ejecuta onAdd- PASO DE HIJO A PADRE LA FUNCION PERO DE HIJO A PADRE PASO EL ESTADO (COUNT)*/}
      <div className="row">
        <button
          disabled={stock <= 0} //si no hay stock
          //llamo a onAdd pero pasandole el valor del count(estado)al comp padre
          onClick={() => onAdd(count)}
          className=" btn btn-primary mb-2"
        >
          Agregar al carrito
        </button>
      </div>
      <div className="row">
        <button onClick={() => history(-1)} className=" btn btn-primary">
          Volver atrás
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
