import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { filterProjectNotDone, getProjectNotDone } from "../../api/project";

const initialState = {
  project: [],
  filter: {
    branch: [],
    status: [],
  },
  searchInput: "",
};

export const fetchProject = createAsyncThunk(
  "projectSlice/fetchProject",
  async () => {
    const response = await getProjectNotDone();
    return response;
  }
);

export const fillter = createAsyncThunk("projectSlice/filter", async (form) => {
  const response = await filterProjectNotDone(form);
  return response;
});

const projectSlice = createSlice({
  name: "projectSlice",
  initialState,
  reducers: {
    saveFilter: (state, action) => {
      const { branch, status } = action.payload;
      state.filter = {
        branch: branch || [],
        status: status || [],
      };
    },
    saveSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProject.fulfilled, (state, action) => {
      state.project = action.payload;
    });
    builder.addCase(fillter.fulfilled, (state, action) => {
      state.project = action.payload;
    });
  },
});

export const { saveFilter, saveSearchInput } = projectSlice.actions;

export default projectSlice.reducer;
