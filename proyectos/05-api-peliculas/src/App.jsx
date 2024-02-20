import { useState, useEffect } from 'react'
import {useRef} from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    setQuery(query) 
    if (query === '') {
      setError("No se puede buscar una pelicula vacia")
      return
    }
  
    if (query.match(/^\d+$/)) {
      setError('No se puede buscar solo con un numero')
      return
    }
  
    if (query.length < 4) {
      setError("Introduce al menos 4 caracteres")
      return
    }
    setError(null)
  }, [search])

  return {search, updateSearch, error}
}

function App() {
  const {movies} = useMovies()
  const {search, updateSearch, error} = useSearch()
  
  // Forma controlada: cada vez que cambia el texto del input se renderiza todo otra vez, es una forma más lenta. Pero facilita la validación del formulario
  const handleSubmit = (event) => {
    event.preventDefault() //evitar que se envie el formulario de la forma estándar, pudiendo definir logica custom
    console.log({query})
  }

  const handleChange = (event) => {
    const newQuery = event.target.value // Con el .target accedemos al objetivo del evento
    //Si no creamos esta variable podemos tener problemas de asincronia
    if (newQuery.startsWith(' ')) return //Prevalidacion, no deja siquiera escribir espacios en blanco antes de la pelicula
    setQuery(event.target.value)
  }


  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={query} name="query" placeholder='Bee Movie' />
          <button type='submit'>Buscar</button>****
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies}/>
      </main>
    </div>
  )
}

export default App
