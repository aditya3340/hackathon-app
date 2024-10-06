import { configureStore } from "@reduxjs/toolkit";
import submissionReducer from "../Features/Submission/submissionSlice";

export const store = configureStore({
  reducer: { submission: submissionReducer },
});
