import withResults from '../mocks/api-results.json'
import withoutResults from '../mocks/api-no-results.json'
import { searchMovies } from '../services/movies'

import { useState } from 'react'

export function useMovies ({search}) {
    const [movies, setMovies] = useState([])
    
    const getMovies = async () => {
      const newMovies = await searchMovies({search})
      setMovies(newMovies)
    } 
    return {movies, getMovies}
  }
