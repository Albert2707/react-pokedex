import { useEffect, useState } from "react";
import { usePokemons } from "../../context/PokeContext.jsx";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import Pokemon from "../pokemon/Pokemon.jsx";
import { useQuery } from "@tanstack/react-query";
const Content = () => {
  let [offset, setOffset] = useState(1);
  const [loader, setLoader] = useState(false);
  let [limit, setLimit] = useState(19);
  const { pokemons, getPoke, getOnePokemon } = usePokemons();
  const [pokemones, setPokemones] = useState([]);

  const { isLoading, data, refetch, error } = useQuery(["pokemones"], () =>
    getPoke(offset, limit)
  );
  useEffect(() => {
    refetch();
  }, [offset]);

  const getPokemon = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="w-full pb-14  flex flex-col md:flex-row  px-5 md:px-24">
      <div className=" next_previous flex justify-center my-5 md:hidden">
        <button
          disabled={offset <= 1 ? true : false}
          onClick={() => {
            setOffset(offset <= 1 ? offset : (offset -= 20));
          }}
          className=" bg-[#b1b2ff] dark:bg-[#142850]  flex-1 h-16 rounded-l-lg hover:bg-indigo-200 transition duration-300 dark:hover:bg-indigo-900 dark:text-white"
        >
          {" "}
          <ChevronLeftOutlinedIcon fontSize="large" />
        </button>
        <button
          className="bg-[#b1b2ff] dark:bg-[#142850] flex-1 h-16 rounded-r-lg hover:bg-indigo-200 transition duration-300 dark:hover:bg-indigo-900 dark:text-white"
          onClick={() => {
            setOffset((offset += 20));
          }}
        >
          {" "}
          <KeyboardArrowRightOutlinedIcon fontSize="large" />
        </button>
      </div>

      <button
        disabled={offset <= 1 ? true : false}
        onClick={() => {
          setOffset(offset <= 1 ? offset : (offset -= 20));
        }}
        className={
          offset <= 1
            ? " hidden md:block left-4 z-10 bg-[#b1b2ff] dark:bg-[#142850] w-16 h-16 rounded-full fixed top-1/2 text-slate-400 dark:hover:bg-indigo-90 cursor-not-allowed hover:bg-indigo-200 transition duration-300 hover:animate-shake "
            : "  hidden md:block hover:-translate-x-1 left-4 z-10 bg-[#b1b2ff] dark:bg-[#142850] w-16 h-16 rounded-full fixed top-1/2 hover:bg-indigo-200 transition duration-300 dark:hover:bg-indigo-900 dark:text-white"
        }
      >
        <ChevronLeftOutlinedIcon fontSize="large" />
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-5  w-full ">
        {isLoading ? (
          <div className="flex items-center justify-center col-span-full">
            <div class="flex gap-1">
              <span class="h-6 w-6 rounded-full bg-indigo-400 animate-[bounce_0.9s_infinite_100ms]"></span>
              <span class="h-6 w-6 rounded-full bg-indigo-400 animate-bounce "></span>
              <span class="h-6 w-6 rounded-full bg-indigo-400 animate-[bounce_1s_infinite_100ms]"></span>
            </div>
          </div>
        ) : (
          pokemons.map((poke, index) => (
            <div key={index + 1}>
              <Pokemon pokemon={poke} />
            </div>
          ))
        )}
      </div>

      <button
        onClick={() => {
          setOffset((offset += 20));
        }}
        className="z-10 hidden md:block bg-[#b1b2ff] dark:bg-[#142850] w-16 h-16 rounded-full fixed top-1/2 right-4 hover:translate-x-1 hover:bg-indigo-200 transition duration-300 dark:hover:bg-indigo-900 dark:text-white"
      >
        <KeyboardArrowRightOutlinedIcon fontSize="large" />
      </button>
      <div className=" next_previous flex justify-center my-5 md:hidden">
        <button
          disabled={offset <= 1 ? true : false}
          onClick={() => {
            setOffset(offset <= 1 ? offset : (offset -= 20));
          }}
          className=" bg-[#b1b2ff] dark:bg-[#142850]  flex-1 h-16 rounded-l-lg hover:bg-indigo-200 transition duration-300 dark:hover:bg-indigo-900 dark:text-white"
        >
          {" "}
          <ChevronLeftOutlinedIcon fontSize="large" />
        </button>
        <button
          className="bg-[#b1b2ff] dark:bg-[#142850] flex-1 h-16 rounded-r-lg hover:bg-indigo-200 transition duration-300 dark:hover:bg-indigo-900 dark:text-white"
          onClick={() => {
            setOffset((offset += 20));
          }}
        >
          {" "}
          <KeyboardArrowRightOutlinedIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
};

export default Content;
