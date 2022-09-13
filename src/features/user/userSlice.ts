import { createSlice } from "@reduxjs/toolkit";

// Temp data
import tempData from "../../assets/data/data.json";

const initialState = {
  currentUser: tempData.currentUser,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
