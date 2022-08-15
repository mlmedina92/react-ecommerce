import './styles/itemdetail.css';
import React, {useState} from 'react';
import { useCartContext } from '../context/CartContext';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';



// recibe inf de ItemDetailContainer

export const ItemDetail = ({data}) => {
  const [goToCart, setGoToCar] = useState(false);
  const {addProduct} = useCartContext();

  const onAdd = (quantity) => {
    setGoToCar(true);
    addProduct(data, quantity);
    }
  
  return (
    <div className='container'>
        <div className='detail'>
            <img className='detail__img' src={data.img} alt="caca" />
            <div className='content'>
                <h1>{data.title}</h1>
                {
                  goToCart
                  ?<Link to='cart'>Terminar compra</Link>
                  :<ItemCount initial={1} stock={5} onAdd={onAdd} />

                }
            </div>
        </div>
    </div>
  );
}

export default ItemDetail