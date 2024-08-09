import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addNewBranch, getBranchByPage } from "../../api/branch";

export const fetchDataBranch = createAsyncThunk(
  "branch/fetchData",
  async () => {
    const response = await getBranchByPage();
    return response;
  }
);

const initialState = {
  data: [],
  loading: false,
};

const branchSlice = createSlice({
  name: "branch",
  initialState,
  reducers: {
    addBranch: (state, action) => {
      state.data = [action.payload, ...state.data];
    },
    updateBranchAction: (state, action) => {
      const { id, name } = action.payload;
      const index = state.data.findIndex((branch) => branch.id === id);
      if (index === -1) {
        state.data[index].name = name;
      }
    },
    deleteBranchAction: (state, action) => {
      const { id } = action.payload;
      state.data = state.data.filter((branch) => branch.id !== id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataBranch.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchDataBranch.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
      })
      .addCase(fetchDataBranch.rejected, (state, action) => {
        state.loading = false;
        state.data = [];
        console.log(action.error);
      });
  },
});

export const { addBranch, updateBranchAction, deleteBranchAction } =
  branchSlice.actions;

export default branchSlice.reducer;
