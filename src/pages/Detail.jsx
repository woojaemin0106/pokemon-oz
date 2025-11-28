import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectPokemonById } from "../RTK/selector";

export default function Detail() {
  const { pokemonId } = useParams();
  console.log(typeof pokemonId);
  const pokemon = useSelector(selectPokemonById(Number(pokemonId)));
  return (
    <div className=" flex flex-col justify-center items-center border border-[gray] p-7 rounded-[10px]">
      <div className="text-3xl mb-3">{pokemon.name}</div>
      <div className="whitespace-pre-wrap text-center">
        {pokemon.description}
      </div>
      <img className="w-[200px]" src={pokemon.front} />
    </div>
  );
}
