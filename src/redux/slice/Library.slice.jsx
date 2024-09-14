import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  filterProjectDone,
  getProjectDone,
  updateStatus,
} from "../../api/project";
const initialState = {
  project: [],
  filter: {
    branch: [],
    status: [],
  },
  searchInput: "",
};

export const fetchProject = createAsyncThunk(
  "librarySlice/fetchProject",
  async () => {
    const response = await getProjectDone();
    return response;
  }
);
export const updateStatusProject = createAsyncThunk(
  "projectSlice/updateStatusProject",
  async (form) => {
    await updateStatus(form);
    return form;
  }
);
export const fillter = createAsyncThunk("librarySlice/filter", async (form) => {
  const response = await filterProjectDone(form);
  return response;
});
const librarySlice = createSlice({
  name: "librarySlice",
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
    builder.addCase(updateStatusProject.fulfilled, (state, action) => {
      const findProject = state.project.findIndex(
        (item) => item.id === Number(action.payload.projectId)
      );
      if (findProject !== -1) {
        state.project[findProject].point = action.payload.newPoint;
        state.project[findProject].public = action.payload.publicProject;
      }
    });
  },
});

export const { saveFilter, saveSearchInput } = librarySlice.actions;

export default librarySlice.reducer;
