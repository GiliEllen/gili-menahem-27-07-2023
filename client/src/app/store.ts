import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import weatherSlice from "../features/weather/weatherSlice";
import locationSlice from "../features/location/locationSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    weather: weatherSlice,
    location: locationSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
