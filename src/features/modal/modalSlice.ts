import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isVisible: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    ////////////////////////////////////
    // Toggle visibility
    toggleVisibility: (state) => {
      state.isVisible = !state.isVisible;
    },
  },
});

export const { toggleVisibility } = modalSlice.actions;

export default modalSlice.reducer;
