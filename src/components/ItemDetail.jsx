import React, {useState} from 'react';
import { useCartContext } from '../context/CartContext';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';



// recibe inf de ItemDetailcontainer

export const ItemDetail = ({data}) => {
  const [goToCart, setGoToCart] = useState(false);
  const {addProduct} = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(data, quantity);
    }
  
  return (
    <div className='container'>
        <div className='card'>
            <img className='card-img-top' src={data.image} alt="obra de arte" />
            <div className='card-body'>
                <h4 className="card-title">{data.title}</h4>
                <p className="card-text"><strong>$: </strong>{data.price}</p>
                {
                  goToCart
                  ?<Link to='carrito' className="btn btn-primary">Terminar compra</Link>
                  :<ItemCount initial={1} stock={5} onAdd={onAdd} />

                }
            </div>
        </div>
    </div>
  );
}

export default ItemDetail