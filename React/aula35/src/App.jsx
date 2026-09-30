import { useContext } from 'react'
import Template from './paginas/Template'
import { TemaContext } from './contexto/TemaContext.jsx'
import { ProviderContextos } from './contexto/Contextos.jsx'
import Rotas from './rotas/Rotas'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

function ConteudoApp() {
  const { tema, AlterarTema } = useContext(TemaContext)

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
    <ProviderContextos>
      <BrowserRouter>
        <ConteudoApp />
      </BrowserRouter>
    </ProviderContextos>
  )
}

export default App