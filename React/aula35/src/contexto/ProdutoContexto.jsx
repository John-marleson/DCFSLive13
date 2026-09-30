import { createContext, useState } from "react";

export const product = createContext()

export function ProdutoProvider({ children }){
    const [produto, setProduto] = useState([
        
        { id: 1, nome: 'Produto 1', descricao: 'Descrição do Produto 1', preco: 10.99, imagem: 'https://placehold.co/600x400/C92071/FFFFFF' },
        { id: 2, nome: 'Produto 2', descricao: 'Descrição do Produto 2', preco: 19.99, imagem: 'https://placehold.co/600x400/FF5733/FFFFFF' },
        { id: 3, nome: 'Produto 3', descricao: 'Descrição do Produto 3', preco: 5.99, imagem: 'https://placehold.co/600x400/33FF57/FFFFFF' },

    ])

    function adicionarProduto(item){
        setProduto((produtosAtuais) => [...produtosAtuais, item])
        return 'sucesso ao criar o produto'
    }

    function deletarProduto(id){
        const procuraId = produto.filter((item)=> item.id == id)

        if(procuraId){
            const indexof = produto.indexOf(procuraId)

            const remove = produto.splice(indexof, 1)

            return setProduto([...remove])
        }
    }

    return(
        <product.Provider value={{produto, adicionarProduto, deletarProduto}}>
            {children}
        </product.Provider>
    )
}