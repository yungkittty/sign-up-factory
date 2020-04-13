import { createSlice } from "@reduxjs/toolkit";

// https://redux-toolkit.js.org/usage/usage-guide#simplifying-reducers-with-createreducer

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: { id: "" },
  reducers: {
    // The reducers are mutating the state but it's safe! (ie RTK documentation)
    signIn(state, action) {
      const { id } = action.payload;
      // eslint-disable-next-line
      state.currentUser.id = id;
    },
    signOut(state) {
      // eslint-disable-next-line
      state.currentUser.id = "";
    },
  },
});

export default currentUserSlice;
