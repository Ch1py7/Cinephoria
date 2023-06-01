import { FC, ReactElement, useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import * as S from './MoviePage.styles'
import { MovieService } from 'services'
import { useParams } from 'react-router-dom' 
import { NavComponent } from 'components/NavComponent'
import { MovieTypes } from 'types/movie.types'

export const MoviePage: FC = (): ReactElement => {
  const [data, setData] = useState<MovieTypes.MovieProps>()

  const [movieDuration, setMovieDuration] = useState<string>()

  const { id } = useParams()

  const movieDurationConvertion = async (time: number) => {
    const hours = Math.floor(time / 60)
    const minutes = time % 60
    const movieDuration = `${hours}h ${minutes}m`

    return movieDuration
  }

  const movie = async() => {
    const movie = await MovieService.getMovie(id ?? '')
    setData(movie)
    console.log(movie)
    if (movie.runtime) {
      setMovieDuration(await movieDurationConvertion(movie.runtime))
    }
  }

  useEffect(() => {
    movie()
  }, [])
  
  return (
    <S.MoviePage>
      <NavComponent />
      <S.MovieInformation>
        <S.MovieImage src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`} />
        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
          <S.MovieTitle>{data?.title}</S.MovieTitle>
          <div>
            <S.MovieDescription fontSize='1.4rem'><Icon icon='bx:bxs-star' style={{marginRight: '1rem', color: '#FFC107'}}/>{data?.vote_average}</S.MovieDescription>
            <S.MovieDescription fontSize='1.4rem'><Icon icon='uiw:time-o' style={{marginRight: '1rem'}}/>{movieDuration}</S.MovieDescription>
            <S.MovieDescription fontSize='1.4rem'><Icon icon='ph:calendar-bold' style={{marginRight: '1rem'}}/>{data?.release_date}</S.MovieDescription>
          </div>
          <S.MovieSubTitle fontSize='2.2rem'>Overview</S.MovieSubTitle>
          <S.MovieDescription fontSize='1.8rem'>{data?.overview}</S.MovieDescription>
          <div>
            <S.MovieDescription style={{color: '#8c8c8c'}} fontSize='1.6rem'>Tagline:</S.MovieDescription>
            <S.MovieDescription style={{color: '#e1e1e1'}} fontSize='1.8rem'>{data?.tagline}</S.MovieDescription>
            <S.MovieDescription style={{marginTop: '2rem', color: '#8c8c8c'}} fontSize='1.6rem'>Genre:</S.MovieDescription>
            <div style={{display: 'flex', color: '#8c8c8c'}}>{data?.genres?.map((genre) =>
              <S.GenreDecoration fontSize='1.8rem' style={{marginRight: '1rem'}} key={genre.id}>{genre.name}</S.GenreDecoration>
            )}
            </div>
            <S.MovieDescription style={{marginTop: '2rem', color: '#8c8c8c'}} fontSize='1.6rem'>Created By:</S.MovieDescription>
            <div style={{display: 'flex', color: '#8c8c8c'}}>{data?.production_companies?.map((company) =>
              <S.GenreDecoration fontSize='1.8rem' style={{marginRight: '1rem'}} key={company.id}>{company.name}</S.GenreDecoration>
            )}
            </div>
          </div>
        </div>
      </S.MovieInformation>
    </S.MoviePage>
  )
}
