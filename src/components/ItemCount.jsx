import React, { useState, useEffect } from "react";
import "../scss/itemCount.scss";
import { useNavigate } from "react-router-dom";

const ItemCount = ({ initial, stock, onAdd }) => {
  let history = useNavigate();

  const [count, setCount] = useState(parseInt(initial));

  const decrease = () => {
    setCount(count - 1);
  };

  const increase = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setCount(parseInt(initial));
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

      <div className="row">
        <button
          disabled={stock <= 0}
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
