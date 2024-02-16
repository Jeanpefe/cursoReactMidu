import { useState } from 'react'
import './App.css'
import responseMovies from './mocks/api-results.json'
import withoutResults from './mocks/api-no-results.json'

function App() {
  const movies = responseMovies.Search
  const hasMovies = movies?.length > 0
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
        {
          hasMovies
          ? (
            <ul>
              {
                movies.map(movie => (
                  <li key={movie.Title}>
                    <h3>{movie.Title}</h3>
                    <p>{movie.Year}</p>
                  </li>
                ))
              }
            </ul>
          )
          : (
            <p>No hay datos</p>
          )
        } 
      </main>
    </div>
  )
}

export default App
