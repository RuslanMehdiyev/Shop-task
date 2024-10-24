import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { reqresUrl } from "../../utilts/url";

const initialState = {
  loading: false,
  error: null,
};

export const postLogin = createAsyncThunk(
  "login",
  async (loginData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${reqresUrl}/login`, loginData);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.error || "Login failed. Please try again."
      );
    }
  }
);

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    //  LOGIN
    builder.addCase(postLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postLogin.fulfilled, (state, action) => {
      state.loading = false;
      action.payload.token &&
        localStorage.setItem("token", JSON.stringify(action.payload.token));
    });
    builder.addCase(postLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;
