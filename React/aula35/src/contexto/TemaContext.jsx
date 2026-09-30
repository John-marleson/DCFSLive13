import { createContext } from "react";
import { useState } from "react";

export const TemaContext = createContext()

export function TemaProvidor({children}){
    const [tema, setTema] = useState({
        backgroundColor: 'black',
        color: 'white'
    })

    function AlterarTema() {
    console.log('ta funcionando')
    if (tema.color === 'black') {
      setTema({ backgroundColor: 'black', color: 'white' })
    } else {
      setTema({ backgroundColor: 'white', color: 'black' })
    }
  }
    return(
        <TemaContext.Provider value={{tema, AlterarTema}}>
            {children}
        </TemaContext.Provider>
    )
}