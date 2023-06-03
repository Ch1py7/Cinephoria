import { useEffect, useState, useCallback } from 'react'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: import.meta.env.VITE_API_KEY
  }
}

const createUrl = (url: string) => `https://api.themoviedb.org/3/${url}`

export const useMovies = <T>(get: string) => {
  const [movies, setMovies] = useState<T | undefined>()

  const getMovies = useCallback(async () => {
    try {
      const res = await fetch(createUrl(get), options)
      const response: T = await res.json()
      setMovies(response)
    }
    catch (error) {
      console.error(error)
    }
  }, [get])

  useEffect(() => {
    getMovies()
  }, [getMovies])

  return { movies }
}