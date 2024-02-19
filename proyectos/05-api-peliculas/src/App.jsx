import { useState } from 'react'
import {useRef} from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const {movies} = useMovies()

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    const query = data.get('query')
    console.log(query)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input name="query" placeholder='Bee Movie' />
          <button type='submit'>Buscar</button>****
        </form>
      </header>

      <main>
        <Movies movies={movies}/>
      </main>
    </div>
  )
}

export default App
