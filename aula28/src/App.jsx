import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Atividade1 from './Componentes/Atividade1'
import Atividade2 from './Componentes/Atividade2'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <Atividade1></Atividade1>
    <Atividade2></Atividade2>
  </>
  )
}

export default App
