import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  project: [],
  branch: [],
};

export const fetchProject = createAsyncThunk(
  "librarySlice/fetchProject",
  async () => {}
);

const librarySlice = createSlice({
  name: "librarySlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default librarySlice.reducer;
