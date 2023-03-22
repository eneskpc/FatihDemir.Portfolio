import YoutubeKinds from "../types/YoutubeKinds";

export default interface YoutubeIdentify {
  kind: YoutubeKinds;
  channelId?: string;
  videoId?: string;
}
