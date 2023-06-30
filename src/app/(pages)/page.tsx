"use client";
import Card from "@/components/Card";
import { EmblaCarousel } from "@/components/Embla";
import Slider from "@/components/Slider";
import { useTmdb } from "@/contexts/tmdbContext";

export default function Home() {
  const { QueryFn, InfiniteQueryFn } = useTmdb();
  const trending = QueryFn("trending/all/day");
  const infinitetrending = InfiniteQueryFn("trending/all/day");
  const popular = QueryFn("movie/popular");
  const top_rated = QueryFn("movie/top_rated");
  const tvTopRated = QueryFn("tv/top_rated");

  if (trending?.isLoading) return <div>Loading...</div>;
  if (trending?.isError) return <div>Error...</div>;
  if (!trending?.data) return <div>No Data...</div>;

  return (
    <div className="">
      <EmblaCarousel {...trending?.data} />
      <Slider heading="Popular Movies" {...popular?.data} />
      <Slider heading="Top Rating Movies" {...top_rated?.data} />
      {/* <Slider heading="Now Playing" {...now_playing?.data} /> */}
      <Slider heading="Top TV Series" {...tvTopRated?.data} />

      <h1 className="text-3xl text-rose-500 text-center m-4">Trending Now</h1>
      <div className="grid grid-cols-3 gap-2 md:grid-cols-5">
        {infinitetrending?.data?.pages.map((page: any) =>
          page.results.map((e: any) => <Card key={e?.id} {...e} />)
        )}
      </div>
    </div>
  );
}
