import { useContext, createContext, useState } from "react";
import { getPokemons } from "../api/getPokemons.jsx";
import { useQuery } from "@tanstack/react-query";

export const PokedexContext = createContext();
export const usePokemons = () => {
  const context = useContext(PokedexContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskContextProvider");
  }
  return context;
};

const PokeContext = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);

const getOnePokemon =(id)=>{
  //const onePokemon = pokemons.find(pokemon=>pokemon.id===id);
  const onePokemon = pokemons.find(poke => poke.id === id);
  console.log(onePokemon)
    return onePokemon


}
  const getPoke = async (offset, limit) => {

    const response = await getPokemons(offset, limit);
    setPokemons(response.map((e) => e.data));
return response;
    //console.log(data.sprites.front_default)
  };

  return (
    <PokedexContext.Provider value={{ pokemons, getPoke,getOnePokemon }}>
      {children}
    </PokedexContext.Provider>
  );
};

export default PokeContext;
