import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    data: null,
  },
  reducers: {
    isLoggedIn: (state, action) => {
      state.data = action.payload;
    },
    logout: (state) => {
      state.data = null;
    },
  },
});

export const { isLoggedIn, logout } = authSlice.actions;
export default authSlice.reducer;
