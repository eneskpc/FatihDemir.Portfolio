import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  headerHeight: number;
  footerHeight: number;
}

const initialState = {
  headerHeight: 0,
  footerHeight: 0,
} as ThemeState;

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeHeaderHeight: (state, action: PayloadAction<number>) => {
      state.headerHeight = action.payload;
    },
    changeFooterHeight: (state, action: PayloadAction<number>) => {
      state.footerHeight = action.payload;
    },
  },
});

export const { changeHeaderHeight, changeFooterHeight } = themeSlice.actions;

export default themeSlice.reducer;
