import { MovieTypes } from 'types/movie.types'
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: import.meta.env.VITE_API_KEY
  }
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace MovieService {
  export const getMovies = async(genreId: number) => {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}`, options)
    const response: MovieTypes.Movies = await res.json()
    return response
  }

  export const getCategory = async () => {
    const res = await fetch('https://api.themoviedb.org/3/genre/movie/list', options)
    const response: MovieTypes.Genres = await res.json()
    return response
  }

  export const getMovie = async (movieId: number) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}`, options)
    const response: MovieTypes.MoviesProps = await res.json()
    return response
  }
}
