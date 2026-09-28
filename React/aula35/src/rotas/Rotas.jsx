import {Routes, Route} from 'react-router-dom'

import Home from '../paginas/Home'
import Produto from '../paginas/Produto'
import Produtos from '../paginas/Produtos'
import NotFound from '../paginas/NotFound'
import Login from '../paginas/Login'


export default function Rotas(){
    return(<>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Produto' element={<Produto/>}/>
        <Route path='/Produtos' element={<Produtos/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
    </>)
}