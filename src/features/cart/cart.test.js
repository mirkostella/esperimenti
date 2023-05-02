import { addItem } from "./cartSlice";
import reducer from "./cartSlice";


test('add an item to cart', () => {
    const item1={
        color:'blue',
        price: 15
    };
    const item2={
        color:'red',
        price: 30
    };
    const initialState={
        cartItems: [],
        count: 0,
        totalCost: 0
    };

    const expectedState={
        cartItems: [{id:0,color:"red",price: 30},{id:1,color:"blue",price: 15},],
        count: 2,
        totalCost: 45
    };
    const secondState=reducer(initialState,addItem(item2));
    const nextState=reducer(secondState,addItem(item1));
    expect(nextState).toEqual(expectedState);
  });