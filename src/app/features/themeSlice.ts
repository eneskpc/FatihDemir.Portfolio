import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  headerHeight: number;
}

const initialState = {
  headerHeight: 0,
} as ThemeState;

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeHeight: (state, action: PayloadAction<number>) => {
      state.headerHeight = action.payload;
    },
  },
});

export const { changeHeight } = themeSlice.actions;

export default themeSlice.reducer;
