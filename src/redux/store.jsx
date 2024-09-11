import { configureStore } from "@reduxjs/toolkit";
import dashBoardReducer from "./slice/DashBoard.slice";
import BranchReducer from "./slice/BranchSlice";
import StudentReducer from "./slice/StudentSlice";
import TeacherReducer from "./slice/TeacherSlice";
import LibraryReducer from "./slice/Library.slice";
import ProjectReducer from "./slice/ProjectSlice";
import SessionReducer from "./slice/SessionSlice";
export const store = configureStore({
  reducer: {
    dashBoard: dashBoardReducer,
    branch: BranchReducer,
    student: StudentReducer,
    teacher: TeacherReducer,
    library: LibraryReducer,
    project: ProjectReducer,
    session: SessionReducer,
  },
});
