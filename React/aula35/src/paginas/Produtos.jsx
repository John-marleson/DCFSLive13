import { Link } from "react-router-dom";

export default function Produtos(){

    return(<>
    <h1>Produtos</h1>
    {produtos && produtos.map((e) => (
        <Link to={'/produto'}>
                <div key={e.id} id={e.id}>
                    <img src={e.imagem} alt="imagem produto" />
                    <p>{e.nome}</p>
                    <p>{e.descricao}</p>
                    <p>{e.preco}</p>
                </div>
        </Link>
                
            ))}
    </>)
}