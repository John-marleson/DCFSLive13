import { createContext, useState } from "react";

export const CarrinhoContexto = createContext()

export function CarrinhoProvidor({ children }){
    const [carrinho, setCarrinho] = useState([])

    function AdicionarCarrinho(id, nome, descricao, preco, imagem){
        return setCarrinho((itensAtuais) => [...itensAtuais, {
            id: id,
            nome: nome,
            descricao: descricao,
            preco: preco,
            imagem: imagem
        }])
    }

    function DeletarCarrinho(id){
        return setCarrinho((itensAtuais) =>
            itensAtuais.filter((item) => String(item.id) !== String(id))
        )
    }

    return(
        <CarrinhoContexto.Provider value={{carrinho, AdicionarCarrinho, DeletarCarrinho}}>
            {children}
        </CarrinhoContexto.Provider>
    )
}