import YoutubeThumbnail from "./YoutubeThumbnail";

export default interface YoutubeVideoSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
  thumbnails: YoutubeThumbnail;
}
