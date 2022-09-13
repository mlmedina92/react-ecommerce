import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Swal from "sweetalert2";
import { useCartContext } from "../context/CartContext";

const FormOc = () => {
    const { cart, totalPrice } = useCartContext();
  //const [datosorm, setDatosForm] = useState(initialState);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [adress, setAdress] = useState("");

  //const [x, setX] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(event.target.elements.nombre.value);
    //console.log(event.target.elements.apellido.value);
    //console.dir(event.target);
   //enviar la info a la base de datos
    debugger;
    const order = {
        //datos hardcodeados de oc
        buyer: {
          name: nombre,
          apellido: apellido,
          email: mail,
          phone: phone,
          adress: adress,
        },
        items: cart.map((product) => ({
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: product.quantity,
        })),
        total: totalPrice(),
      };
    
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order)//metodo post para agregar inf a firebase
     .then(({ id }) => console.log (id));
    Swal.fire({
      title: "Su orden de compra se cargó con éxito!",
      text: "Gracias por ser parte de este Mundo flotante",
      imageUrl:
        "https://res.cloudinary.com/dmatgvjjy/image/upload/v1661885787/mundoFlotante/20211112_180955_2_1_mkaban.jpg",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
  };

  // const handleChange = () => {
  //     name y value de cada input
  // }

  const handleChangeNombre = (event) => {
    //console.log(event.target.value);
    setNombre(event.target.value);
  };

  const handleChangeApellido = (event) => {
    setApellido(event.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleChangeMail = (e) => {
    setMail(e.target.value);
  };

  const handleChangeAdress = (e) => {
    setAdress(e.target.value);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <legend className="fs-6 mb-3">
        Gracias por su interés en el trabajo de Mundo Flotante. Complete el
        formulario para terminar con su compra.
      </legend>
      <input
        className="form-control required"
        type="text"
        placeholder="Nombre..."
        name="nombre"
        value={nombre}
        onChange={handleChangeNombre}
      />
      <input
        className="form-control required"
        type="text"
        placeholder="Apellido..."
        name="apellido"
        value={apellido}
        onChange={handleChangeApellido}
      />
      <input
        className="form-control required"
        type="tel"
        placeholder="Número de Teléfono"
        name="phone"
        value={phone}
        onChange={handleChangePhone}
      />

      <input
        className="form-control required"
        type="mail"
        placeholder="E-mail"
        name="email"
        value={mail}
        onChange={handleChangeMail}
      />

      <input
        className="form-control required"
        type="text"
        placeholder="Dirección de entrega"
        name="adress"
        value={adress}
        onChange={handleChangeAdress}
      />
      <button className="btn btn-primary" type="submit">Enviar</button>
    </form>
  );
};

export default FormOc;
