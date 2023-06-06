import { FC, ReactElement, useCallback, useMemo, useState, Children, useEffect } from 'react'
import { arrowLeft } from 'assets'
import * as S from './MainCarousel.styles'

interface MainCarouselProps {
  children: ReactElement | ReactElement[]
}

export const MainCarousel: FC<MainCarouselProps> = ({ children }): ReactElement => {
  const [current, setCurrent] = useState<number>(0)
  const childrenArray = useMemo(() => Children.toArray(children), [children])

  const handleNext = useCallback(() => {
    setCurrent((prev) => (prev === childrenArray.length - 1 ? 0 : prev + 1))
  }, [childrenArray])

  const handlePrev = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? childrenArray.length - 1 : prev - 1))
  }, [childrenArray])

  useEffect(() => console.log(childrenArray),[])
  return (
    <S.Carousel>
      <S.CarouselButtonsContainer>
        <S.CarouselButton onClick={handlePrev}>
          <img src={arrowLeft} alt='anterior' />
        </S.CarouselButton>
        <S.CarouselButton onClick={handleNext}>
          <img src={arrowLeft} alt='siguiente' />
        </S.CarouselButton>
      </S.CarouselButtonsContainer>
      <S.CarouselList items={childrenArray.length} current={current}>
        {childrenArray.map((child, index) => (
          <S.CarouselItem key={index}>{child}</S.CarouselItem>
        ))}
      </S.CarouselList>
    </S.Carousel>
  )
}
