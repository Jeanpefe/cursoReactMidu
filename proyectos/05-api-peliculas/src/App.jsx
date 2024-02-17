import { useState } from 'react'
import './App.css'
import responseMovies from './mocks/api-results.json'
import withoutResults from './mocks/api-no-results.json'
import { Movies } from './components/Movies'

function App() {
  const movies = responseMovies.Search
  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form'>
          <input placeholder='Bee Movie' />
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
