import { useContext } from "react";
import { CarrinhoContexto } from "../contexto/CarrinhoContext";

import CardProduct from "../componentes/ProdutosCard";

export default function CarrinhoPage(){
    const {carrinho} = useContext(CarrinhoContexto)

    return(<>
    {carrinho && carrinho.map((e)=>{
        return(
        <CardProduct 
        key={e.id}
        id={e.id}
        nome={e.nome}
        descricao={e.descricao}
        preco={e.preco}
        imagem={e.imagem}
        />
    )})}
    </>)
}