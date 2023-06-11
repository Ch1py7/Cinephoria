const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: import.meta.env.VITE_API_KEY,
  },
}

export module MovieService {
  export const getData = async <T>(endpoint: string, genreId: number) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/${endpoint}${genreId}`,
      options
    )
    const response: T = await res.json()
    return response
  }
}
