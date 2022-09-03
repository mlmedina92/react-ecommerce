import Title from "./Title";
import React from "react";
import ItemListContainer from "../containers/ItemListContainer";
import "../scss/title.scss";

const Home = () => {
  return (
    <div className="">
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
        <>
          <h4 className="text-center text-uppercase mb-5">
            ¡Relájate y disfruta!
          </h4>
        </>
        <ItemListContainer />
      </section>
    </div>
  );
};

export default Home;
