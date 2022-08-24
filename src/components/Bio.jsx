import React from 'react'
import portada from "../img/portada.jpg"

const Bio = () => {
  return (
    <>
      <section id="nosotros" className="container-fluid py-5">
        <div className="row d-flex align-items-center">
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <h2 className="mb-3 text-center text-uppercase">Mundo Flotante</h2>
            <p className="lead"> Es una Muralista Argentina y conservadora del Patrimonio Cultural.Se graduó como profesora auxiliar en ilustración y luego obtuvo su título en conservación en Australia. Ha realizado murales por Argentina, España y Australia, así como series de pinturas con diferentes soportes que vende y expone. Ella cree en el equilibrio y que para tener éxito, ser feliz y sobresalir en cualquier trabajo o meta, se requiere un cuerpo y una mente sana. Con una mente sana, uno puede entrenarse para aceptar la crítica constructiva, prestar más atención a los detalles, desarrollar la creatividad y, lo que es más importante, inspirarse para poder inspirar a los demás.Todo su trabajo se centra en una cosa: COMUNICACIÓN, DIVERSIDAD Y CULTURA creando murales y pinturas surrealistas de nuestro mundo. Comprender otras culturas, aceptar las formas en que trabajan en la comunicación es esencial para su trabajo.</p>
            <p className="lead">Metas Crear tantos murales, pinturas y trabajos relacionados con la conservación como sea posible. Desarrollar aún más mis habilidades profesionales.Viajar por el mundo, compartiendo mi arte mientras conozco la diversidad cultural de este planeta.Aumentar mi conocimiento sobre los pueblos indígenas de todo el mundo y poder trabajar para la preservación de su cultura y tradiciones.

            </p>
          </div>
          <div className="col-12 col-md-6">
            <img className="w-100" src={portada} alt="Mundo Flotante" />
          </div>
        </div>
      </section>

    </>
  );
};

export default Bio;
