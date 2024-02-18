import responseMovies from '../mocks/api-results.json'
import withoutResults from '../mocks/api-no-results.json'

export function useMovies () {
    const movies = responseMovies.Search
  
    const mappedMovies = movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
    return {movies: mappedMovies}
  }