import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: "order",
    initialState: {
        orderCount: 0,
    },
    reducers: {
        changeOrder: (state) => {
            state.orderCount += 1;
        },
        resetOrderChange: (state) => {
            state.orderCount = 0;
        }
    }
}
);

export const { changeOrder, resetOrderChange } = orderSlice.actions;
export default orderSlice.reducer;