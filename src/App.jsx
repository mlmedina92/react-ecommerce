import "./scss/app.scss";
import "./scss/inicio.scss";
import "./scss/footer.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import ItemDetailcontainer from "./containers/ItemDetailContainer";
import ItemListcontainer from "./containers/ItemListContainer";
import NavBar from "./components/NavBar";
import CartProvider from "./context/CartContext";
import Copyright from "./components/Copyright";
import FooterLinks from "./components/FooterLinks";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Bio from "./components/Bio";

//Importo elemento BrowserRouter: ambito donde usar react-router-dom. Provee toda la funcionalidad a sus hijos.
//Creo rutas (endpoints) que se usan dentro del elemento routes. Cada ruta es un roote que va a tener 2 props una el nombre de la ruta (path) y la otra qué elemento queres renderizar(element).
//Lo q este fuera de routes va a estar siempre en la pantalla (No se recarga. Se recarga cada route.)
//CONTEXT: Sirve para guardar datos y comunicarlos entre componentes que no son padres e hijos. Por ej el ItemListContainer le pasa datos al Item sin pasar por prop al itemlist. Ese pasaje es posible creando contextos. Context es un objeto.
//Carrito: buena opción para context porque lo vamos a necesitar en muchos componentes. No seria buena práctica hacer un pasamano de props entre todos. Al carrito lo necesitamos en el comp Cart, ItemDetailContainer(donde damos clik para agregar al carrito)
//Para comunicar datos a:- Item qe esta dentro de itemlistcontaniner y a su vez dentro del itemlist y a:-  Cartwidgt que esta dentro del cart

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        {/* Cada ruta va a renderizar distintos componentes. Como quiero que el navbar este siempre, no importa la ruta no lo pongo en una ruta, sino fuera de routes.*/}
        <CartProvider>
          <header className="sticky-top">
            <NavBar />
          </header>
          <main className="container-fluid">
            <Routes>
              {/* Dentro creo las url, rutas: Algunas son dinamicas y dependiendo de la ruta que escriba es lo q se renderiza*/}
              {/* si no usara context el valor que esté en App lo tendria q pasar por prop a ItemLisContainer desp a ItemList y desp a Item:te salteas 2 componentes */}
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
        <footer className="footer">
          <FooterLinks />
        </footer>
        <Copyright />
      </BrowserRouter>
    </div>
  );
}

export default App;
