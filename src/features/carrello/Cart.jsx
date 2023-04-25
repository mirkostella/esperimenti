import {React, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectorCartItems } from '../features/carrello/cartSlice';
import { addItem } from '../features/carrello/cartSlice';

const Cart=()=>{
    const valoreCarrello=useSelector(selectorCartItems);
    const [inputText,setInputText]=useState("");
    const handleChange=(event)=>{setInputText(event.target.value)};
    const dispatch=useDispatch();
    const listItems= valoreCarrello.map((item)=> <li key={item.id}>{item.colore}</li>);
    return(
        <>
        <input type="text" id="testo" onChange={handleChange}></input>
        <button onClick={()=>dispatch(addItem(inputText))}>aggiungi oggetto giallo</button>
        <div className="App">
            <ul>{listItems.length>0? listItems : "carrello vuoto"}</ul>
        </div>
        </>
    ); 
}

export default Cart;



