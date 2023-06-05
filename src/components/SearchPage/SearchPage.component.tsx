import { FC, ReactElement, useState, useEffect } from 'react'
import * as S from './SearchPage.styles'
import { NavComponent } from 'components/NavComponent'
import { MovieTypes } from 'types/movie.types'
import { useFetch } from 'hooks/useFetch'
import { Link } from 'react-router-dom'

export const SearchPage: FC = (): ReactElement => {
  const [query, setQuery] = useState<string>('')
  const [filterMovie, setFilterMovie] = useState<MovieTypes.MovieProps[]>([])
  const [filterSerie, setFilterSerie] = useState<MovieTypes.SeriesProps[]>([])

  const { data: moviesQuery } = useFetch<MovieTypes.Movie>(`search/movie?query=${query}`)
  const { data: seriesQuery } = useFetch<MovieTypes.Series>(`search/tv?query=${query}`)
  const { data: moviesTrending } = useFetch<MovieTypes.Movie>('trending/movie/day')
  const { data: seriesTrending } = useFetch<MovieTypes.Series>('trending/tv/day')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const dataFilter = () => {
    const moviesFiltered = moviesQuery?.results.filter((movie) => movie.backdrop_path !==  null)
    const seriesFiltered = seriesQuery?.results.filter((movie) => movie.backdrop_path !==  null)
    setFilterMovie(moviesFiltered ?? [])
    setFilterSerie(seriesFiltered ?? [])
  }

  useEffect (() => {
    dataFilter()
  }, [moviesQuery])

  return (
    <S.SearchPage>
      <NavComponent />
      <form onSubmit={handleSubmit} style={{position: 'relative'}}>
        <S.SearchInput onChange={handleChange} type="text" placeholder="What are you looking for?" />
        <S.SearchIcon icon='ph:magnifying-glass-bold'/>
      </form>
      <h3 style={{fontSize: '2rem', marginTop: '2rem', color: '#fff'}}>Explore Trending</h3>
      <S.MoviesContainer>
        {moviesQuery?.results.length === 0 ?
          (
            <>
              {moviesTrending?.results?.map((movie) => (
                <Link to={`/movie/${movie.id}`} key={movie.id}>
                  <S.MovieCard key={movie.id}>
                    <S.MovieImage
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.title}
                    />
                  </S.MovieCard>
                </Link>
              ))}
              {seriesTrending?.results?.map((serie) => (
                <Link to={`/serie/${serie.id}`} key={serie.id}>
                  <S.MovieCard key={serie.id}>
                    <S.MovieImage
                      src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`}
                      alt={serie.name}
                    />
                  </S.MovieCard>
                </Link>
              ))}
            </>
          )
          :
          (
            <>
              {filterMovie?.map((movie) => (
                <Link to={`/movie/${movie.id}`} key={movie.id}>
                  <S.MovieCard key={movie.id}>
                    <S.MovieImage
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.title}
                    />
                  </S.MovieCard>
                </Link>
              ))}
              {filterSerie?.map((serie) => (
                <Link to={`/serie/${serie.id}`} key={serie.id}>
                  <S.MovieCard key={serie.id}>
                    <S.MovieImage
                      src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`}
                      alt={serie.name}
                    />
                  </S.MovieCard>
                </Link>
              ))}
            </>
          )
        }
      </S.MoviesContainer>
    </S.SearchPage>
  )
}
