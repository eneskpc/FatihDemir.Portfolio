import { useGetYoutubeSearchListQuery } from "../apis/youtubeAPI"
import YoutubeKinds from "../types/YoutubeKinds";
import LoadingIndicator from "./LoadingIndicator";
import VideoCard from "./VideoCard"

const Videos = () => {
  const { data, error, isLoading } = useGetYoutubeSearchListQuery("");

  if (isLoading) {
    return <LoadingIndicator />
  }

  return (
    <div className="py-10 px-2 md:px-10">
      <h1 className='font-bold text-3xl pb-10'>Videolar</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {data?.items.filter(i => i.id.kind === YoutubeKinds.VIDEO).map(item => {
          return <VideoCard key={item.id.videoId} videoItem={item} />
        })}
      </div>
    </div>
  )
}

export default Videos