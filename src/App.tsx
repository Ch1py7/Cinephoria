import { HomePage } from './components/HomePage'
import { FC, ReactElement } from 'react'
import { Routes, Route } from 'react-router-dom' 

export const App: FC = (): ReactElement => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
    </Routes>
  )
}