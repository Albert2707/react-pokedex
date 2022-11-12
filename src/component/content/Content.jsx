import { useEffect, useState } from "react";
import { usePokemons } from "../../context/PokeContext.jsx";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import Pokemon from "../pokemon/Pokemon.jsx";

const Content = () => {
  let [currentPage, setCurrentPage] = useState(20);
  let [offset, setOffset] = useState(1);
  let [limit, setLimit] = useState(19);
  const { pokemons, getPoke,getOnePokemon } = usePokemons();
  useEffect(() => {
    getPoke(offset, limit);
    //console.log(offset);
  },[offset]);

const getPokemon= (e)=>{
    console.log(e.target.value)
}

  return (
    <div className="w-full pb-14  flex  px-24">
                <button disabled={offset <=1 ? true :false}
        onClick={() => {
          setOffset(offset <= 1 ? offset : (offset -= 20));
        }}
        className={    offset <=1 ? "left-4 z-10 bg-[#b1b2ff] dark:bg-[#142850] w-16 h-16 rounded-full fixed top-1/2 text-slate-400 dark:hover:bg-indigo-90 cursor-not-allowed hover:bg-indigo-200 transition duration-300 hover:animate-shake " :"hover:-translate-x-1 left-4 z-10 bg-[#b1b2ff] dark:bg-[#142850] w-16 h-16 rounded-full fixed top-1/2 hover:bg-indigo-200 transition duration-300 dark:hover:bg-indigo-900 dark:text-white"}
      >
        <ChevronLeftOutlinedIcon fontSize="large"
/>
      </button>

        <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-5  w-full ">
      {pokemons.map((poke, index) => (
        <div key={index + 1}>
<Pokemon pokemon={poke} />
        </div>
      ))}
      </div>

      <button
          onClick={() => {
            setOffset((offset += 20));
          }}
          className="z-10 bg-[#b1b2ff] dark:bg-[#142850] w-16 h-16 rounded-full fixed top-1/2 right-4 hover:translate-x-1 hover:bg-indigo-200 transition duration-300 dark:hover:bg-indigo-900 dark:text-white"
        >
          <KeyboardArrowRightOutlinedIcon fontSize="large"/>
        </button>



      <div className="fixed bottom-2 hidden bg-[#B1B2FF] dark:bg-[#142850] text-black dark:text-gray-200 inset-x-0 w-[20%]  rounded-lg m-auto  justify-around overflow-hidden">
        
        <button disabled={offset <=1 ? true :false}
        onClick={() => {
          setOffset(offset <= 1 ? offset : (offset -= 20));
        }}
        className={    offset <=1 ? "flex-1 py-4 text-slate-400 dark:hover:bg-indigo-90 cursor-not-allowed hover:bg-indigo-200 transition duration-300" :"flex-1 py-4 hover:bg-indigo-200 transition duration-300 dark:hover:bg-indigo-900"}
      >
        <ChevronLeftOutlinedIcon fontSize="large"
/>
      </button>
        

        <button
          onClick={() => {
            setOffset((offset += 20));
          }}
          className="flex-1 py-4  hover:bg-indigo-200 transition duration-300 dark:hover:bg-indigo-900"
        >
          <KeyboardArrowRightOutlinedIcon fontSize="large"/>
        </button>
      </div>
    </div>
  );
};

export default Content;
