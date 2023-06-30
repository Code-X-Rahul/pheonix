const Card = ({ id, title, original_name, backdrop_path }: any) => {
  return (
    <div className=" rounded-sm overflow-hidden">
      <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt="" />
      <h2 className="text-center line-clamp-2" key={id}>{title || original_name}</h2>
    </div>
  );
};

export default Card;
