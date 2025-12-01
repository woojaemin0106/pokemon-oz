import { useNavigate } from "react-router-dom";
import FavoriteButton from "./favoriteButton";
import { useState, memo } from "react";

export const Card = memo(({ pokemon }) => {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const navigate = useNavigate();

  return (
    <section
      onClick={() => navigate(`/detail/${pokemon.id}`)}
      className="w-[150px] border border-gray-400 flex flex-col justify-center items-center gap-2 rounded-lg"
    >
      {isImageLoading ? (
        <div className="w-[120px] h-[120px] leading-32 text-center">
          로딩중...
        </div>
      ) : null}
      <img
        onLoad={() => setIsImageLoading(false)}
        className="w-[120px]"
        src={pokemon.front}
        alt={pokemon.name}
        style={{ display: isImageLoading ? "none" : "block" }}
      />
      <div>
        {pokemon.name}
        <FavoriteButton pokemonId={pokemon.id} />
      </div>
    </section>
  );
});
