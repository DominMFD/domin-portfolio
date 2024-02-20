'use client';

import { ReactNode, createContext, useEffect, useState } from "react"

type AppContextProps = {
    windowWidth: number
}

type AppContextProviderProps = {
    children: ReactNode
}

export const  AppContext = createContext({} as AppContextProps);

export default function AppContextProvider({ children }: AppContextProviderProps) {

    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
        <AppContext.Provider value={{windowWidth}}>
            { children }
        </AppContext.Provider>
    )

}
