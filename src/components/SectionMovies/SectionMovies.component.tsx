import { FC, ReactElement, useEffect, useState } from 'react'
import * as S from './SectionMovies.styles'
import { MovieTypes } from 'types/movie.types'
import { MoviesSectionCarousel as Carousel } from '../MoviesSectionCarousel'
import { MovieService } from 'services'
import { Link } from 'react-router-dom' 

// TODO: refactor this component to use the useMovies hook

export const SectionMovies: FC = (): ReactElement => {
  const [category, setCategory] = useState<string[]>([])
  const [movies, setMovies] = useState<Array<MovieTypes.MoviesProps[]>>([])

  const ids = async() => {
    const Categories = await MovieService.getCategory()
    const categoryName = Categories.genres.map((category) => category.name)
    const id = Categories.genres.map((category) => category.id)
    setCategory(categoryName)
    if (id) {
      const test = async() => {
        const Movies = await Promise.all(
          id.map(async(id) => await MovieService.getMovies(id))
        )
        const moviesCategory = Movies.map((res) => res.results)
        setMovies(moviesCategory)
      }
      test()
    }
  }

  useEffect(() => {
    ids()
  }, [])

  return (
    <>
      {category.map((genres, index) => (
        <section key={genres} style={{padding: '0 4rem', height: '35rem'}}>
          <S.SectionName>{genres}</S.SectionName>
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
