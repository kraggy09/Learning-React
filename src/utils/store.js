import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;

//Complete process of Creating a Store and Slice

/*
Create a Store
-configureStore()
    --import from rtk
Provide my store to the App
-<Provider store={store} ></Provider> 
    --import from react-redux


Create a Slice
-createSlice()
    --import from rtk
    --needs
        ---name
        ---initialState
        ---reducers
    --export
        ---default cartSlice.reducers
        ---named export=cartSlice.actions

Using Slice in our Store
-In configureStore()
    --We will use
        ---reducer:{
            cart:cartSice
            user:userSlice
        }
*/
