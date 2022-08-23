import React from "react";
import ContactForm from "./ContactForm";
import ItemListContainer from "./ItemListContainer";
import Title from "./Title";

const Home = () => {
  return (
    <>
      <section className="mb-5 inicio">
        {/* le paso datos por props a Title */}
        <Title
          title="Bienvenidos"
          subtitle="a mi Mundo Flotante"
          textDescription="Bienvenidos a una realidad imaginaria creada por Mundo Flotante.
Siéntase libre de mirar a su alrededor. ¡Si tienes alguna pregunta solo ponte en contacto!
¡Relájate y disfruta!"
        />

      </section>
      <ItemListContainer  />

      <ContactForm />
    </>
  );
};

export default Home;
