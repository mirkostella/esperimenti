import { createSlice } from "@reduxjs/toolkit";

const initialState={
    products: [
        {
        id:0,name:"gelato",
        basePrice: 2,
        category:"surgelati",
        selectedColor:"green",
        variantsColor:["red","blue","green"]
        },
        {
        id:1,name:"caffe",
        basePrice: 1,
        category:"polvere",
        selectedColor:"red",
        variants:["red"]
        },
        {
        id:2,name:"patatine",
        basePrice: 3,
        category:"snak",
        selectedColor:"blue",
        variants:["blue","green"]
        },
        {   
        id:3,
        name:"carta",
        basePrice: 5,
        category:"consumo",
        selectedColor:"blue",
        variants:["blue"]
        }
    ],
    cartProducts:[],
    countID: 4
};

const productsSlice=createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct:(state,action)=>{
            state.products.push({
                id:state.countID,
                name:action.payload.name,
                basePrice:action.payload.basePrice,
                category:action.payload.category
            });
            state.countID+=1;
        },
        changeColor:(state,action)=>{
            const indexProduct=state.products.findIndex((product)=>product.id==action.payload.id);
            state.products[indexProduct].selectedColor=action.payload.color;
        }
    }
});
export const {addProduct,changeColor}=productsSlice.actions;
export const selectorProducts=(state)=>state.products.products;
// export const selectorProductsByID=(state,id)=>state.products.products.find(item.id===id);

export default productsSlice.reducer;