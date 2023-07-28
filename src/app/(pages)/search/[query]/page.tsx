"use client";
import Card from "@/components/Card";
import Pallet from "@/components/Pallet";
import axios from "axios";
import { useInfiniteQuery } from "react-query";

const SearchPage = ({
  params,
}: {
  params: {
    query: string;
  };
}) => {
  const { query } = params;

  const fetcher = async (pageParam: Number) => {
    const url = `https://api.consumet.org/meta/tmdb/${query}?page=${pageParam}`;
    const { data } = await axios.get(url);
    return data;
  };

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ["search", query],
    ({ pageParam = 1 }) => fetcher(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage =
          lastPage.hasNextPage === true ? allPages.length + 1 : undefined;
        return nextPage;
      },
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;
  console.log(data);

  return (
    <main className="text-slate-50">
      <h1 className="m-4 text-2xl text-white">
        Search Result for {query.replaceAll("%20", " ")}:-
      </h1>
      <div className="grid grid-cols-3 gap-2 p-4 md:grid-cols-5 lg:grid-cols-8">
        {data?.pages.map((page) => {
          return page.results.map((result: any) => {
            return <Pallet key={result.id} {...result} />;
          });
        })}
      </div>
      <button className="disabled:text-zinc-600 flex justify-center items-center m-4 mx-auto" disabled={!hasNextPage} onClick={() => fetchNextPage()}>
        {isFetchingNextPage ? "Loading..." : "Load More..."}
      </button>
    </main>
  );
};

export default SearchPage;
