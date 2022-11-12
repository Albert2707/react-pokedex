import { useState } from "react";
import { usePokemons } from "../../context/PokeContext.jsx";
import Features from "../features/Features.jsx";
const Pokemon = ({ pokemon }) => {
  const { pokemons, getPoke, getOnePokemon } = usePokemons();
  const [onePokemon, setOnePokemon] = useState();
  const [openFeatures, setopenFeatures] = useState(false);
  const getPokemon = (id) => {
    setOnePokemon(getOnePokemon(id));
  };
  return (
    <div className="shadow-md p-10 flex flex-col gap-5 rounded-md border-[1px] border-gray-200 dark:border-none justify-center items-center bg-white dark:bg-[#1b1c1e] dark:text-gray-300 w-full mb-5  transition duration-300 relative">
      <img
        className="h-52"
        src={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.name}
      />
      <span className="text-lg font-medium ">{pokemon.name}</span>
      <button className="bg-blue-500 rounded-md text-white px-5 py-2 "
        onClick={() => {
          getPokemon(pokemon.id);
          setopenFeatures(!openFeatures);
        }}
      >
        More
      </button>

      {openFeatures && <Features onePokemon={onePokemon} setopenFeatures={setopenFeatures} />}
    </div>
  );
};

export default Pokemon;
