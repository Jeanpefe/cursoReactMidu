import { useState } from 'react'
import {useRef} from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const {movies} = useMovies()
  const [query, setQuery] = useState('')
  // Forma controlada: cada vez que cambia el texto del input se renderiza todo otra vez, es una forma más lenta. Pero facilita la validación del formulario
  const handleSubmit = (event) => {
    event.preventDefault() //evitar que se envie el formulario de la forma estándar, pudiendo definir logica custom
    console.log({query})
  }

  const handleChange = (event) => {
    setQuery(event.target.value) // Con el .target accedemos al objetivo del evento
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={query} name="query" placeholder='Bee Movie' />
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
