import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <nav>
                <Link to="/categorias">categorias</Link>
                <Link to="/produto">produto</Link>
                <Link to="/produtos">produtos</Link>
            </nav>
        </>
    )
}