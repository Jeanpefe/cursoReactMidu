import { useState, useEffect } from 'react'
import {useRef} from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const {movies} = useMovies()
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)

  // Forma controlada: cada vez que cambia el texto del input se renderiza todo otra vez, es una forma más lenta. Pero facilita la validación del formulario
  const handleSubmit = (event) => {
    event.preventDefault() //evitar que se envie el formulario de la forma estándar, pudiendo definir logica custom
    console.log({query})
  }

  const handleChange = (event) => {
    const newQuery = event.target.value // Con el .target accedemos al objetivo del evento
    //Si no creamos esta variable podemos tener problemas de asincronia
    setQuery(newQuery) 
    if (newQuery === '') {
      setError("No se puede buscar una pelicula vacia")
      return
    }

    if (newQuery.match(/^\d+$/)) {
      setError('No se puede buscar solo con un numero')
      return
    }

    if (newQuery.length < 4) {
      setError("Introduce al menos 4 caracteres")
      return
    }
    setError(null)
  }

  useEffect(() => {

  }, [query])

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
