import Link from "next/link";

const Seasons = ({ seasons, showId, typeId }: {
    seasons: any,
    showId: string,
    typeId: string
}) => {
    return (
        <section className="grid place-items-center p-4">
            {seasons?.map((e: any, idx: number) => (
                <div key={e.id || idx} className="grid place-items-center md:flex">
                    <div className="mx-auto">
                        <img
                            className="w-[10rem] h-full object-cover rounded-md"
                            src={e?.image?.hd}
                            alt={e?.season}
                        />
                        <h1 className="font-semibold text-center">{`Season ${e?.season}`}</h1>
                    </div>
                    <div className="grid grid-cols-2 gap-2 p-4 md:grid-cols-4 lg:grid-cols-6">
                        {e.episodes?.map((e: any, idx: number) => (
                            <div
                                // href={`/watch/${typeId}/${showId}/${e.id}`}
                                key={e.id || idx}
                                className="my-2 relative h-[8rem] grid place-items-center p-4 overflow-hidden rounded-md"
                            >
                                <img
                                    className="absolute inset-0 z-[-1] object-cover rounded-md w-full h-full"
                                    src={e?.img?.hd}
                                    alt={e?.title}
                                />
                                <div className="absolute inset-0 z-0 bg-gradient-to-tr from-zinc-800 to-transparent"></div>
                                <div className="z-10">
                                    <h1 className="text-md mb-[1px] font-semibold text-center">
                                        <span>{e?.episode} </span>
                                        {e?.title}
                                    </h1>
                                    <p className="text-center text-xs">{e?.releaseDate}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Seasons;
