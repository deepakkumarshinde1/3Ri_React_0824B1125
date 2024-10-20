import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "UserSlice",
  initialState: {
    newUserState: false,
    newUserDetails: {
      name: "",
      mobile: "",
      email: "",
      address: "Nashik",
      password: "",
    },
    userLogin: {
      email: "",
      password: "",
    },
  },
  reducers: {
    handelInput(state, action) {
      let { value, name } = action.payload;
      state.newUserDetails[name] = value;
    },
    updateUserState(state, action) {
      state.newUserState = action.payload;
    },
    saveUser() {},
  },
});

export default UserSlice;
export const { handelInput, updateUserState, saveUser } = UserSlice.actions;
