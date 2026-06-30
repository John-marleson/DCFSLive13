import { useState } from "react";
import CardProduto from "./CardProduto";

function Revisao() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('')

  // Se você quer guardar um histórico de produtos, comece com uma lista vazia []
  const [produto, setProduto] = useState([]);

  function login(event) {
    event.preventDefault();

    // Cria o objeto com os dados atuais
    const novo = {
      nome: nome,
      preco: preco,
      descricao: descricao,
      imagem: imagem
    };

    // Atualiza o estado de produtos
    setProduto([...produto, novo]);
    //caso voçê faça assim: "{novo}", voçê vai estar mudando o que antes era uma lista para um unico objeto
    
    // O console.log do estado logo após o "set" pode mostrar o valor antigo 
    // porque o estado do React é assíncrono, mas para ver o objeto atual:
    console.log(novo)
    console.log(produto);

    setNome('')
    setPreco('')
    setDescricao('')
    setImagem('')
  }

  return (
    <>
      {/* CORREÇÃO 1: Remova os parênteses do login */}
      <form onSubmit={login}> 
        <h1>entre na sua conta</h1>
        
        {/* CORREÇÃO 2: Use event.target.value nos onChange */}
        <input 
          type="text" 
          placeholder="nome" 
          value={nome} 
          onChange={(event) => setNome(event.target.value)} 
        />
        <input 
          type="number" 
          placeholder="preço" 
          value={preco} 
          onChange={(event) => setPreco(event.target.value)} 
        />
        <input 
          type="text" 
          placeholder="descrição" 
          value={descricao} 
          onChange={(event) => setDescricao(event.target.value)} 
        />

        <input 
        type="text"
        placeholder="imagem"
        value={imagem}
        onChange={(event)=> setImagem(event.target.value)}
         />
        
        <input type="submit" value="Enviar" />
      </form>
      <div>
        {produto && produto.map((item, index)=>{
            return(<><CardProduto 
                key={index}
                nome={item.nome} 
                preco={item.preco} 
                descricao={item.descricao} 
                imagem={item.imagem}
                /></>)
        })}
      </div>
    </>
  );
}

export default Revisao;
