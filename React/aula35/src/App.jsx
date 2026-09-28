import { useContext } from 'react'
import Template from './paginas/Template'
import { TemaProvidor, TemaContext } from './contexto/contexto.jsx'
import { Carrinho, CarrinhoProvidor } from './contexto/CarrinhoContext.jsx'
import Rotas from './rotas/Rotas'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

function ConteudoApp() {
  const { tema, setTema } = useContext(TemaContext)

  function AlterarTema() {
    console.log('ta funcionando')
    if (tema.color === 'black') {
      setTema({ backgroundColor: 'black', color: 'white' })
    } else {
      setTema({ backgroundColor: 'white', color: 'black' })
    }
  }



  return (
    <div style={tema}>
      <button onClick={AlterarTema}>tema</button>
      <Template>
        <Rotas />
      </Template>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <TemaProvidor>

          <ConteudoApp />

      </TemaProvidor>
    </BrowserRouter>
  )
}

export default App