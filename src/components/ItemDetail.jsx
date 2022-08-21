import '../scss/itemDetail.scss';
import React, {useState} from 'react';
import { useCartContext } from '../context/CartContext';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';



// recibe inf de ItemDetailContainer y 

export const ItemDetail = ({data}) => {
  const [goToCart, setGoToCart] = useState(false);
  const {addProduct} = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(data, quantity);
    }
  
  return (
    <div className='container'>
        <div className='detail'>
            <img className='detail__img' src={data.img} alt="foto" />
            <div className='content'>
                <h1>{data.title}</h1>
                {
                  goToCart
                  ?<Link to='carrito'>Terminar compra</Link>
                  :<ItemCount initial={1} stock={5} onAdd={onAdd} />

                }
            </div>
        </div>
    </div>
  );
}

export default ItemDetail