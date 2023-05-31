import { HomePage } from './components/HomePage'
import { MoviePage } from 'components/MoviePage'
import { FC, ReactElement } from 'react'
import { Routes, Route } from 'react-router-dom'

export const App: FC = (): ReactElement => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/movie/:id' element={<MoviePage />}/>
    </Routes>
  )
}