import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { LocationType, WeatherType } from "../../Types/types";

export interface LocationState {
  value: LocationType | null | any;
  status: "idle" | "loading" | "failed";
}

const initialState: LocationState = {
  value: null,
  status: "idle",
};

export const LocationSlice = createSlice({
  name: "location",
  initialState,

  reducers: {
    setLocationSelector: (state, action: PayloadAction<any>) => {
      state.value = action.payload;
    },
  },
});

export const { setLocationSelector } = LocationSlice.actions;

export const locationSelector = (state: RootState) => state.location.value;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default LocationSlice.reducer;
