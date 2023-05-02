import {React} from 'react';
import {useDispatch} from 'react-redux';
import {removeItem} from './cartSlice';
import ChangeColorItem from './ChangeColorItem';


const CartItem=(props)=>{
    const dispatch=useDispatch();
    return(
        <>
            <li className='cartItem'>
                <div className='textmargin'>Nome: {props.name}</div>
                <div className='textmargin'>Colore: {props.selectedColor}</div>
                <div className='textmargin'>Quantita: {props.quantity}</div>
                <ChangeColorItem id={props.id} variantsColor={props.variantsColor} selectedColor={props.selectedColor} />
                <button onClick={()=>dispatch(removeItem({id:props.id,price: props.basePrice}))}>X</button>
            </li>
        </>
    ); 
}
export default CartItem;