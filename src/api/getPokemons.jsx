import axios from "axios";

export const prueba = async (id) => {
  return await axios.get("https://pokeapi.co/api/v2/pokemon/" + id + "/");
};

export const getPokemons = async (offset, limit) => {
  let pokemones = [];
  for (let i = offset; i <= offset + limit; i++) {
    pokemones.push(await prueba(i));
  }
  return pokemones;
};
