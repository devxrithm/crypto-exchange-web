import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WalletState {
  isWalletChanging: boolean;
  data: any[];
}

const initialState: WalletState = {
  isWalletChanging: false,
  data: [],
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    changeWalletState: (state, action: PayloadAction<any[]>) => {
      state.isWalletChanging = true;
      state.data = action.payload;
    },
    resetWalletChange: (state) => {
      state.isWalletChanging = false;
      state.data = [];
    },
  },
});

export const { changeWalletState, resetWalletChange } = walletSlice.actions;
export default walletSlice.reducer;