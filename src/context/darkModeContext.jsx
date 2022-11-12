import {useState, createContext,useEffect} from 'react'
export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({children}) => {

    const [darkMode, setDarkMode] = useState(
        JSON.parse(localStorage.getItem("darkMode")) || false
      );

const toggle =()=>{
    setDarkMode(!darkMode)
}

useEffect(() => {
    const root = window.document.documentElement;
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);


  return (
    <DarkModeContext.Provider value={{darkMode, toggle}}>
        {children}
    </DarkModeContext.Provider>
  )
}

