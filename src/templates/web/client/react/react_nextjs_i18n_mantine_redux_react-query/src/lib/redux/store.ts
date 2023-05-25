import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import globalReducer from "./slices/global-slice";

function makeStore() {
  return configureStore({
    reducer: {
      global: globalReducer,
    },
  });
}

export const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;
