import { userState, useContext } from "react";
import { usePokemons } from "../../context/PokeContext.jsx";

const Features = ({ setopenFeatures, onePokemon }) => {
  return (
    <div className="fixed  bg-[#222]/50 inset-0 z-50 pt-5">
      <img className="absolute z-10 inset-x-0 top-24 sm:top-28 md:top-10 lg:top-10 h-40 md:h-60 mx-auto" src={onePokemon.sprites.other.dream_world.front_default} alt="" />
      <div className="flex flex-col gap-5 items-center justify-center bg-white dark:bg-[#1b1c1e]  absolute inset-0 w-[90%] sm:w-[80%] md:w-[50%] lg:w-1/2 xl:w-[30%] px-24  h-min m-auto py-14 rounded-xl">
        <button
          className="absolute top-5 right-5"
          onClick={() => {
            setopenFeatures(false);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-600">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

        </button>

<div className="w-full flex flex-col gap-5">

        <span className="text-lg sm:text-xl  font-medium"> <span className="text-lg sm:text-xl md:text-2xl">Name:</span> &nbsp;  {onePokemon.name}</span>
        <span className="flex text-base sm:text-xl  text-center items-center"> <span className="text-lg sm:text-xl md:text-2xl font-medium items-center ">Habilidad1: &nbsp;  </span> {onePokemon.abilities[0].ability.name}</span>
        <span className="flex text-base sm:text-xl   text-center items-center"> <span className="text-lg sm:text-xl md:text-2xl font-medium ">Habilidad2: &nbsp;</span> {onePokemon.abilities[1].ability.name}</span>

</div>
        <div className="flex flex-col w-full items-center ">
        <span className="w-full">{onePokemon.stats[0].stat.name}</span>

          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 relative">

            <div
              className="bg-red-600 text-xs font-medium text-red-100 text-center p-0.5 leading-none rounded-full"
              style={{ width: onePokemon.stats[0].base_stat + "%" }}
            >
              {onePokemon.stats[0].base_stat}
            </div>
          </div>

          <span className="mt-5 w-full">{onePokemon.stats[1].stat.name}</span>

          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div
              className="bg-red-600 text-xs font-medium text-red-100 text-center p-0.5 leading-none rounded-full"
              style={{ width: onePokemon.stats[1].base_stat + "%" }}
            >
              {onePokemon.stats[1].base_stat}
            </div>
          </div>
          <span className="mt-5 w-full">{onePokemon.stats[2].stat.name}</span>

          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div
              className="bg-red-600 text-xs font-medium text-red-100 text-center p-0.5 leading-none rounded-full"
              style={{ width: onePokemon.stats[2].base_stat + "%" }}
            >
              {onePokemon.stats[2].base_stat}
            </div>
          </div>
          <span className="mt-5 w-full">{onePokemon.stats[3].stat.name}</span>

          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div
              className="bg-red-600 text-xs font-medium text-red-100 text-center p-0.5 leading-none rounded-full"
              style={{ width: onePokemon.stats[3].base_stat + "%" }}
            >
              {onePokemon.stats[3].base_stat}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
