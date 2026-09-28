import { createContext } from "react";
import { useState } from "react";

export const TemaContext = createContext()

export function TemaProvidor({children}){
    const [tema, setTema] = useState({
        backgroundColor: 'black',
        color: 'white'
    })

    return(
        <TemaContext.Provider value={{tema, setTema}}>
            {children}
        </TemaContext.Provider>
    )
}