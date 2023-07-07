import VIdeoJS from "@/components/VIdeoJS";
import axios from "axios"

const fetcheEpisodeLinks = async (id: Number | string, type: string, show: string) => {
    const url = `https://api.consumet.org/meta/tmdb/watch/${id}?id=${type}/${show}`
    try {
        const { data } = await axios.get(url);
        return data;
    } catch (error) {
        console.log(error);
    }
}

const WatchPage = async ({ params }: {
    params: {
        typeId: string,
        showId: string,
        episodeId: string
    }
}) => {
    const { showId, episodeId, typeId } = params
    const data = await fetcheEpisodeLinks(episodeId, typeId, showId)
    console.log(data);

    return (
        <div>
            <h1>{typeId}</h1>
            <h1>{showId}</h1>
            <h1>{episodeId}</h1>
            <VIdeoJS />
        </div>
    )
}

export default WatchPage