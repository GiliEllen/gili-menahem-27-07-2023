import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface ModeState {
  value: "light" | "dark" | string
}

const initialState: ModeState = {
  value: "dark"
};

export const Modeslice = createSlice({
  name: "mode",
  initialState,

  reducers: {
    setMode: (state) => {
      if (state.value === "light") {
        state.value = "dark";
        localStorage.setItem("mode", "dark")
      } else {
        state.value = "light"
        localStorage.setItem("mode", "light")
      }
    },
    setModeFromPrefernce: (state) => {
      const mode = localStorage.getItem("mode")
      if (mode === "light" || mode === "dark") {
        state.value = mode
      } else {
        localStorage.setItem("mode", "light")
      }
    }
  },
});

export const { setMode, setModeFromPrefernce } = Modeslice.actions;

export const modeSelector = (state: RootState) => state.mode.value;

export default Modeslice.reducer;
