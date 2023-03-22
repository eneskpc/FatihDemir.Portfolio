import YoutubeKinds from "../types/YoutubeKinds";
import YoutubeIdentify from "./YoutubeIdentify";
import YoutubeVideoSnippet from "./YoutubeVideoSnippet";

export default interface YoutubeVideo {
  id: YoutubeIdentify;
  kind: YoutubeKinds;
  etag: string;
  snippet: YoutubeVideoSnippet;
}
