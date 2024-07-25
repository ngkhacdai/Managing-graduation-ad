import { configureStore } from "@reduxjs/toolkit";
import dashBoardReducer from "./slice/DashBoard.slice";

export const store = configureStore({
  reducer: {
    dashBoard: dashBoardReducer,
  },
});
