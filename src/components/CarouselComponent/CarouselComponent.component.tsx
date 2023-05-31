import { FC, ReactElement } from 'react'
import Carousel from 'devsgnr-carousel'

export const CarouselComponent: FC = (): ReactElement => {

  const pictures: string[] = [
    '/halloween.webp',
    '/la-extorsion.webp',
    '/shazam.webp',
    '/succession.webp',
    '/supermariobros.webp',
    '/fantasticbeasts.webp'
  ]

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
