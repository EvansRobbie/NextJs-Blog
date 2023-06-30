 "use client"
 import { ReactNode, createContext, useContext, useEffect, useState } from "react";
 
 interface contextProps {
  mode:string
  toggle:()=> void
 }
 const ThemeContext = createContext({} as contextProps)

 const ThemeContextProvider = ({children}: {children:ReactNode }) => {
    const [mode, setMode] = useState<string>('dark')

    const toggle = () =>{
      // const newMode = mode === "dark" ? "light" : "dark";
    setMode(prevMode => prevMode === 'dark' ? "light" : 'dark');
    }
    // console.log(mode)
   return (
     <ThemeContext.Provider value={{mode, toggle}}>
      <div  className={`duration-500 ease-in delay-100 ${mode === 'dark' ? 'dark' : 'light'}`}>{children}</div>
      
     </ThemeContext.Provider>
   )
 }
 export const useThemeContext = () =>{
  return useContext(ThemeContext)
 }
 export default ThemeContextProvider