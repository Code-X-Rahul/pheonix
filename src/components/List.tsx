import Link from "next/link"
import Pallet from "./Pallet"


const List = ({ recommendations, similar }: any) => {
    return (
        <div className="p-4 grid grid-cols-1 gap-4 xl:grid-cols-list">
            <div className="">
                <h2 className="text-2xl font-semibold mb-4">Recommended for you</h2>
                <div className="grid grid-cols-3 gap-2 md:grid-cols-4 xl:grid-cols-5">
                    {recommendations?.map((e: any) => (
                        <Pallet key={e?.id} {...e} />
                    ))}
                </div>
            </div>
            {similar && <div className="p-2">
                <h2 className="text-2xl font-semibold my-2 pr-4">Similar Movies and TV Series</h2>

                <section className="bg-zinc-700 p-3">
                    {similar?.map((e: any) => (
                        <Link href={`/about/${e?.type}/${e.id}`} key={e?.id} className="flex space-x-4 py-3 border-b-2 border-slate-400">
                            <img
                                className="w-[3rem] h-full object-cover rounded-md"
                                src={e?.image}
                                alt={e?.title}
                            />
                            <div>
                                <h1 className="text-md mb-[1px] font-semibold">{e?.title}</h1>
                                <div className="">
                                    <span className="text-center text-sm mr-2 my-1">{e?.type}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </section>
            </div>}
        </div>
    )
}

export default List