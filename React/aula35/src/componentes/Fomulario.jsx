import { useState, useContext } from "react";
import { product } from "../contexto/ProdutoContexto";

export function FormularioProduto(){

    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [preco, setPreco] = useState('')
    const [imagem, setImagem] = useState('')

    const [mensagem, setMensagem] = useState('')

    const { produto, adicionarProduto } = useContext(product)

    function submit(event){
        event.preventDefault();

        const novoProduto = {
            id: (produto.length + 1),
            nome: nome,
            descricao: descricao,
            preco: Number(preco),
            imagem: imagem
        }

        const addProduto = adicionarProduto(novoProduto)
        
        if(addProduto == 'sucesso ao criar o produto'){
            setMensagem(addProduto)
        }

        setNome('')
        setDescricao('')
        setPreco('')
        setImagem('')
    }

     return(
        <>
        <form onSubmit={submit}>
            <input type="text" placeholder="nome" value={nome} onChange={(e)=>{setNome(e.target.value)}}/>
            <input type="text" placeholder="descrição" value={descricao} onChange={(e)=>{setDescricao(e.target.value)}}/>
            <input type="number" placeholder="preço" value={preco} onChange={(e)=>{setPreco(e.target.value)}}/>
            <input type="text" placeholder="imagem" value={imagem} onChange={(e)=>{setImagem(e.target.value)}}/>
            <button>Cadastrar produto</button>
        </form>
        {mensagem && <><p>{mensagem}</p></>}
        </>
    )
}

export default FormularioProduto;