import { searchMovies } from '../services/movies'

import { useState, useRef } from 'react'

export function useMovies ({search, sort}) {
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
    console.log(movies)
    
    if (!movies) {
      return {movies, loading, getMovies}
    } 
    const sortedMovies = sort
    ? [...movies].sort((a,b) => a.title.localeCompare(b.title)) 
    : movies 

    return {movies:sortedMovies, loading, getMovies}
  }
