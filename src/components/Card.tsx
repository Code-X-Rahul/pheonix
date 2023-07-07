import Image from "next/image";
import Link from "next/link";

const Card = ({ id, title, original_name, backdrop_path, media_type }: any) => {
  return (
    <Link
      href={`/about/${media_type}/${id}`}
      className=" rounded-sm overflow-hidden"
    >
      <Image
        width={"100"}
        height={"100"}
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        alt={title || original_name}
        className="w-full aspect-video object-cover object-top z-[0]]"
      />
      <h2 className="text-center line-clamp-2 text-sm" key={id}>
        {title || original_name}
      </h2>
    </Link>
  );
};

export default Card;
