export default function RenderizarUsuario (imagem, nome, descricao, preco){
    return(
       <>
       <div>
        <img src={imagem} alt={nome} />
        <h1>{nome}</h1>
        <p>{descricao}</p>
        <p>{preco}</p>
       </div>
       </>
    )
}