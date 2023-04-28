import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      state.items = [];
    },
  },
});

export default cartSlice.reducer;
//Always export reducer and not reducers
export const { addItem, removeItem, clearCart } = cartSlice.actions;
//Always export actions and not action
//Just take care of both the reducer and actions
/*
    Behind the scene for Redux 
    Approximately this is how it would have looked behind the scene for a Slice
    cartSlice={
        actions:{
            addItem,
            removeItem,
            clearCart
        },
        reducer:reducers
    }
*/

//This is how we will create a Slice
