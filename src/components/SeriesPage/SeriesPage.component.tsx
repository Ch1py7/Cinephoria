import { FC, ReactElement } from 'react'
import * as S from './SeriesPage.styles'
import { MainCarousel } from 'components/MainCarousel'
import { NavComponent } from 'components/NavComponent'
import { SeriesSection } from 'components/SeriesSection'

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
        <MainCarousel pictures={pictures}/>
      </S.CarouselContainer>
      <SeriesSection />
    </S.SeriesPage>
  )
}
