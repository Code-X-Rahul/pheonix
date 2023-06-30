import Image from "next/image";

const Card = ({ id, title, original_name, backdrop_path }: any) => {
  return (
    <div className=" rounded-sm overflow-hidden">
      <Image
        width={"100"}
        height={"100"}
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        alt={title || original_name}
        className="w-full aspect-video object-cover object-top z-[0]]"
      />
      <h2 className="text-center line-clamp-2" key={id}>
        {title || original_name}
      </h2>
    </div>
  );
};

export default Card;
