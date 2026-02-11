import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: "order",
    initialState: {
        isChanging: false,
    },
    reducers: {
        changeOrder: (state) => {
            state.isChanging = true
        },
        resetOrderChange: (state) => {
            state.isChanging = false;
        }
    }
}
);

export const { changeOrder, resetOrderChange } = orderSlice.actions;
export default orderSlice.reducer;