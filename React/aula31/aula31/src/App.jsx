import './App.css'
import { useState } from 'react'
import ProductName from './componentes/attUseEfect'
import CriarProduto from './componentes/postProduct'

function App() {
  const [count, setCount] = useState(0)

  function aumentar(){
   setCount(count + 1)
  }

  return (
    <>
    <CriarProduto />
    <ProductName />
    </>
  )
}

export default App
