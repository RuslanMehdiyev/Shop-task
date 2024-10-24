import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import productSlice from "./features/productsSlice";
import basketSlice from "./features/basketSlice";
export const store = configureStore({
  reducer: {
    authSlice,
    productSlice,
    basketSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
