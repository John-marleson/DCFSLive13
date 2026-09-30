import { Link } from "react-router-dom"

export default function Header(){
   

    return(<>
    <nav>
        <input type="text" placeholder="Pesquisar..."/>
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/produtos'}>Produtos</Link></li>
            <li><Link to={'/produto/new'}>Produtos</Link></li>
        </ul>
    </nav>
    <div>
        <Link to={'/Carrinho'}>carrinho</Link>
    </div>
    </>)
}