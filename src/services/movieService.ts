import { MovieTypes } from 'types/movie.types'
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: import.meta.env.VITE_API_KEY
  }
}

export module MovieService {
  export const getMovies = async(genreId: number) => {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}`, options)
    const response: MovieTypes.Movies = await res.json()
    return response
  }
}
