import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSession } from "../../api/session";

const initialState = {
  sessionData: [],
  loading: false,
};

export const fetchSessionData = createAsyncThunk(
  "session/fetchSessionData",
  async () => {
    const response = await getSession();
    return response;
  }
);

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSessionData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchSessionData.fulfilled, (state, action) => {
        state.loading = false;
        state.sessionData = action.payload;
      });
  },
});

export default sessionSlice.reducer;
