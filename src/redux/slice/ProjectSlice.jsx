import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProjectNotDone } from "../../api/project";
const initialState = {
  project: [],
  filter: [],
  searchInput: "",
};

export const fetchProject = createAsyncThunk(
  "librarySlice/fetchProject",
  async () => {
    const response = await getProjectNotDone();
    return response;
  }
);

const projectSlice = createSlice({
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

export const { saveFilter } = projectSlice.actions;

export default projectSlice.reducer;
