import Link from "next/link";
import React from "react";
import { FaPlay, FaPlus } from "react-icons/fa";

const DetailsBanner = ({
    showId,
    typeId,
    episodeId,
    cover,
    title,
    duration,
    genres,
    directors,
    image,
    type,
    description,
    rating,
    releaseDate
}: {
    showId:string;
    typeId:string;
    episodeId:any
    cover: string;
    title: string;
    duration: string;
    genres: string[];
    directors: string[];
    image: string;
    type: string;
    description: string;
    rating: any;
    releaseDate: string
}) => {
    return (
        <div className="relative my-5 md:p-4">
            <div
                style={{
                    backgroundImage: `url(${cover})`,
                }}
                className=" bg-cover bg-center bg-no-repeat w-full h-full absolute top-0 left-0 z-[-1] filter blur-xl"
            ></div>
            <div className="z-10 flex flex-col justify-center items-center  lg:flex-row mt-8">
                <div className="flex flex-col justify-center items-center md:flex-row md:items-start">
                    <img
                        className="w-[12rem] h-[15rem] object-contain mt-4 xl:w-[15rem] xl:h-[20rem] rounded-md"
                        src={image}
                        alt={title}
                    />
                    <div className="m-4 max-w-5xl">
                        <h1 className="text-3xl text-center mb-2 font-semibold md:text-left">{title}</h1>
                        <div className="flex items-center justify-center md:justify-start md:mx-2">
                            <span className="text-center text-sm mr-2">{type}</span>
                            {duration && <span className="text-center text-sm">
                                {`${duration} min` || "NA"}
                            </span>}
                        </div>
                        <div className="flex justify-center items-center m-4 space-x-2 md:justify-start">
                            <Link
                                href={`/watch/${typeId}/${showId}/${episodeId}`}
                                className="flex items-center justify-center p-3 bg-gradient-to-tr from-amber-600 to-rose-700 border-none rounded-full text-slate-100 text-md"
                            >
                                <FaPlay className="text-xl mr-1" />
                                Watch Now
                            </Link>
                            <Link
                                href={`/`}
                                className="flex items-center justify-center p-3 bg-gradient-to-tr from-slate-200 to-slate-50 border-none rounded-full text-zinc-900 text-md hover:text-rose-600 transition-colors"
                            >
                                <FaPlus className="text-xl mr-1" />
                                Add to List
                            </Link>
                        </div>
                        <p className="max-w-4xl hidden md:flex line-clamp-3">{description}</p>
                    </div>
                </div>
                <section className="bg-slate-300 bg-opacity-40 p-4 shrink-0 h-full w-full lg:w-auto">
                    <div className="flex flex-col md:hidden">
                        <span className="text-lg font-semibold text-white">Overview:</span>
                        <span className="line-clamp-3 max-w-lg my-2 text-slate-100">{description}</span>
                    </div>
                    <p className="my-1 font-semibold text-sm">Release Date : <span>{releaseDate}</span></p>
                    <p className="my-1 font-semibold text-sm">Duration : <span>{duration}m</span></p>
                    <div className="flex ">
                        Genres: <span className="line-clamp-3 max-w-lg ml-2">{genres.join(", ")}</span>
                    </div>
                    <p className="my-1 font-semibold text-sm text-amber-400">Rating: <span>{rating}</span></p>
                    <div className="flex">
                        Directors:<span className="line-clamp-3 max-w-lg ml-2">{directors.join(", ") || "N.A (Not Available)"}</span>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default DetailsBanner;
