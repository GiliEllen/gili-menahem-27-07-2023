import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { LocationType } from "../../Types/types";

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

export default LocationSlice.reducer;
