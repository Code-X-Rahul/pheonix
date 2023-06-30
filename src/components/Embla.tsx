import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export const EmblaCarousel = ({ results }: any) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container h-[20rem] flex lg:h-[30rem]">
        {results?.map((movie: any) => (
          <div className="embla__slide relative" key={movie.id}>
            <img
              className="w-full h-full object-cover object-top z-[0]]"
              src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
              alt={movie.original_title || movie.title || movie.original_name}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 to-transparent z-10 flex justify-end flex-col p-4">
              <h2 className="text-2xl font-semibold my-2 max-w-lg">
                {movie.original_title || movie.title || movie.original_name}
              </h2>
              <p className="text-sm line-clamp-2 text-slate-200 mb-2 max-w-lg">
                {movie.overview}
              </p>
              <div className="flex space-x-4 mt-2">
                <button className=" bg-rose-600 hover:bg-red-700 p-2 rounded-md transition-all">
                  Play Now
                </button>
                <button className=" bg-red-600 hover:bg-rose-800 p-2 rounded-md transition-all">
                  Add to My List
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
