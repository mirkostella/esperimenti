import {React} from 'react';
import {useDispatch} from 'react-redux';
import {removeItem} from './cartSlice';


const CartItem=(props)=>{
    const dispatch=useDispatch();
    return(
        <>
            <li className='cartItem'>
                <div className='textmargin'>Nome: {props.name}</div>
                <div className='textmargin'>Quantita: {props.quantity}</div>
                <button onClick={()=>dispatch(removeItem({id:props.id,price: props.price}))}>X</button>
            </li>
        </>
    ); 
}
export default CartItem;