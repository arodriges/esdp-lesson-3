import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/productsSlice.ts';
import userReducer from "../features/userSlice.ts";

const store = configureStore({
  reducer: {
    products: productsReducer,
    user: userReducer,
  }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
