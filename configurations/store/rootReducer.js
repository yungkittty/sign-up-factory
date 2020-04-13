import { combineReducers } from "@reduxjs/toolkit";
import { currentUserSlice } from "../../datas/current-user";

const rootReducer = combineReducers({
  [currentUserSlice.name]: currentUserSlice.reducer,
});

export default rootReducer;
