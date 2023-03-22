import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetChannelId, GetYoutubeAPIKey } from "../Helper";
import YoutubeSearchListResponse from "../models/YoutubeSearchListResponse";

export const youtubeApi = createApi({
  reducerPath: "youtubeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://youtube.googleapis.com/youtube/v3/",
  }),
  endpoints: (builder) => ({
    GetYoutubeSearchList: builder.query<YoutubeSearchListResponse, string>({
      query: (pageToken) =>
        `search?key=${GetYoutubeAPIKey()}&channelId=${GetChannelId()}&maxResults=50&part=snippet${pageToken ? `&pageToken=${pageToken}`: ""}`,
    }),
  }),
});

export const { useGetYoutubeSearchListQuery } = youtubeApi;
