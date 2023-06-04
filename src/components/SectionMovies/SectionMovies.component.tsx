import { FC, ReactElement, useEffect, useState } from 'react'
import { Link } from 'react-router-dom' 
import { MovieService } from 'services'
import { useFetch } from 'hooks/useFetch'
import * as S from './SectionMovies.styles'
import { MovieTypes } from 'types/movie.types'
import { MoviesSectionCarousel as Carousel } from '../MoviesSectionCarousel'

export const SectionMovies: FC = (): ReactElement => {
  const [movies, setMovies] = useState<MovieTypes.MoviesProps[][]>([])
  const { movies: id } = useFetch<MovieTypes.Genres>('genre/movie/list')

  const getMoviesByGenres = async () => {
    const ids = id?.genres.map(genre => MovieService.getMovies(genre.id))
    const moviesByGenres = await Promise.all(ids ?? [])
    setMovies(moviesByGenres.map((movie) => movie.results))
  }

  useEffect(() => {
    getMoviesByGenres()
  }, [id])

  return (
    <>
      {id?.genres.map((genre, index) => (
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
