import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productReducer";
import cartSlice from "./cartSlice";


export const store = configureStore({
    reducer: {
        // Add the reducer here
        products:productReducer,
        cart:cartSlice
    }
})