import Title from "./Title";
import React from "react";
import ItemListContainer from "../containers/ItemListContainer";
import "../scss/title.scss";

const Home = () => {
  return (
    <>
      <section className="mb-5 inicio">
        {/*Paso datos por props a Title */}
        <div className="vh-100 titulo text-center">
          <Title
            title="Bienvenidos"
            subtitle="a mi Mundo Flotante"
            textDescription="Bienvenidos a una realidad imaginaria creada por Mundo Flotante.
Siéntase libre de mirar a su alrededor."
          />
        </div>
      </section>
      <section className="mb-5">
        <h3 className="text-center text-uppercase my-3">
          ¡Relájate y disfruta!
        </h3>
        <ItemListContainer />
      </section>
    </>
  );
};

export default Home;
