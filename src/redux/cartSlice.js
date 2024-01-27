import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { cartItems: [] },
  reducers: {

    incrementItemQuantity: (state, action) => {
      const item = state.cartItems.find((item)=> item.id === action.payload.cartItemId)
      if(item) {
        item.quantity += 1;
        item.totalPrice = item.quantity * item.pricePerItem
      }
    },

    decrementItemQuantity: (state, action) => {
      const item =  state.cartItems.find((item)=> item.id === action.payload.cartItemId)
      if (item && item.quantity > 1){
        item.quantity -= 1;
        item.totalPrice = item.quantity * item.pricePerItem;
      }
    },


    addItemToCart: (state, action) => {
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.itemId === action.payload.item.id
      );

      if (existingCartItem) {
        existingCartItem.quantity += action.payload.quantity;
        existingCartItem.totalPrice = existingCartItem.quantity * action.payload.item.price;
      } else {
        const timeId = new Date().getTime();
        state.cartItems.push({
          id: timeId,
          itemId: action.payload.item.id,
          quantity: action.payload.quantity,
          totalPrice: action.payload.quantity * action.payload.item.price,
          pricePerItem: action.payload.item.price
        });
      }
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.cartItemId
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    

    updateCartFromLocalStorage: (state, action) => {
      state.cartItems = action.payload;
    },
    updateCartFromDatabase: (state, action)=>{
      state.cartItems = action.payload;
    },

  },
});

export const getTotalPrice = (state) => {
  return state.cart.cartItems.reduce((total, cartItems) => {
    return cartItems.totalPrice + total;
  }, 0);
};

export const getTotalItems = (state) => {
  return state.cart.cartItems.reduce((total, item)=> total + item.quantity, 0)
};
export const getCartItems = (state) => state.cart.cartItems;
export const { addItemToCart, removeItemFromCart, updateCartFromLocalStorage, updateCartFromDatabase, incrementItemQuantity, decrementItemQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
