import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "fetures/sidebarSlice";
import userReducer from "fetures/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    sidebar: sidebarReducer,
  },
});
