export namespace MovieTypes {
  export interface MoviesProps {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: number
    media_type: string
    title: string
    video: false
    vote_average: number
    vote_count: number
  }
  export interface Movies {
    page: number
    results: MoviesProps[]
  }

  export interface GenresProps {
    id: number
    name: string
  }

  export interface Genres {
    genres: GenresProps[]
  }
}