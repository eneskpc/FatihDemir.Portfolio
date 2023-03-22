import { createSlice } from "@reduxjs/toolkit";
import { youtubeApi } from "../../apis/youtubeAPI";
import YoutubeSearchListResponse from "../../models/YoutubeSearchListResponse";

type YoutubeState = {
    youtubeVideos: YoutubeSearchListResponse | null
}

const initialState = {
    youtubeVideos: null
} as YoutubeState;

const youtubeSlice = createSlice({
  name: "youtube",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      youtubeApi.endpoints.GetYoutubeSearchList.matchFulfilled,
      (state, { payload }) => {
        state.youtubeVideos = payload;
      }
    );
  },
});

export default youtubeSlice.reducer;
