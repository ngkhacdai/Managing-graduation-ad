import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProjectDone } from "../../api/project";
const initialState = {
  project: [],
  filter: [],
  searchInput: "",
};

export const fetchProject = createAsyncThunk(
  "librarySlice/fetchProject",
  async () => {
    const response = await getProjectDone();
    return response;
  }
);

const librarySlice = createSlice({
  name: "librarySlice",
  initialState,
  reducers: {
    saveFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProject.fulfilled, (state, action) => {
      state.project = action.payload;
    });
  },
});

export const { saveFilter } = librarySlice.actions;

export default librarySlice.reducer;
