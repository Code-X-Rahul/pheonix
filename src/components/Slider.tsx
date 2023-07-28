import Image from "next/image";
import Link from "next/link";

const Slider = ({ heading, results }: { heading: string; results: any }) => {
  let type: string;
  if(heading.includes("Movies")) {
    type="movie"
  }else{
    type="tv"
  }
  return (
    <div className="text-slate-50">
      <h1 className="text-2xl text-amber-600 m-2">{heading}</h1>
      <div className="grid gap-1 grid-flow-col px-1 py-2  h-auto overflow-x-scroll hide-scrollbar">
        {results?.map((movie: any) => (
          <Link
            href={`/about/${type}/${movie.id}`}
            key={movie.id}
            className="w-[12rem] h-[8rem] hover:scale-105 transition-all"
          >
            <Image
              width="100"
              height="100"
              className="aspect-video w-full rounded-md"
              src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
              alt={movie?.name ||
                movie.original_title ||
                movie.title ||
                movie.original_name}
            />
            <h1 className="text-center line-clamp-1 my-auto">
              {movie?.name ||
                movie.original_title ||
                movie.title ||
                movie.original_name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Slider;
