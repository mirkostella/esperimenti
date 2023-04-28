
import {React} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem,removeAllItems,selectorCartItems,selectorTotalCost} from './cartSlice';
import {selectorProducts} from '../products/productsSlice'
import CartItem from './CartItem'
import './style.css';

export const Cart=()=>{
    const dispatch=useDispatch();
    const allProducts=useSelector(selectorProducts);
    const allCartItems=useSelector(selectorCartItems);
    const listCartItems=[];
    const detailsCartItems=[];
//lista di tutti i prodotti disponibili
    const listLProducts= allProducts.map((item)=> <button key={item.id} onClick={()=>dispatch(addItem({id:item.id,basePrice: item.basePrice}))}>
        {item.name}</button>);
        
    const getDetailsCartItems=(item)=>{
        let detailsItem=allProducts.find((product)=>product.id==item.id);
        if(typeof detailsItem !== "undefined"){
            detailsCartItems.push(detailsItem);
        }
    };
    //per ogni elemento presente all'interno del carrello ricavo i dettagli
    allCartItems.forEach(getDetailsCartItems);
    //per ogni elemento presente all'interno del carrello creo il componente react
    detailsCartItems.map((item,index)=>{ 
        const quantityItem=allCartItems.find((cartItem)=>cartItem.id==item.id).quantity;
        listCartItems.push(<CartItem key={index} id={item.id} quantity={quantityItem} name={item.name} price={item.basePrice} />);
    });
    //ricavo il costo totale del carrello
    const totalCost= useSelector(selectorTotalCost);
    return(
        <>
        <div className="App" id='cart'>
            <div className='textmargin'>Oggetti disponibili:</div>
            <div id='oggettiPresenti'>
            {listLProducts.length>0? listLProducts : "Non ci sono prodotti disponibili"}
            </div>
            <div className='textmargin'>Oggetti presenti nel carrello:</div>
            <ul id='cartItem'>{listCartItems.length>0? listCartItems : <div className='textmargin'>Il carrello e' vuoto</div>}</ul>
            <div className='textmargin'>Totale: {totalCost}</div> 
            <button id='svuotaCarr' onClick={()=>dispatch(removeAllItems())}>Svuota carrello</button>
        </div>
        </>
    ); 
}