import Link from "next/link";

const Slider = ({ heading, results }: { heading: string; results: any }) => {
  return (
    <div>
      <h1 className="text-2xl text-amber-600 m-2">{heading}</h1>
      <div className="grid gap-1 grid-flow-col px-1 py-2  h-auto overflow-x-scroll hide-scrollbar">
        {results?.map((movie: any) => (
          <Link href={`watch`} key={movie.id} className="w-[12rem] h-[8rem] hover:scale-105 transition-all">
            <img
              className="aspect-video rounded-md"
              src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
              alt={movie?.title}
            />
            <h1 className="text-center line-clamp-1 my-auto">
              {movie?.name||movie.original_title || movie.title || movie.original_name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Slider;
