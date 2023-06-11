import { MoviePage } from 'components/MoviePage'
import { SearchPage } from 'components/SearchPage'
import { SeriePage } from 'components/SeriePage'
import { SeriesPage } from 'components/SeriesPage'
import { FC, ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './components/HomePage'

export const App: FC = (): ReactElement => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/movie/:id' element={<MoviePage />} />
      <Route path='/search' element={<SearchPage />} />
      <Route path='/series' element={<SeriesPage />} />
      <Route path='/serie/:id' element={<SeriePage />} />
      <Route path='/trending' element={<SearchPage />} />
    </Routes>
  )
}
