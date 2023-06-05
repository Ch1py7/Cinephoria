import { FC, ReactElement } from 'react'
import { MoviesSection } from 'components/MoviesSection'
import { NavComponent } from '../NavComponent'
import { CarouselComponent } from '../CarouselComponent'
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
        <CarouselComponent pictures={pictures}/>
      </S.TrendingContainer>
      <MoviesSection />
    </>
  )
}
