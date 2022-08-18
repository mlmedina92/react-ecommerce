import React from "react";

// capturo las propidades con un OBJETO llamado PROPS- props en un objeto que tiene las prop que le defino y los valores que le paso a ese comp cuando lo llamo.

// en vez de escribir objeto props.nombredelcampo escribo directo el nombre del campo desestructuracion
const Title = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <p>{props.textDescription}</p>
    </>
  );
};

export default Title;
