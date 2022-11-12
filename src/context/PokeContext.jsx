import { useContext, createContext, useState } from "react";
import { getPokemons } from "../api/getPokemons.jsx";

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

  const getPoke = async (offset, limit) => {

 const response= await getPokemons(offset, limit)
 setPokemons(response.map(e => e.data ));
    //console.log(data.sprites.front_default)
  };

  return (
    <PokedexContext.Provider value={{ pokemons, getPoke }}>
      {children}
    </PokedexContext.Provider>
  );
};

export default PokeContext;
