import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { WeatherType } from "../../Types/types";

export interface WeatherState {
  value: WeatherType | null | any;
  status: "idle" | "loading" | "failed";
}

const initialState: WeatherState = {
  value: null,
  status: "idle",
};

export const WeatherSlice = createSlice({
  name: "weather",
  initialState,

  reducers: {
    setWeather: (state, action: PayloadAction<any>) => {
      state.value = action.payload;
    },
  },
});

export const { setWeather } = WeatherSlice.actions;

export const weatherSelector = (state: RootState) => state.weather.value;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default WeatherSlice.reducer;
