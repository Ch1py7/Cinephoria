import { FC, ReactElement, useEffect, useState } from 'react'
import * as S from './SectionMovies.styles'
import { MovieTypes } from 'types/movie.types'
import { MoviesSectionCarousel as Carousel } from '../MoviesSectionCarousel'


export const SectionMovies: FC = (): ReactElement => {
  const [category, setCategory] = useState<MovieTypes.GenresProps[]>([])
  const [actionMovies, setActionMovies] = useState<MovieTypes.MoviesProps[]>([])
  const [adventureMovies, setAdventureMovies] = useState<MovieTypes.MoviesProps[]>([])
  const [animationMovies, setAnimationMovies] = useState<MovieTypes.MoviesProps[]>([])
  const [comedyMovies, setComedyMovies] = useState<MovieTypes.MoviesProps[]>([])
  const [crimeMovies, setCrimeMovies] = useState<MovieTypes.MoviesProps[]>([])
  const [documentaryMovies, setDocumentaryMovies] = useState<MovieTypes.MoviesProps[]>([])
  const [dramaMovies, setDramaMovies] = useState<MovieTypes.MoviesProps[]>([])
  const [familyMovies, setFamilyMovies] = useState<MovieTypes.MoviesProps[]>([])
  const [fantasyMovies, setFantasyMovies] = useState<MovieTypes.MoviesProps[]>([])
  const [historyMovies, setHistoryMovies] = useState<MovieTypes.MoviesProps[]>([])
  const [horrorMovies, setHorrorMovies] = useState<MovieTypes.MoviesProps[]>([])
  const [musicMovies, setMusicMovies] = useState<MovieTypes.MoviesProps[]>([])
  const [mysteryMovies, setMysteryMovies] = useState<MovieTypes.MoviesProps[]>([])
  const [romanceMovies, setRomanceMovies] = useState<MovieTypes.MoviesProps[]>([])
  const [scienceFictionMovies, setScienceFictionMovies] = useState<MovieTypes.MoviesProps[]>([])
  const [tvMovies, setTvMovies] = useState<MovieTypes.MoviesProps[]>([])
  const [thrillerMovies, setThrillerMovies] = useState<MovieTypes.MoviesProps[]>([])
  const [warMovies, setWarMovies] = useState<MovieTypes.MoviesProps[]>([])
  const [westernMovies, setWesternMovies] = useState<MovieTypes.MoviesProps[]>([])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: import.meta.env.VITE_API_KEY
    }
  }

  const getCategory = async () => {
    const res = await fetch('https://api.themoviedb.org/3/genre/movie/list', options)
    const response: MovieTypes.Genres = await res.json()
    setCategory(response.genres)
  }

  const getActionMovies = async() => {
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=28', options)
    const response: MovieTypes.Movies = await res.json()
    setActionMovies(response.results)
  }

  const getAdventureMovies = async() => {
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=12', options)
    const response: MovieTypes.Movies = await res.json()
    setAdventureMovies(response.results)
  }

  const getAnimationMovies = async() => {
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=16', options)
    const response: MovieTypes.Movies = await res.json()
    setAnimationMovies(response.results)
  }

  const getComedyMovies = async() => {
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=35', options)
    const response: MovieTypes.Movies = await res.json()
    setComedyMovies(response.results)
  }

  const getCrimeMovies = async() => {
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=80', options)
    const response: MovieTypes.Movies = await res.json()
    setCrimeMovies(response.results)
  }

  const getDocumentaryMovies = async() => {
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=99', options)
    const response: MovieTypes.Movies = await res.json()
    setDocumentaryMovies(response.results)
  }

  const getDramaMovies = async() => {
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=18', options)
    const response: MovieTypes.Movies = await res.json()
    setDramaMovies(response.results)
  }

  const getFamilyMovies = async() => {
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=10751', options)
    const response: MovieTypes.Movies = await res.json()
    setFamilyMovies(response.results)
  }

  const getFantasyMovies = async() => {
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=14', options)
    const response: MovieTypes.Movies = await res.json()
    setFantasyMovies(response.results)
  }

  const getHistoryMovies = async() => {
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=36', options)
    const response: MovieTypes.Movies = await res.json()
    setHistoryMovies(response.results)
  }

  const getHorrorMovies = async() => {
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=27', options)
    const response: MovieTypes.Movies = await res.json()
    setHorrorMovies(response.results)
  }

  const getMusicMovies = async() => {
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=10402', options)
    const response: MovieTypes.Movies = await res.json()
    setMusicMovies(response.results)
  }

  const getMysteryMovies = async() => {
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=9648', options)
    const response: MovieTypes.Movies = await res.json()
    setMysteryMovies(response.results)
  }

  const getRomanceMovies = async() => {
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=10749', options)
    const response: MovieTypes.Movies = await res.json()
    setRomanceMovies(response.results)
  }

  const getScienceFictionMovies = async() => {
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=878', options)
    const response: MovieTypes.Movies = await res.json()
    setScienceFictionMovies(response.results)
  }

  const getTvMovies = async() => {
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=10770', options)
    const response: MovieTypes.Movies = await res.json()
    setTvMovies(response.results)
  }

  const getThrillerMovies = async() => {
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=53', options)
    const response: MovieTypes.Movies = await res.json()
    setThrillerMovies(response.results)
  }

  const getWarMovies = async() => {
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=10752', options)
    const response: MovieTypes.Movies = await res.json()
    setWarMovies(response.results)
  }

  const getWesternMovies = async() => {
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=37', options)
    const response: MovieTypes.Movies = await res.json()
    setWesternMovies(response.results)
  }

  useEffect(() => {
    getCategory()
    getActionMovies()
    getAdventureMovies()
    getAnimationMovies()
    getComedyMovies()
    getCrimeMovies()
    getDocumentaryMovies()
    getDramaMovies()
    getFamilyMovies()
    getFantasyMovies()
    getHistoryMovies()
    getHorrorMovies()
    getMusicMovies()
    getMysteryMovies()
    getRomanceMovies()
    getScienceFictionMovies()
    getTvMovies()
    getThrillerMovies()
    getWarMovies()
    getWesternMovies()
  }, [])

  return (
    <>
      {category.map((genre) => (
        <section key={genre.id} style={{padding: '0 4rem', height: '35rem'}}>
          <S.SectionName>{genre.name}</S.SectionName>
          <S.MovieContainer>
            <Carousel>
              {(genre.name === 'Action' ? actionMovies : genre.name === 'Adventure' ? adventureMovies : genre.name === 'Animation' ? animationMovies : genre.name === 'Comedy' ? comedyMovies : genre.name === 'Crime' ? crimeMovies : genre.name === 'Documentary' ? documentaryMovies : genre.name === 'Drama' ? dramaMovies : genre.name === 'Family' ? familyMovies : genre.name === 'Fantasy' ? fantasyMovies : genre.name === 'History' ? historyMovies : genre.name === 'Horror' ? horrorMovies : genre.name === 'Music' ? musicMovies : genre.name === 'Mystery' ? mysteryMovies : genre.name === 'Romance' ? romanceMovies : genre.name === 'Science Fiction' ? scienceFictionMovies : genre.name === 'TV Movie' ? tvMovies : genre.name === 'Thriller' ? thrillerMovies : genre.name === 'War' ? warMovies : genre.name === 'Western' ? westernMovies : [])?.map((movie) => (
                <a href={`/movie/${movie.id}`} key={movie.id}>
                  <S.Movie key={movie.id}>
                    <S.MovieImage 
                      src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                      alt={movie.title}
                    />
                  </S.Movie>
                  <S.MovieName>{movie.title}</S.MovieName>
                </a>
              ))}
            </Carousel>
          </S.MovieContainer>
        </section>
      ))}
    </>
  )
}
