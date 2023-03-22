import YoutubeKinds from "../types/YoutubeKinds";
import YoutubeVideo from "./YoutubeVideo";

export default interface YoutubeSearchListResponse {
  kind: YoutubeKinds;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  items: YoutubeVideo[];
}
