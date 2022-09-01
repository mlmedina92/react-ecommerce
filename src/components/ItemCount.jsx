// El contador sabe cual es el nro que maneja, si sube si baja . Cdo le demos clik al boton agregar al carrito ese nro tiene que ser trasladado al comp padre para que haga toda la logica de agregar al carrito, pero el contador no deberia tener nada que ver con agregar al carrito solo deberia saber su valor. El boton va a pasarle ese valor al comp padre y el comp padre simula q lo va a agregar al carrito haciendo un consolelog
//para poder cambiar el numero necesitamos q persista el nro  y que lo tenga registrado el ItemCOunt. para esto necesitamos usar el hook UseState con la variable count.
//cdo hago clik en boton + o  - se ejecuta una funcion q modifica el count que es un estado, provocamos una re renderizacion y el count ya no diria el valor inicial 1 por ej sino dos si toque el boton +.
//setCount : cambia, setea el valor de la var count en count +1 o -1-
//cdo hago clik en boton - ejecuto la func decrease esta se ejecuta y seteo el valor de count en 1 menos de lo q valia, como se modifica el count lo q esta dentro del return se vuelve a renderiar y se actualiza el count
//a botones + y - les pongo la prop disabled para ponerle max (stok )y min(1)
//agrego useEffect para que cada vez q cambie el valor inciial por ej, se resetee y no haya q actualizarlo

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../scss/itemCount.scss";

const ItemCount = ({ initial, stock, onAdd }) => {
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

        {/* si el stok es 0 o menos boton desactivado */}
        {/* si le hago clik ejecuctar esta func anonima llamo a otra funcion q es onadd pero le paso como argumento el valor del count(que seria quantity en la declaracion de la funcion ) por ej 4 on add esta declarada en el padre ItemListContainer y recien ahi la ejecuta -- cuando hagan click en agregar el carrito lo unico q hace es pasarle al padre el valor nada mas*/}
        <button
          disabled={stock <= 0}
          onClick={() => onAdd(count)}
          className="rounded-pill btn btn-primary ms-3 col-3"
        >
          Agregar al carrito
        </button>
        <Link to="/">
          <button className="rounded-pill btn btn-primary col-3">
            Volver atrás
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ItemCount;
