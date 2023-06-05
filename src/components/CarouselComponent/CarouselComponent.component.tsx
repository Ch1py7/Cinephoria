import { FC, ReactElement } from 'react'
import Carousel from 'devsgnr-carousel'

interface CarouselComponentProps {
  pictures: string[]
}

export const CarouselComponent: FC<CarouselComponentProps> = ({ pictures }): ReactElement => {
  return (
    <Carousel
      borderRadius={10}
      timeout={10000}
      autoPlay={true}
      pictures={pictures}
      height="100vh"
      showThumb={false}
      thumbnailOutlineColor="#000"
      thumbnailOutlineStyle="solid"
      thumbnailOutlineOffset={1}
      thumbnailOutlineThickness={2}
      showButton={true}
      showIndicator={true}
    />
  )
}
