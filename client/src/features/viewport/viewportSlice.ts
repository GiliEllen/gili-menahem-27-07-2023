import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface ViewPortState {
  value: boolean
}

const initialState: ViewPortState = {
  value: false,
};

export const viewportSlice = createSlice({
  name: "unit",
  initialState,

  reducers: {
    setViewport: (state, action:PayloadAction<any>) => {
        state.value = action.payload
    }
  },
});

export const { setViewport } = viewportSlice.actions;

export const viewPortSelector = (state: RootState) => state.viewport.value;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default viewportSlice.reducer;
