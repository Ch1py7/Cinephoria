import { FC, ReactElement } from 'react'
import { MoviesSection } from 'components/MoviesSection'
import { NavComponent } from '../NavComponent'
import { MainCarousel } from '../MainCarousel'
import * as S from './HomePage.styles'

export const HomePage: FC = (): ReactElement => {
  const pictures= [
    '/halloween.webp',
    '/la-extorsion.webp',
    '/shazam.webp',
    '/succession.webp',
    '/supermariobros.webp',
    '/fantasticbeasts.webp'
  ]
  return (
    <>
      <NavComponent />
      <S.TrendingContainer>
        <MainCarousel pictures={pictures}/>
      </S.TrendingContainer>
      <MoviesSection />
    </>
  )
}
