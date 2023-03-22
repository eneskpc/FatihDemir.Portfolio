import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import YoutubeVideo from "../models/YoutubeVideo"
import TooltipText from "./TooltipText";

type Props = {
  videoItem: YoutubeVideo
}

const VideoCard = ({ videoItem }: Props) => {
  if (!videoItem) {
    return null;
  }
  return (
    <div className="transition-all active:scale-100 active:shadow-none hover:scale-105 hover:shadow-2xl rounded bg-white shadow-md flex flex-col">
      <a href={`https://www.youtube.com/watch?v=${videoItem.id.videoId}`} target="_blank">
        <img className="rounded-t" src={videoItem.snippet.thumbnails.high.url} width="100%" />
      </a>
      <div className="p-5 flex flex-col justify-between h-full">
        <a href={`https://www.youtube.com/watch?v=${videoItem.id.videoId}`} target="_blank" className="font-bold leading-none">{videoItem.snippet.title}</a>
        <small className="my-2 h-full">{videoItem.snippet.description}</small>
        <div className="flex items-center mt-2">
          <FontAwesomeIcon className='w-3 h-3 mr-1' icon={faCalendarAlt} />
          <TooltipText tooltipElement={
            moment(videoItem.snippet.publishedAt).format("LLL")
          }>
            <small>{moment(videoItem.snippet.publishedAt).fromNow()}</small>
          </TooltipText>
        </div>
      </div>
    </div>
  )
}

export default VideoCard