import {Routes, Route} from 'react-router-dom'

import Categorias from '../paginas/categorias'
import Produto from '../paginas/produto'
import Produtos from '../paginas/produtos'
import Home from '../paginas/Home'
import PaginaNaoEncontrada from '../paginas/PaginaNaoEncontrada'

export default function Rotas(){
    return(
        <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/categorias' element={<Categorias/>}/>
            <Route path='/produto' element={<Produto />}/>
            <Route path='/produtos' element={<Produtos/>}/>
            <Route path='*' element={<PaginaNaoEncontrada/>}/>
        </Routes>
        </>
    )
}