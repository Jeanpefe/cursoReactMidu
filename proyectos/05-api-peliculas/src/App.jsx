import { useState } from 'react'
import {useRef} from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const {movies} = useMovies()

  const handleSubmit = (event) => {
    event.preventDefault() //evitar que se envie el formulario de la forma estándar, pudiendo definir logica custom
    const fields = Object.fromEntries(new window.FormData(event.target)) //Object.fromEntries convierte los pares key/value en propiedades del objeto
    console.log(fields)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input name="query" placeholder='Bee Movie' />
          <input name="otro" placeholder='Bee Movie' />
          <input name="another" placeholder='Bee Movie' />
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
