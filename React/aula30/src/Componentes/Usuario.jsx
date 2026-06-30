export default function Usuario (imagem, nome, descricao, preco){
    return(
        <>
        <div>
            <img src={imagem} alt={nome} />
            <h1>{nome}</h1>
            <p>{descricao}</p>
            <h2>{preco}</h2>
        </div>
        </>
    )
}