import React from "react";
import ContactForm from "./ContactForm";
import ItemListContainer from "../containers/ItemListContainer";
import Title from "./Title";
import "../scss/title.scss";

const Home = () => {
  return (
    <div className="container">
      <section className="container mb-5 inicio">
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
      <section className="container mb-5">
        <>
          <h4 className="text-center text-uppercase mb-5">
            ¡Relájate y disfruta!
          </h4>
        </>
        <ItemListContainer />
      </section>
      <ContactForm />
    </div>
  );
};

export default Home;
