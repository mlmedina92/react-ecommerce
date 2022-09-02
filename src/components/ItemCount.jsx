// Contador: sabe cual es el nro (si sube o baja). Cdo le demos clik al boton agregar al carrito ese nro se traslada al comp padre para que haga la logica de agregar al carrito. El boton le pasa ese valor al comp padre y el comp padre simula que lo va a agregar al carrito haciendo un consolelog.
//ItemCOunt: Para cambiar el numero necesitamos que este persista: usamos el hook UseState con la variable count.
//cdo hago clik en boton + o  - se ejecuta una funcion que modifica el count que es un estado -> provocamos una re renderizacion y el count ya no diria el valor inicial 1 por ej sino dos si toque el boton +.
//SetCount : cambia, setea el valor de la var count en count +1 o -1-
//cdo hago clik en boton - ejecuto la func decrease esta se ejecuta y seteo el valor de count en 1 menos de lo q valia. Como se modifica el count lo q esta dentro del return se vuelve a renderiar y se actualiza el count
//botones + y - : se usa la prop disabled para ponerle max (stok)y min. Si el stok es 0 el boton queda desactivado.

// useEffect para que cada vez q cambie el valor inciial por ej, se resetee y no haya q actualizarlo.

import React, { useState, useEffect } from "react";
import "../scss/itemCount.scss";
import { useNavigate } from "react-router-dom";

const ItemCount = ({ initial, stock, onAdd }) => {
  let history = useNavigate();// Hooks para manejar historial de navegacion

  //destructuring de props
  const [count, setCount] = useState(parseInt(initial));

  const decrease = () => {
    setCount(count - 1);
  };

  const increase = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setCount(parseInt(initial)); //seteo el valor inicial cada vez q haya un cambio en initial
  }, [initial]);

  return (
    <div className="p-0 text-center">
      <div className="row counter">
        <button
          disabled={count <= 1}
          onClick={decrease}
          className="rounded-pill btn btn-primary col-1"
        >
          -
        </button>
        <span className="col-1">{count}</span>
        <button
          disabled={count >= stock}
          onClick={increase}
          className="rounded-pill btn btn-primary col-1"
        >
          +
        </button>

        {/* si le hago clik ejecucta esta func anonima, llamo a otra funcion q es onAdd pero le paso como argumento el valor del count(que seria quantity en la declaracion de la funcion ) por ej 4.  onAdd esta declarada en el padre ItemListContainer y recien ahi la ejecuta -- cuando hagan click en agregar el carrito lo unico q hace es pasarle al padre el valor nada mas*/}
        <button
          disabled={stock <= 0}
          onClick={() => onAdd(count)}
          className="rounded-pill btn btn-primary ms-3 col-3"
        >
          Agregar al carrito
        </button>
          <button onClick={() => history(-1)} className="rounded-pill btn btn-primary col-3">
            Volver atrás
          </button>
      </div>
    </div>
  );
};

export default ItemCount;
