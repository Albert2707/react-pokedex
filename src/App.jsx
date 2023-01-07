import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Content from "./component/content/Content";
import Navbar from "./component/navbar/Navbar";
import PokeContext from "./context/PokeContext";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="main">
        <Navbar />
        <main className="py-5 bg-white dark:bg-[#303030]">
          <Content />
        </main>
      </div>
    </QueryClientProvider>
  );
}

export default App;
