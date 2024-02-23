import { useState, useEffect } from 'react'
import {useRef} from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true) //ejemplo comun de uso de useRef para tener flags
  useEffect(() => {

    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    updateSearch(search) 
    if (search === '') {
      setError("No se puede buscar una pelicula vacia")
      return
    }
  
    if (search.match(/^\d+$/)) {
      setError('No se puede buscar solo con un numero')
      return
    }
  
    if (search.length < 4) {
      setError("Introduce al menos 4 caracteres")
      return
    }
    setError(null)
  }, [search])

  return {search, updateSearch, error}
}

function App() {
  const {search, updateSearch, error} = useSearch()
  const {movies, loading, getMovies} = useMovies({search})

  // Forma controlada: cada vez que cambia el texto del input se renderiza todo otra vez, es una forma más lenta. Pero facilita la validación del formulario
  const handleSubmit = (event) => {
    event.preventDefault() //evitar que se envie el formulario de la forma estándar, pudiendo definir logica custom
    getMovies()
  }

  const handleChange = (event) => {
    const newSearch = event.target.value // Con el .target accedemos al objetivo del evento
    //Si no creamos esta variable podemos tener problemas de asincronia
    if (newSearch.startsWith(' ')) return //Prevalidacion, no deja siquiera escribir espacios en blanco antes de la pelicula
    updateSearch(event.target.value)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name="search" placeholder='Bee Movie' />
          <button type='submit'>Buscar</button>****
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>

      <main>
      {
        loading ? <p>Cargando</p> : <Movies movies={movies}/>
      }
      </main>
    </div>
  )
}

export default App
