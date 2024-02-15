import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form'>
          <input placeholder='Bee Movie' />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        Aquí habrá cosas
      </main>
    </div>
  )
}

export default App
