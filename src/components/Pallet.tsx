import Image from "next/image";
import Link from "next/link";

const Pallet = ({ id, image, title, type, releaseDate, rating }: any) => {
  return (
    <Link href={`/about/${type}/${id}`} className="flex justify-center flex-col items-center bg-zinc-900 rounded-md overflow-hidden">
      <img className="w-full h-full object-cover" src={image} alt={title} />
      <h2 className="line-clamp-2 text-center pb-2">{title}</h2>
    </Link>
  );
};

export default Pallet;
