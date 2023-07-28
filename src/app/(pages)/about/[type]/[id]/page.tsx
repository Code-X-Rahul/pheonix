"use client";
import DetailsBanner from "@/components/Details-Banner";
import List from "@/components/List";
import Seasons from "@/components/Seasons";
import { fetchDetails } from "@/lib/consumet";
import React from "react";
import { useQuery } from "react-query";

const AboutPage = ({
  params,
}: {
  params: {
    type: string;
    id: string;
  };
}) => {
  const { id, type } = params;

  // const fetcher = async (id: Number | string, type: string) => {
  //   const url = `https://api.consumet.org/meta/tmdb/info/${id}?type=${type}`;
  //   const { data } = await axios.get(url);
  //   return data;
  // };


  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ["info", id, type],
    queryFn: () => fetchDetails(id, type),
  });


  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;
  if (!data) return <div>No Data...</div>;

  console.log(data);

  const typeId = data.id.split("/")[0];
  const showId = data.id.split("/")[1];
  let episodeId: string;

  if (!isSuccess) return <div>Something Went Wrong. Please try again later</div>;

  if (type === "movie" || type === "MOVIE" || type === "Movie") {
    episodeId = data?.episodeId
    return (
      <>
        <DetailsBanner {...data} showId={showId} typeId={typeId} episodeId={episodeId} />
        <List recommendations={data?.recommendations} similar={data?.similar} />
      </>
    );
  }
  episodeId = data?.seasons[0].episodes[0].id;
  return (<section className="text-slate-50">
    <DetailsBanner showId={showId} typeId={typeId} episodeId={episodeId!} {...data} />
    <Seasons seasons={data?.seasons} showId={showId} typeId={typeId} />
    <List recommendations={data?.recommendations} similar={data?.similar} />
    {/* <DownloadBtn m3u8Url={""} outputFilename={"video.mp4"}/> */}
  </section>);
}


export default AboutPage;
