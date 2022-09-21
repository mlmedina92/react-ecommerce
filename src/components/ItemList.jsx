import React from "react";
import Item from "./Item";

const ItemList = ({ data = [] }) => {
  return (
    <>
      <h4 className="text-center my-4 ">Conoce algunas de sus obras de arte</h4>
      <div className="row g-3">
        {data.map((item) => {
          return (
            <div className="col-sm-12 col-md-6 col-xl-4">
              <Item key={item.id} info={item} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ItemList;
