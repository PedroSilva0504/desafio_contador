import { useState } from 'react'
import './App.css'

function App() {
  const [contador, setContador] = useState(0)

  const Add = () => {
    if(contador <= 9)
    setContador(contador + 1)
    
  }
  const Subtrair = () => {
    if(contador >= 1 )
    setContador(contador - 1)
   
  }

  const Zerar = () => {
    setContador(0)
  }


  return (
    <>
      <main>
        <h1> Contador </h1>

        <div className='click'>
          <button onClick={Subtrair} > - </button>
          <h2>{contador}</h2>
          <button onClick={Add}> + </button>
          <button onClick={Zerar}>c</button>
        </div>
        

      </main>
    </>
  )
}

export default App
