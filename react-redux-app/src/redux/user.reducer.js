import { createSlice } from "@reduxjs/toolkit";

let UserSlice = createSlice({
  name: "UserSlice",
  initialState: {
    list: [],
  },
  reducers: {
    saveUserList(state, action) {
      state.list = action.payload;
    },
    getData() {},
  },
});

export default UserSlice;
export const { saveUserList, getData } = UserSlice.actions;
