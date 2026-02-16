import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WalletState {
  isChanging: boolean;
  data: any[];
}

const initialState: WalletState = {
  isChanging: false,
  data: [],
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    changeWalletState: (state, action: PayloadAction<any[]>) => {
      state.isChanging = true;
      state.data = action.payload;
    },
    resetWalletChange: (state) => {
      state.isChanging = false;
      state.data = [];
    },
  },
});

export const { changeWalletState, resetWalletChange } = walletSlice.actions;
export default walletSlice.reducer;