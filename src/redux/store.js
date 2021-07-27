import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import plantReducer from "./plantsSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    plants: plantReducer,
  },
});
