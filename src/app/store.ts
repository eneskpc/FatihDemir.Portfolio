import { configureStore } from "@reduxjs/toolkit";
import { youtubeApi } from "../apis/youtubeAPI";
import ThemeReducer from "./features/themeSlice";
import YoutubeReducer from "./features/youtubeSlice";

const store = configureStore({
  reducer: {
    theme: ThemeReducer,
    [youtubeApi.reducerPath]: youtubeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(youtubeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
