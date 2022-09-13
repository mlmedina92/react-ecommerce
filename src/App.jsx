import "./scss/app.scss";
import "./scss/inicio.scss";
import "./scss/footer.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import ItemDetailcontainer from "./containers/ItemDetailContainer";
import ItemListcontainer from "./containers/ItemListContainer";
import NavBar from "./components/NavBar";
import CartProvider from "./context/CartContext"; //importo CartProvider (componente)
import Copyright from "./components/Copyright";
import FooterLinks from "./components/FooterLinks";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Bio from "./components/Bio";
import FormOc from "./components/FormOc";

//RUTEO: Importo elemento BrowserRouter: ambito donde usar react-router-dom. Provee funcionalidad a sus hijos. Creo rutas dentro del elemento routes: Cada roote es una ruta que va a tener 2 props una el nombre de la ruta (path) y qué componente queres renderizar o mostrar cuando se llama a la misma. Lo que este fuera de routes va a estar siempre en la pantalla (No se recarga. Se recarga cada route.) Por ej. fuera dejo al NavBar y al Footer.



function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <CartProvider>
        {/* importo CartProvider que dentro tiene el CartContext */}
        {/* envuelvo en CartProvider todo lo que lo vaya a usar, todos sus hijos pasan como props children a CartProvider que esta en CartContext . En el NavBar está el carrito */}
          <header className="sticky-top">
            <NavBar />
          </header>
          <main className="container-fluid">
            <Routes>
              {/* Dentro de BrowserRouter creo las url, rutas: Algunas son dinamicas y dependiendo de la ruta que escriba es lo q se renderiza---> solo creo las rutas pero no el enlace entre este link y la ruta*/}
              
              <Route path="/" element={<Home />} />
              {/* ruta dinamica: lo q va desp de : es una variable con valor dinamico, para que me muestre sólo los productos de ItemListcontainer con los valores de categoriaId que le pido-
              categoriaId es un objeto--> {categoriaId: "ilustraciones"} posibels valores de la key " ", "ilustraciones", "murales" */}
              <Route
                path="/categoria/:categoriaId"
                element={<ItemListcontainer />}
              />
              <Route
                path="/detalle/:detalleId"
                element={<ItemDetailcontainer />}
                // No siempre me va a llevar al mismo detalle, es dinamico
              />
              <Route path="/carrito" element={<Cart />} />
              <Route path="/checkout" element={<FormOc />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/sobre-mi" element={<Bio />} />
            </Routes>
          </main>
        </CartProvider>
        <footer className="footer">
          <FooterLinks />
        </footer>
        <Copyright />
      </BrowserRouter>
    </div>
  );
}

export default App;
