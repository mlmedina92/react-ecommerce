import "./scss/inicio.scss";
import "./scss/app.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import ItemDetailcontainer from "./components/ItemDetailContainer";
import ItemListcontainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import CartProvider from "./context/CartContext";
import Copyright from "./components/Copyright";
import FooterLinks from "./components/FooterLinks";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Bio from "./components/Bio";

//importo BrowserRouter: creo el ambito donde poder utilizar react-router-dom ( ese ambito es el elemento BrowserRouter q va a proveer de todas las funcionalidad a sus hijos)
//creo las rutas, los endpoints que se usan dentro del elemento routes y cada ruta es un roote q va a tener 2 props una la ruta, como vas a llamarla(path) y la otra qué elemento queres renderizar(element).
//lo q este fuera de routes va a estar siempre en la pantalla(Es lo que no se recarga, se recarga cada route.)
//CONTEXT: nos sirve para guardar datos y comunicarlos entre componentes q no tienen pq ser padres e hijos. Si por ej el itemListcontainer-fluid necesita pasarle datos al item, tenemos q pasar por prop al itemlist , el cual no los va a usar y va a pasarlo por prop al item, ese pasaje no es necesario creando contextos. Context es un objeto.
//el carrito es una buena opción para un contexto pq es algo q vamos a necesitar en muchos componentes y no seria buena practica hacer un pasamano de props por todos lados. Al carrito lo necesitamos en el comp cart, itemdetailcontainer-fluid pq es donde vamos a dar clik para agregar al carrito .
//queremos comunicar datos a:- item qe esta dentro de itemlistcontaniner y a su vez dentro del itemlist y a:-  cartwidgt que esta dentro del cart

function App() {
  return (
    <>
      <BrowserRouter>
        {/* En las distintas rutas va a renderizar distintos componentes pero yo quiero que el navbar este siempre, no importa la ruta.Por eso no pongo el navbar en una ruta sino fuera de routes. Esas partes son dinamicas y dependiendo de la ruta q escriba es lo quiero q se renderice*/}
        {/* si no usara context este value "pablo" q esta en app lo tendria q pasar por prop a itemliscontainer-fluid desp a itemlist y desp a item , asi te salteas 2 componentes  */}
        <CartProvider>
          <header className="container-fluid sticky-top">
            <NavBar />
          </header>
          <main className="container-fluid">
            <Routes>
              {/* adentro creo las url, rutas */}
              <Route path="/" element={<Home />} />
              {/* ruta dinnamica: lo q va desp de dos puntos es una variable, algo dinamico */}
              <Route
                path="/categoria/:categoriaId"
                element={<ItemListcontainer />}
              />
              <Route
                path="/detalle/:detalleId"
                element={<ItemDetailcontainer />}
              />
              <Route path="/carrito" element={<Cart />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/sobre-mi" element={<Bio />} />
            </Routes>
          </main>
        </CartProvider>
      <footer>
        <FooterLinks />
      </footer>
      <Copyright />
      </BrowserRouter>
    </>
  );
}

export default App;
