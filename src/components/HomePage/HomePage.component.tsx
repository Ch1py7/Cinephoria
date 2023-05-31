import { FC, ReactElement } from 'react'
import { SectionMovies } from '../SectionMovies'
import { NavComponent } from '../NavComponent'
import { CarouselComponent } from '../CarouselComponent'
import * as S from './HomePage.styles'


export const HomePage: FC = (): ReactElement => {
  return (
    <>
      <NavComponent />
      <S.TrendingContainer>
        <CarouselComponent />
      </S.TrendingContainer>
      <SectionMovies />
    </>
  )
}
