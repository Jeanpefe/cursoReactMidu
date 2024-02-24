import withResults from '../mocks/api-results.json'
import withoutResults from '../mocks/api-no-results.json'
import { searchMovies } from '../services/movies'

import { useState, useRef } from 'react'

let previousSearch = '' //Esto funciona porque solo usamos el custom hook una vez, porque la variable se comparte allá donde pongamos el compoennte

export function useMovies ({search}) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const getMovies = async () => {
      if (search == previousSearch) return 

      try{
        setLoading(true)
        setError(null)
        previousSearch.current = search
        const newMovies = await searchMovies({search})
        setMovies(newMovies)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    } 
    return {movies, loading, getMovies}
  }
