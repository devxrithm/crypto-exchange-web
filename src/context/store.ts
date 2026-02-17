import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import orderReducer from "./features/orderSlice";
import walletReducer from "./features/walletSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    order:orderReducer,
    wallet:walletReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;