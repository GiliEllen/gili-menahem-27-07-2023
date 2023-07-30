import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface UnitState {
  value: "C" | "F" | string
}

const initialState: UnitState = {
  value: "C"
};

export const UnitSlice = createSlice({
  name: "unit",
  initialState,

  reducers: {
    setUnit: (state, action: PayloadAction<any>) => {
      if (state.value === "C") {
        state.value = "F";
        localStorage.setItem("unit", "F")
      } else {
        state.value = "C"
        localStorage.setItem("unit", "C")
      }
    },
    setUnitFromPrefernce: (state) => {
      const unit = localStorage.getItem("unit")
      if (unit) {
        state.value = unit
      } else {
        localStorage.setItem("unit", "C")
      }
    }
  },
});

export const { setUnit, setUnitFromPrefernce } = UnitSlice.actions;

export const unitSelector = (state: RootState) => state.unit.value;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default UnitSlice.reducer;
