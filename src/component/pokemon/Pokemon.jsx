import React from "react";

const Pokemon = ({ pokemon }) => {
  return (
    <div className="shadow-md p-10 flex flex-col rounded-md border-[1px] border-gray-200 dark:border-none justify-center items-center bg-white dark:bg-[#1b1c1e] dark:text-gray-300   w-full mb-5 hover:scale-105 transition duration-300 ">
      <img
        className="h-36"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <span className="text-lg font-medium ">{pokemon.name}</span>
    </div>
  );
};

export default Pokemon;
