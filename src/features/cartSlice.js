import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  money:90000,
  total:0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      
      const { id } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem) {
        existingItem.count += 1;
      } else {
        state.cart.push({ ...action.payload, count: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    deleteFromCart(state, action) {
      const  id  = action.payload;
      state.cart = state.cart.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    updateCartItem(state, action) {
      const { id, flag } = action.payload;
      console.log(id, flag)
      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem) {
        if (flag === 0 && existingItem.count > 1) {
          existingItem.count -= 1;
        } else {
          existingItem.count += 1;
        }
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    checkOut(state,action) {
       if(state.money>=action.payload){
           state.cart = []
           state.money = state.money - action.payload;
           action.payload = 0;
          
           localStorage.setItem("cart", JSON.stringify(state.cart));
       }
       else{
           alert("Not enough money")
         }
    },
}});

export const { addToCart, deleteFromCart, updateCartItem ,checkOut} = cartSlice.actions;
export default cartSlice.reducer;