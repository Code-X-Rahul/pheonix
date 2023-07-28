import { META } from "@consumet/extensions";
import axios from "axios";

const getMovie = new META.TMDB();

export const fetcheEpisodeLinks = async (
  id: string,
  type: string | number,
  show: string | number
) => {
  const url = `https://api.consumet.org/meta/tmdb/watch/${id}?id=${type}/${show}`;
  // const showId = `${type}/${show}`;
  try {
    const { data: results } = await axios.get(url);
    // const results = await getMovie.fetchEpisodeSources(id, showId);
    return results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDetails = async (id: string, type: string) => {
  const url = `https://api.consumet.org/meta/tmdb/info/${id}?type=${type}`;
  const { data: results } = await axios.get(url);
  // const results = await getMovie.fetchMediaInfo(id, type);
  return results;
};
