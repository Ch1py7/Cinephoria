import { useFetch } from 'hooks/useFetch'
import { FC, ReactElement, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MovieService } from 'services'
import { MovieTypes } from 'types/movie.types'
import { Carousel } from '../Carousel'
import * as S from './SeriesSection.styles'

export const SeriesSection: FC = (): ReactElement => {
  const [series, setSeries] = useState<MovieTypes.SeriesProps[][]>([])
  const { data: dataGenre } = useFetch<MovieTypes.Genres>('genre/tv/list')

  const getSeriesByGenres = async () => {
    const ids = dataGenre?.genres.map((genre) =>
      MovieService.getData<MovieTypes.Series>('tv?with_genres=', genre.id)
    )
    const seriesByGenres = await Promise.all(ids ?? [])
    setSeries(seriesByGenres.map((movie) => movie.results))
  }

  useEffect(() => {
    getSeriesByGenres()
  }, [dataGenre])

  return (
    <>
      {dataGenre?.genres.map((genre, index) => (
        <section key={genre.id} style={{ padding: '0 4rem', height: '35rem' }}>
          <S.SectionName>{genre.name}</S.SectionName>
          <S.SerieContainer>
            <Carousel>
              {series[index]?.map((serie) => (
                <Link to={`/serie/${serie.id}`} key={serie.id}>
                  <S.Serie key={serie.id}>
                    <S.SerieImage
                      src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                      alt={serie.name}
                    />
                  </S.Serie>
                  <S.SerieName>{serie.name}</S.SerieName>
                </Link>
              ))}
            </Carousel>
          </S.SerieContainer>
        </section>
      ))}
    </>
  )
}
