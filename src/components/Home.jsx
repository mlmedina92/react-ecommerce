import React from "react";
import ContactForm from "./ContactForm";
import ItemListContainer from "./ItemListContainer";
import Title from "./Title";
import "../scss/title.scss"

const Home = () => {
  return (
    <>
      <section className="container mb-5 inicio">
        {/* le paso datos por props a Title */}
        <div className="vh-100 titulo text-center">
        <Title
          title="Bienvenidos"
          subtitle="a mi Mundo Flotante"
          textDescription="Bienvenidos a una realidad imaginaria creada por Mundo Flotante.
Siéntase libre de mirar a su alrededor. ¡Si tienes alguna pregunta solo ponte en contacto!
¡Relájate y disfruta!"
        />
        </div>
      </section>
      <section className="mb-5">
        <ItemListContainer />

      </section>

      <ContactForm />
    </>
  );
};

export default Home;
