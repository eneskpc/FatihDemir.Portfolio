import VideoCard from "./VideoCard"

const Videos = () => {
  return (
    <div className="py-10 px-2 md:px-10">
        <div className="grid grid-cols-4">
            <VideoCard />
        </div>
    </div>
  )
}

export default Videos