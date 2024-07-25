import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detail: "Student",
};

export const dashBoardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setDetail: (state, action) => {
      state.detail = action.payload;
    },
  },
});

export const { setDetail } = dashBoardSlice.actions;

export default dashBoardSlice.reducer;
