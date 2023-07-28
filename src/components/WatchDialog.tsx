'use client'
import Player from "@/components/Player";
import { fetcheEpisodeLinks } from "@/lib/consumet";
import { useQuery } from "react-query";


const WatchDialog = ({ showId, episodeId, typeId }: {
  showId: string | number
  episodeId: string
  typeId: string | number
}) => {

  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ["Episodeinfo", showId, typeId, episodeId],
    queryFn: () => fetcheEpisodeLinks(episodeId, typeId, showId),
  })

  if (isLoading) return <h1>Loading</h1>
  if (isError) return <h1>Error</h1>
  console.log(data);
  if (isSuccess) {
    return (
      <div className="w-full aspect-video ">
        <Player option={""} getInstance={(art: any) => console.info(art)}  {...data} />
      </div>
    )
  }

  return <h1>No Data</h1>
}

export default WatchDialog