import React from 'react'
import "../scss/bio.scss"

const Bio = () => {
  return (
    <>
      <section id="nosotros" className="container-fluid py-5">
        <div className="row d-flex align-items-center">
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <h2 className="mb-3 text-center text-uppercase">Mundo Flotante</h2>
            <p className="parrafo-bio"> Es una Muralista Argentina y conservadora del Patrimonio Cultural.</p>
            <p className="parrafo-bio">Se graduó como <strong>profesora auxiliar en ilustración</strong> y luego obtuvo su título en <strong>conservación</strong> en Australia.</p>
            <p className="parrafo-bio">Ha realizado murales por <strong>Argentina, España y Australia</strong>, así como series de pinturas con diferentes soportes que vende y expone.</p>            
            <p className="parrafo-bio">Cree en el equilibrio y que para tener éxito, ser feliz y sobresalir en cualquier trabajo o meta, se requiere un cuerpo y una mente sana. Con una mente sana, uno puede entrenarse para aceptar la crítica constructiva, prestar más atención a los detalles, desarrollar la creatividad y, lo que es más importante, <strong>inspirarse para poder inspirar a los demás.</strong></p>
            <p className="parrafo-bio">Todo su trabajo se centra en una cosa: COMUNICACIÓN, DIVERSIDAD Y CULTURA creando murales y pinturas surrealistas de nuestro mundo. Comprender otras culturas, aceptar las formas en que trabajan en la comunicación es esencial para su trabajo.</p>
            <p className="parrafo-bio"><strong>METAS:</strong></p>
            <p className="parrafo-bio"><i class="bi bi-brush"></i> Crear tantos murales, pinturas y trabajos relacionados con la <strong>conservación </strong>como sea posible.</p>
            <p className="parrafo-bio"><i class="bi bi-brush"></i>  Desarrollar aún más mis habilidades profesionales.</p>
            <p className="parrafo-bio"><i class="bi bi-brush"></i> Viajar por el mundo, compartiendo mi arte mientras conozco la <strong>diversidad cultural</strong> de este planeta.</p> 
            <p className=""><i class="bi bi-brush"></i> Aumentar mi conocimiento sobre los <strong>pueblos indígenas</strong> de todo el mundo y poder trabajar para la preservación de su cultura y tradiciones.</p>

    
          </div>
          <div className="col-12 col-md-6">
            <img className="w-100" src="https://res.cloudinary.com/dmatgvjjy/image/upload/v1661886084/mundoFlotante/si_oe6nzq.jpg" alt="Mundo Flotante" />
          </div>
        </div>
      </section>

    </>
  );
};

export default Bio;
