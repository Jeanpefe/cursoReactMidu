import withResults from '../mocks/api-results.json'
import withoutResults from '../mocks/api-no-results.json'
import { searchMovies } from '../services/movies'

import { useState, useRef } from 'react'

export function useMovies ({search}) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const previousSearch = useRef(search)

    const getMovies = async () => {
      if (search == previousSearch.current) return 

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
