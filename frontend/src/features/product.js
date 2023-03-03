import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductService from "../app/service/product";

export const initialState = [];

export const retrieveProduct = createAsyncThunk(
  "product",
  async () => {
    const res = await ProductService.getAll();
    return res.data.products;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [retrieveProduct.fulfilled]: (state, action) => {
      return [...action.payload];
    }
  }
});

export default productSlice.reducer;