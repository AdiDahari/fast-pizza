import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existing = state.cart.find(
        (pizza) => pizza.pizzaId === action.payload.pizzaId
      );

      if (existing) {
        existing.totalPrice += action.payload.unitPrice;
        ++existing.quantity;
      } else {
        state.cart.push(action.payload);
      }
    },
    deleteItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity: (state, action) => {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      ++item.quantity;
      item.totalPrice = item.unitPrice * item.quantity;
    },
    decreaseItemQuantity: (state, action) => {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      if (item.quantity === 1) {
        state.cart = state.cart.filter(
          (item) => item.pizzaId !== action.payload
        );
      } else {
        --item.quantity;
        item.totalPrice -= item.unitPrice;
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const getCart = (state) => state.cart.cart;

export const getItemQuantity = (id) => (state) => {
  if (!state.cart?.cart) return 0;
  const existing = state.cart.cart.find((item) => item.pizzaId === id);

  if (!existing) return 0;

  return existing.quantity;
};
export const getTotalQuantity = (state) =>
  state.cart.cart.reduce((acc, item) => (acc += item.quantity), 0);
export const getTotalPrice = (state) =>
  state.cart.cart.reduce((acc, item) => (acc += item.totalPrice), 0);

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
