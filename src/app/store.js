import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
//generally this configureStore() takes objects
export const store = configureStore({
  reducer: todoReducer,
});
