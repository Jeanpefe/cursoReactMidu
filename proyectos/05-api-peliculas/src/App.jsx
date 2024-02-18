import { useState } from 'react'
import {useRef} from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const {movies} = useMovies()
  const inputRef = useRef()

  const handleClick = () => {
    const inputElem = inputRef.current
    const value = inputElem.value
    alert(value)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form'>
          <input ref={inputRef} placeholder='Bee Movie' />
          <button onClick={handleClick} type='submit'>Buscar</button>****
        </form>
      </header>

      <main>
        <Movies movies={movies}/>
      </main>
    </div>
  )
}

export default App
