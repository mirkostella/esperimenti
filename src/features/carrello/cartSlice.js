import { createSlice } from "@reduxjs/toolkit";



const initialState={
    cartItems: [],
    count: 0,
    totalCost:0

};

const cartSlice=createSlice({
    name: 'carrello',
    initialState,
    reducers: {
        addItem:(state,action)=>{
            state.cartItems.push({id:state.count,color:action.payload.color,price: action.payload.price});
            state.totalCost+=action.payload.price;
            state.count+=1;
    },
    // removeItem: (state,action)=>{
            
    // },
    // removeItem: (state)=>{
            
    // },
    }
});
export const {addItem}=cartSlice.actions;
export const selectorCartItems=(state)=>state.carrello.cartItems;
export default cartSlice.reducer;