import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Content from "./component/content/Content";
import Footer from "./component/footer/Footer";
import Navbar from "./component/navbar/Navbar";
import PokeContext  from "./context/PokeContext";

function App() {
  return (



    <div className="main">
      <Navbar/>
      <main className="py-5 bg-white dark:bg-[#303030]">
        <Content />
      </main>
    </div>
  );
}

export default App;
