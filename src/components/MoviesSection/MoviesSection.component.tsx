import { FC, ReactElement, useEffect, useState } from 'react'
import { Link } from 'react-router-dom' 
import { MovieService } from 'services'
import { useFetch } from 'hooks/useFetch'
import * as S from './MoviesSection.styles'
import { MovieTypes } from 'types/movie.types'
import { Carousel } from '../Carousel'

export const MoviesSection: FC = (): ReactElement => {
  const [movies, setMovies] = useState<MovieTypes.MoviesProps[][]>([])
  const { data: moviesGenres } = useFetch<MovieTypes.Genres>('genre/movie/list')

  const getMoviesByGenres = async () => {
    const ids = moviesGenres?.genres.map(genre => MovieService.getData<MovieTypes.Movies>('movie?with_genres=',genre.id))
    const moviesByGenres = await Promise.all(ids ?? [])
    setMovies(moviesByGenres.map((movie) => movie.results))
  }

  useEffect(() => {
    getMoviesByGenres()
  }, [moviesGenres])

  return (
    <>
      {moviesGenres?.genres.map((genre, index) => (
        <section key={genre.id} style={{padding: '0 4rem', height: '35rem'}}>
          <S.SectionName>{genre.name}</S.SectionName>
          <S.MovieContainer>
            <Carousel>
              {movies[index]?.map((movie) => (
                <Link to={`/movie/${movie.id}`} key={movie.id}>
                  <S.Movie key={movie.id}>
                    <S.MovieImage 
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                    />
                  </S.Movie>
                  <S.MovieName>{movie.title}</S.MovieName>
                </Link>
              ))}
            </Carousel>
          </S.MovieContainer>
        </section>
      ))}
    </>
  )
}
