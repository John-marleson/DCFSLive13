import { ProdutoProvider } from "./ProdutoContexto";
import { TemaProvidor } from "./TemaContext";
import { CarrinhoProvidor } from "./CarrinhoContext";

export function ProviderContextos({ children }){
    return(
        <>
        <TemaProvidor>
        <CarrinhoProvidor>
        <ProdutoProvider>
            {children}
        </ProdutoProvider>
        </CarrinhoProvidor>
        </TemaProvidor>
        </>
    )
}