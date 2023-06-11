import { MainCarousel } from 'components/MainCarousel'
import { NavComponent } from 'components/NavComponent'
import { SeriesSection } from 'components/SeriesSection'
import { FC, ReactElement } from 'react'
import * as S from './SeriesPage.styles'

export const SeriesPage: FC = (): ReactElement => {
  const pictures = [
    '/house.webp',
    '/gremlins.webp',
    '/the-idol.webp',
    '/superman.webp',
    '/and-just-like-that.webp',
  ]
  return (
    <S.SeriesPage>
      <NavComponent />
      <S.CarouselContainer>
        <MainCarousel>
          {pictures.map((pic, index) => (
            <img
              key={index}
              src={pic}
              style={{ width: 'calc(100vw - 8rem)', height: '100vh' }}
            />
          ))}
        </MainCarousel>
      </S.CarouselContainer>
      <SeriesSection />
    </S.SeriesPage>
  )
}
