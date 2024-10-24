import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { storeUrl } from "../../utilts/url";

const initialState = {
  loading: false,
  products: [],
};

export const getAllProducts = createAsyncThunk("login", async () => {
  const response = await axios.get(`${storeUrl}`);
  return response.data;
});

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //  GET ALL PRODUCTS
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(getAllProducts.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default productSlice.reducer;
