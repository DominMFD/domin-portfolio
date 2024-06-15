'use client';

import { ReactNode, createContext, useEffect, useState } from "react"

type AppContextProps = {
}

type AppContextProviderProps = {
    children: ReactNode
}

export const  AppContext = createContext({} as AppContextProps);

export default function AppContextProvider({ children }: AppContextProviderProps) {


    return (
        <AppContext.Provider value={{}}>
            { children }
        </AppContext.Provider>
    )

}
