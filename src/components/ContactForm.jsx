import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

// to do: configurar form de contacto para el mail de MF

const ContactForm = () => {
  const form = useRef();

  const formSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "inmo_gama",
        "contacto_inmo-gamalero",
        form.current,
        "_foHohnEONQliAi_t"
      )
      .then(
        (result) => {
          alert("Mensaje enviado con éxito");
        },
        (error) => {
          alert("Hubo un error: " + error.text);
        }
      );
  };

  return (
    <>
      <section className="container mb-5">
        <h2 className="mb-3">Contacto</h2>
        <div className="row">
          <div className="col-12">
            <form ref={form} onSubmit={formSubmit}>
              <legend className="fs-6 mb-3">
                Gracias por su interés en el trabajo de Mundo Flotante. Complete
                el formulario y nos pondremos en contacto.{" "}
              </legend>
              <div className="mb-3">
                <label className="form-label">
                  Nombre:
                  <input
                    className="form-control required"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Ingrese su nombre"
                    required
                  />
                </label>
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Teléfono:
                  <input
                    className="form-control required"
                    type="tel"
                    id="tel"
                    name="tel"
                    placeholder="Ingrese su teléfono"
                    required
                  />
                </label>
              </div>
              <div className="mb-3">
                <label className="form-label">
                  E-mail:
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Ingrese su e-mail"
                  />
                </label>
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Hacenos tu consulta:
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="4"
                    cols="50"
                  ></textarea>
                </label>
              </div>
              <div className="mb-3">
                <button type="submit" className="rounded-pill btn btn-primary">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
