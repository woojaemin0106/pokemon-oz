import { useNavigate } from "react-router-dom";

export const Card = ({ pokemon }) => {
  const navigate = useNavigate();
  return (
    <section
      onClick={() => navigate(`/detail/${pokemon.id}`)}
      className="w-[150px] border border-gray-400 flex flex-col justify-center items-center gap-2 rounded-lg"
    >
      <img className="w-[120px]" src={pokemon.front} alt={pokemon.name} />
      <div>{pokemon.name}</div>
    </section>
  );
};
