import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllTeacherAPI } from "../../api/teacher";

export const getAllTeacher = createAsyncThunk(
  "teacher/getAllTeacher",
  async () => {
    const response = await getAllTeacherAPI();
    return response;
  }
);

const initialState = {
  teacherData: [],
  loading: true,
};

const teacherSlice = createSlice({
  name: "teacher",
  initialState,
  reducers: {
    addTeacherAction: (state, action) => {
      state.teacherData = [action.payload, ...state.teacherData];
    },
    updateTeacherAction: (state, action) => {
      const { id, email, status, userName } = action.payload;
      const index = state.teacherData.findIndex((teacher) => teacher.id === id);

      if (index !== -1) {
        state.teacherData[index].userName = userName;
        state.teacherData[index].email = email;
        state.teacherData[index].role = "TEACHER";
        state.teacherData[index].status = status;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllTeacher.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAllTeacher.fulfilled, (state, action) => {
        state.loading = false;
        state.teacherData = action.payload;
      })
      .addCase(getAllTeacher.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error);
        state.teacherData = [];
      });
  },
});

export const { addTeacherAction, updateTeacherAction } = teacherSlice.actions;

export default teacherSlice.reducer;
