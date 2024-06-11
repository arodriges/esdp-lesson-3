import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "@/containers/Products";
import { axiosApiClient } from "../helpers/axiosApiClient";

interface State {
  products: IProduct[];
  error: Error | null;
  loading: boolean;
}

const initialState: State = {
  products: [],
  error: null,
  loading: false
};

export const fetchProducts = createAsyncThunk('fetch/products', async () => {
  return await axiosApiClient.get<IProduct[]>('/products').then(res => res.data);
});

export const createProduct = createAsyncThunk('create/product', 
async (payload: FormData) => {
    const token = localStorage.getItem('token');
    return axiosApiClient.post<IProduct>("/products/create", payload, {headers: {'Authorization': token}})
      .then(res => res.data);
});

const productsSlice = createSlice(
  {
    name: 'products',
    initialState,
    reducers: {},
    extraReducers(builder) {
      builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      }).addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error as Error;
      })
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
    },
  }
)

export default productsSlice.reducer;
