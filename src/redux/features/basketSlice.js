import { createSlice } from "@reduxjs/toolkit";

const getLocalStorageBasket = () =>
  JSON.parse(localStorage.getItem("basket")) || [];
const setLocalStorageBasket = (basket) =>
  localStorage.setItem("basket", JSON.stringify(basket));

const initialState = {
  basket: getLocalStorageBasket(),
};

const basketSlice = createSlice({
  name: "basketSlice",
  initialState,
  reducers: {
    toggleProductInBasket: (state, action) => {
      const product = action.payload;
      const inBasket = state.basket.find((p) => p.id === product.id);

      state.basket = inBasket
        ? state.basket.filter((p) => p.id !== product.id)
        : [...state.basket, product];

      setLocalStorageBasket(state.basket);
    },
  },
});

export const { toggleProductInBasket } = basketSlice.actions;
export default basketSlice.reducer;
