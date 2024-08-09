import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllStudentAPI } from "../../api/student";

export const getAllStudent = createAsyncThunk(
  "student/getAllStudent",
  async () => {
    const response = await getAllStudentAPI();
    return response;
  }
);

const initialState = {
  studentData: [],
  loading: false,
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addStudentAction: (state, action) => {
      state.studentData = [action.payload, ...state.studentData];
    },
    updateStudentAction: (state, action) => {
      const { id, email, status, userName, role } = action.payload;
      const index = state.studentData.findIndex((student) => student.id === id);

      if (index !== -1) {
        state.studentData[index].userName = userName;
        state.studentData[index].email = email;
        state.studentData[index].role = "STUDENT";
        state.studentData[index].status = status;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllStudent.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAllStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.studentData = action.payload;
      })
      .addCase(getAllStudent.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error);
        state.studentData = [];
      });
  },
});

export const { addStudentAction, updateStudentAction } = studentSlice.actions;

export default studentSlice.reducer;
