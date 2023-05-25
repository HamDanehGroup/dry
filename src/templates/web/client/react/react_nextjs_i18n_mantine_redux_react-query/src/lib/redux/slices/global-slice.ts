import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";

export interface GlobalSliceInitialState {
  flag: boolean;
}

export const globalSliceInitialState: GlobalSliceInitialState = {
  flag: false,
};

export const globalSlice = createSlice({
  name: "global-slice",
  initialState: globalSliceInitialState,
  reducers: {
    toggleGlobalFlagAction(state) {
      state.flag = !state.flag;
    },
  },
});

// action creators
export const { toggleGlobalFlagAction } = globalSlice.actions;

// selector functions
export const selectGlobalFlag = (state: AppState) => state.global.flag;

export default globalSlice.reducer;
