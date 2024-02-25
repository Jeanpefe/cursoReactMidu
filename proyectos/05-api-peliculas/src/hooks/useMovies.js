import { searchMovies } from '../services/movies'

import { useState, useRef, useMemo } from 'react'

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
    
    // if (!movies) {
    //   return {movies, loading, getMovies}
    // } 
    // const sortedMovies = sort
    // ? [...movies].sort((a,b) => a.title.localeCompare(b.title)) 
    // : movies 

    const sortedMovies = useMemo(() => {
      return sort
      ? [...movies].sort((a,b) => a.title.localeCompare(b.title)) 
      : movies
    }, [sort, movies]) // El useMemo nos sirve para hacer esa operación solo si ha cambiado el sort o el movies, sino se haría cada vez que se rerenderiza el componente y por tanto el cuerpo de la funcion

    return {movies:sortedMovies, loading, getMovies}
  }
