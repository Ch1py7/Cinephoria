import { FC, ReactElement, useState } from 'react'
import * as S from './SearchPage.styles'
import { NavComponent } from 'components/NavComponent'
import { MovieTypes } from 'types/movie.types'
import { useFetch } from 'hooks/useFetch'

export const SearchPage: FC = (): ReactElement => {
  const [query, setQuery] = useState<string>('')

  const { data: moviesQuery } = useFetch<MovieTypes.Movie>(`search/movie?query=${query}`)
  const { data: moviesTrending } = useFetch<MovieTypes.Movie>('trending/movie/day')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

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
            moviesTrending?.results?.map((movie) => (
              <S.MovieCard key={movie.id}>
                <S.MovieImage
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
              </S.MovieCard>
            ))
          )
          :
          (
            moviesQuery?.results?.map((movie) => (
              <S.MovieCard key={movie.id}>
                <S.MovieImage
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
              </S.MovieCard>
            ))
          )
        }
      </S.MoviesContainer>
    </S.SearchPage>
  )
}
