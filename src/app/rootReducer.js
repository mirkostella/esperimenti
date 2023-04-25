import { combineReducers } from '@reduxjs/toolkit';
import cartSlice from '../features/carrello/cartSlice';

const rootReducer = combineReducers({
	carrello: cartSlice
})

export default rootReducer;
