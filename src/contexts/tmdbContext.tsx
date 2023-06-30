"use client";
import axios from "axios";
import { createContext, useContext } from "react";
import { useInfiniteQuery, useQuery } from "react-query";

const TmdbContext = createContext<any>(null);

export function useTmdb() {
  return useContext(TmdbContext);
}

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
  },
};

export const TmdbProvider = ({ children }: { children: React.ReactNode }) => {
  const fetcher = async (type: string, page: Number) => {
    const url = `https://api.themoviedb.org/3/${type}?language=en-US&page=${page}`;
    const { data: results } = await axios.get(url, options);
    return results;
  };

  const QueryFn = (type: string) => {
    const {
      data,
      isError,
      isLoading,
      isSuccess,
    } = useQuery({
      queryKey: [`${type}Query`, type],
      queryFn: () => fetcher(type, 1),
    });
    return {
      data,
      isError,
      isLoading,
      isSuccess,
    };
  };

  const InfiniteQueryFn = (type: string) => {
    const {
      data,
      isError,
      isLoading,
      isSuccess,
      isFetchingNextPage,
      fetchNextPage,
      isFetching,
    } = useInfiniteQuery({
      queryKey: [`i${type}Query`, type],
      queryFn: ({ pageParam = 1 }) => fetcher(type, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      const nextPage =
        lastPage.total_pages >= 2 ? allPages.length + 1 : undefined;
      return nextPage;
    },
    });
    return {
      data,
      isError,
      isLoading,
      isSuccess,
      isFetchingNextPage,
      fetchNextPage,
      isFetching,
    };
  };
  return (
    <TmdbContext.Provider value={{ QueryFn, InfiniteQueryFn }}>{children}</TmdbContext.Provider>
  );
};
