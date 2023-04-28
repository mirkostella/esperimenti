import { combineReducers } from '@reduxjs/toolkit';
import cartSlice from '../features/cart/cartSlice';
import productSlice from '../features/products/productsSlice';

const rootReducer = combineReducers({
	cart: cartSlice,
	products: productSlice

})

export default rootReducer;
