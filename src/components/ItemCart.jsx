import React from 'react';
import { useCartContext } from '../context/CartContext';
import '../scss/itemCart.scss';

const ItemCart = ({product}) => {
const {removeProduct} = useCartContext();

  return (
    <div className='itemCart'>
      <img src={product.image} alt={product.title} />
      <div>
        <p>Titulo: {product.title}</p>
        <p>cantidad: {product.stock}</p>
        <p>Precio u.: {product.price}</p>
        <p><strong>Subtototal $:</strong>{product.price * product.price}</p>
        <button onClick={() => removeProduct(product.id)}>Eliminar producto</button>
      </div>
    </div>
  )
}

export default ItemCart;