import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  name: "",
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserId: (state, action) => {
      state._id = action.payload._id;
    },
    updateUserName: (state, action) => {
      state.name = action.payload.name;
    },
    updateUserEmail: (state, action) => {
      state.email = action.payload.email;
    },
    clearUser: (state) => {
      state = {
        _id: "",
        name: "",
        email: "",
      };
    },
  },
});

export const { updateUserId, updateUserName, updateUserEmail, clearUser } =
  userSlice.actions;
export default userSlice.reducer;
