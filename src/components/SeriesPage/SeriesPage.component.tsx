import { FC, ReactElement } from 'react'
import * as S from './SeriesPage.styles'
import { CarouselComponent } from 'components/CarouselComponent'
import { NavComponent } from 'components/NavComponent'

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
        <CarouselComponent pictures={pictures}/>
      </S.CarouselContainer>
    </S.SeriesPage>
  )
}
