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
    video: boolean
    vote_average: number
    vote_count: number
  }

  export interface SeriesProps {
    backdrop_path: string
    first_air_date: string
    genre_ids: number[]
    id: number
    name: string
    origin_country: string[]
    original_language: string
    original_name: string
    overview: string
    popularity: number
    poster_path: string
    vote_average: number
    vote_count: number
  }

  export interface MovieProps {
    adult: boolean
    backdrop_path: '/h8gHn0OzBoaefsYseUByqsmEDMY.jpg'
    belongs_to_collection: BelongsToCollection[]
    budget: number
    genres: GenresProps[]
    homepage: string
    id: number
    imdb_id: string
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: ProductionCompanies[]
    production_countries: ProductionCountries[]
    release_date: string
    revenue: number
    runtime: number
    spoken_languages: SpokenLanguages[]
    status: string
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
  }

  export interface BelongsToCollection {
    backdrop_path: string
    id: number
    name: string
    poster_path: string
  }

  export interface SpokenLanguages {
    english_name: string
    iso_639_1: string
    name: string
  }

  export interface ProductionCompanies {
    id: number
    logo_path: string
    name: string
    origin_country: string
  }

  export interface ProductionCountries {
    iso_3166_1: string
    name: string
  }

  export interface Movies {
    page: number
    results: MoviesProps[]
  }

  export interface Movie {
    page: number
    results: MovieProps[]
    total_pages: number
    total_results: number
  }

  export interface Series {
    page: number
    results: SeriesProps[]
    total_pages: number
    total_results: number
  }

  export interface GenresProps {
    id: number
    name: string
  }

  export interface Genres {
    genres: GenresProps[]
  }
}