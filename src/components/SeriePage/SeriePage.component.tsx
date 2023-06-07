import { FC, ReactElement, useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import * as S from './SeriePage.styles'
import { useParams, Link } from 'react-router-dom' 
import { NavComponent } from 'components/NavComponent'
import { MovieTypes } from 'types/movie.types'
import { useFetch } from 'hooks/useFetch'
import { Carousel } from 'components/Carousel'

export const SeriePage: FC = (): ReactElement => {
  const [serieDuration, setSerieDuration] = useState<string>('')
  const { id: serieId } = useParams()

  const { data } = useFetch<MovieTypes.SerieProps>(`tv/${serieId}`)
  const { data: recommendations } = useFetch<MovieTypes.Movie>(`tv/${serieId}/recommendations`)

  const movieDurationConvertion = (seasons: number) => {
    if (seasons === 1) {
      setSerieDuration(`${seasons} season`)
    } else {
      setSerieDuration(`${seasons} seasons`)
    }
  }

  useEffect(() => {
    movieDurationConvertion(data?.number_of_seasons ?? 0)
  }, [data?.number_of_seasons])

  return (
    <S.SeriePage>
      <NavComponent />
      <S.SerieInformation>
        <S.SerieImage src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`} />
        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
          <S.SerieTitle>{data?.name}</S.SerieTitle>
          <div>
            <S.SerieDescription fontSize='1.4rem'><Icon icon='bx:bxs-star' style={{marginRight: '1rem', color: '#FFC107'}}/>{data?.vote_average}</S.SerieDescription>
            <S.SerieDescription fontSize='1.4rem'><Icon icon='uiw:time-o' style={{marginRight: '1rem'}}/>{serieDuration}</S.SerieDescription>
            <S.SerieDescription fontSize='1.4rem'><Icon icon='ph:calendar-bold' style={{marginRight: '1rem'}}/>{data?.first_air_date}</S.SerieDescription>
          </div>
          <S.SerieSubTitle fontSize='2.2rem'>Overview</S.SerieSubTitle>
          <S.SerieDescription fontSize='1.8rem'>{data?.overview}</S.SerieDescription>
          <div>
            <S.SerieDescription style={{color: '#8c8c8c'}} fontSize='1.6rem'>Tagline:</S.SerieDescription>
            <S.SerieDescription style={{color: '#e1e1e1'}} fontSize='1.8rem'>{data?.tagline}</S.SerieDescription>
            <S.SerieDescription style={{marginTop: '2rem', color: '#8c8c8c'}} fontSize='1.6rem'>Genre:</S.SerieDescription>
            <div style={{display: 'flex', color: '#8c8c8c'}}>{data?.genres?.map((genre) =>
              <S.GenreDecoration fontSize='1.8rem' style={{marginRight: '1rem'}} key={genre.id}>{genre.name}</S.GenreDecoration>
            )}
            </div>
            <S.SerieDescription style={{marginTop: '2rem', color: '#8c8c8c'}} fontSize='1.6rem'>Created By:</S.SerieDescription>
            <div style={{display: 'flex', color: '#8c8c8c'}}>{data?.production_companies?.map((company) =>
              <S.GenreDecoration fontSize='1.8rem' style={{marginRight: '1rem'}} key={company.id}>{company.name}</S.GenreDecoration>
            )}
            </div>
          </div>
          <div>
            <Carousel>
              {(recommendations?.results ?? []).map((recommendation) => (
                <Link to={`/serie/${recommendation.id}`} key={recommendation.id}>
                  <S.Recommendation key={recommendation.id}>
                    <S.RecommendationImage 
                      src={`https://image.tmdb.org/t/p/w500${recommendation.poster_path}`}
                      alt={recommendation.title}
                    />
                  </S.Recommendation>
                  <S.RecommendationName>{recommendation.title}</S.RecommendationName>
                </Link>
              ))}
            </Carousel>
          </div>
        </div>
      </S.SerieInformation>
    </S.SeriePage>
  )
}
