import { MainCarousel } from 'components/MainCarousel'
import { MoviesSection } from 'components/MoviesSection'
import { FC, ReactElement } from 'react'
import { NavComponent } from '../NavComponent'
import * as S from './HomePage.styles'

export const HomePage: FC = (): ReactElement => {
  const pictures = [
    '/halloween.webp',
    '/la-extorsion.webp',
    '/shazam.webp',
    '/succession.webp',
    '/supermariobros.webp',
    '/fantasticbeasts.webp',
    '/evildead.webp',
  ]
  return (
    <>
      <NavComponent />
      <S.TrendingContainer>
        <MainCarousel>
          {pictures.map((pic, index) => (
            <img
              key={index}
              src={pic}
              alt={pic}
              style={{ width: 'calc(100vw - 8rem)', height: '100%' }}
            />
          ))}
        </MainCarousel>
      </S.TrendingContainer>
      <MoviesSection />
    </>
  )
}
