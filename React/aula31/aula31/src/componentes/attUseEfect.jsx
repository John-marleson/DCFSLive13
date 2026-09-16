import { useState, useEffect } from "react";
import CardProduto from "./cardProduto";

function ProductName(){

    const [produtos, setProdutos] = useState([])

    useEffect(()=>{
        try{
            async function buscarProdutos(){
                const resposta = await fetch("https://fakestoreapi.com/products")
                const dados = await resposta.json()
                setProdutos(dados)
            }
            buscarProdutos()
        }catch(erro){
            console.log(erro)
        }
    },[])

    return(
        <>
        {produtos.length === 0 && <><p>carregando...</p></>}
        {produtos && produtos.map((item) => (
        <CardProduto key={item.id} index={item.id} img={item.image} title={item.title} price={item.price} description={item.description}/>
      ))}
        </>
    )
}

export default ProductName;