import "./scss/inicio.scss";

import "./scss/app.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import CartProvider from "./context/CartContext";
import Copyright from "./components/Copyright";
import FooterLinks from "./components/FooterLinks";

//importo BrowserRouter: creo el ambiento donde poder utilizar react-router-dom , ese ambito es el elemento BrowserRouter q va a proveer de todas las funcionalidad a sus hijos
//creo las rutas, los endpoints que se usan dentro del elemento routes y cada ruta es un roote q va a tener 2 props una la ruta, como vas a llamarla(path) y la otra q elemento queres renderizar(element)
//lo q este feura de routes va a estar siempre en la pantalla
//context: nos sirve para guardar datos y comunicarlos entre componenetes q no tienen pq ser pdres e hijos, si por ej el itemlistcontainer necesita pasarle datos al item, tenemos q pasar por prop al itemlist , el cual no los va a usar y va a pasarlo por prop al item, ese pasaje no es necesario creando contextos
//el carrito es unabuena opcion para un conetxto pq es algo q vamos a necesitar en muchos componentes y no seria buena practica hacer un pasamano de props por todos lados. Al corrrito lo necsitamos en el comp cart, itemdetailcontainer pq es donde vamos a dar clik para agregar al carrito .
//queremos comunicar datos a:- item qe esta dentro de itemlistcontaninery a su vez dentro del itemlist y a:-  cartwidgt que esta dentro del cart
//context es un objeto

function App() {
  return (
    <>
      <BrowserRouter>
        {/* En las distintas rutas va a renderizar distintos componentes pero yo quiero que el navbar este siempre, no importa la ruta.Por eso no pongo el navbar en una ruta sino fuera de routes. Estas partes son dinamicas y dependiendo de la ruta q escriba es lo quiero q se renderice*/}
        {/* si no usara context este value "pablo" q esta en app lo tendria q pasar por prop a itemliscontainer desp a itemlist y desp a item , asi te salteas 2 componentes  */}
        <CartProvider>
          <NavBar />
          <section className="mb-5 inicio"></section>
          <main className="container">
            <Routes>
              {/* creo las url, rutas dentro */}
              <Route path="/" element={<ItemListContainer />} />
              {/* ruta dinnamica: lo q va desp de dos puntos es una variable es alg dinamico */}
              <Route
                path="/categoria/:categoriaId"
                element={<ItemListContainer />}
              />
              <Route path="/cart" element={<Cart />} />
              <Route
                path="/detalle/:detalleId"
                element={<ItemDetailContainer />}
              />
            </Routes>
          </main>
        </CartProvider>
      </BrowserRouter>
      <footer>
        <FooterLinks />
      </footer>
      <Copyright />
    </>
  );
}

export default App;
