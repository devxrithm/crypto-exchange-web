import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    data: false,
  },
  reducers: {
    isLoggedIn: (state) => {
      state.data = !state.data;
    },
    logout: (state) => {
      state.data = false;
    },
  },
});

export const { isLoggedIn, logout } = authSlice.actions;
export default authSlice.reducer;
