import { useState } from "react";
import CardProduto from "./CardProduto";

function Formulario() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');

  // Corrigido aqui: mudou de 'immagem' para 'imagem'
  const [produto, setProduto] = useState([]);

  function CadastrarProduto(event) {
    event.preventDefault();

    const novo = {
      nome: nome,
      preco: preco,
      descricao: descricao,
      imagem: imagem // Certifique-se de que o componente CardProduto espera exatamente esse nome
    }

    //desconstruindo o array produto. caso não faça isso o react vai considerar como um só produto
    setProduto([...produto, novo])

    console.log(novo)
  

    setNome('')
    setPreco('')
    setDescricao('')
    setImagem('')
  }

  return (
    <>
      <form id="formulario" onSubmit={CadastrarProduto}>
        <input 
        type="text"
        placeholder="nome" 
        value={nome} 
        onChange={(e) => setNome(e.target.value)} 
        />
        <input 
        type="number"
        placeholder="preço"
        value={preco} 
        onChange={(e) => setPreco(e.target.value)} 
        />
        <input 
        type="text" 
        placeholder="Descrição" 
        value={descricao} 
        onChange={(e) => setDescricao(e.target.value)} 
        
        />
        <input 
        type="text" 
        placeholder="Imagem" 
        value={imagem} 
        onChange={(e) => setImagem(e.target.value)} 
        />
        <input type="submit" value="enviar" />
      </form>

     {produto && produto.map((produto, index)=>{
      return(<><CardProduto
        key={index}
        imagem={produto.imagem}
        nome={produto.nome}
        preco={produto.preco}
        descricao={produto.descricao}
      /></>)})}
    </>
  );
}

export default Formulario;