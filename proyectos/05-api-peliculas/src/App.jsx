import { useState } from 'react'
import {useRef} from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const {movies} = useMovies()

  const handleSubmit = (event) => {
    event.preventDefault() //evitar que se envie el formulario de la forma estándar, pudiendo definir logica custom
    const data = new FormData(event.target) // Objeto con pares key/value que se corresponden con los campos de un formulario
    const query = data.get('query') // hacemos get de la key 'query', asociada al campo input
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
