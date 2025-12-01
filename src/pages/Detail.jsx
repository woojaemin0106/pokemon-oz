import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectPokemonById } from "../RTK/selector";
import FavoriteButton from "../component/favoriteButton";
import FlipCard from "../component/FilpCard";

export default function Detail() {
  const { pokemonId } = useParams();
  console.log(typeof pokemonId);
  const pokemon = useSelector(selectPokemonById(Number(pokemonId)));
  return (
    <div className=" flex flex-col justify-center items-center border border-[gray] p-7 rounded-[10px]">
      <div className="text-3xl mb-3">
        {pokemon.name}
        <FavoriteButton pokemonId={Number(pokemonId)} />
      </div>
      <div className="whitespace-pre-wrap text-center">
        {pokemon.description}
      </div>
      <FlipCard front={pokemon.front} back={pokemon.back} />
    </div>
  );
}
