import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllTeacherAPI, searchTeacher } from "../../api/teacher";

export const getAllTeacher = createAsyncThunk(
  "teacher/getAllTeacher",
  async () => {
    const response = await getAllTeacherAPI();
    return response;
  }
);
export const searchTeacherThunk = createAsyncThunk(
  "student/searchStudent",
  async (form) => {
    const response = await searchTeacher(form);
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
      const { accountId, email, status, userName, limitOfMentees } =
        action.payload;
      const index = state.teacherData.findIndex(
        (teacher) => teacher.accountId === accountId
      );
      if (index !== -1) {
        state.teacherData[index].userName = userName;
        state.teacherData[index].email = email;
        state.teacherData[index].status = status;
        state.teacherData[index].limitOfMentees = limitOfMentees;
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
    builder.addCase(searchTeacherThunk.fulfilled, (state, action) => {
      state.teacherData = action.payload;
    });
  },
});

export const { addTeacherAction, updateTeacherAction } = teacherSlice.actions;

export default teacherSlice.reducer;
