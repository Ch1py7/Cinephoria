import styled from 'styled-components'

export interface CarouselListProps {
  items: number
  current: number
}

export const Carousel = styled.section`
  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
`

export const CarouselButtonsContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const CarouselButton = styled.button`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 6rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  & > img {
    width: 100%;
    height: 100%;
  }
  &:last-of-type > img {
    transform: rotate(180deg);
  }
`

export const CarouselItem = styled.li`
  display: flex;
  align-items: center;
  height: fit-content;
  border-radius: 16px;
  transition: margin 0.5s ease-in-out, opacity 0.5s ease-in-out;
  & > * {
    border-radius: 10px;
    height: 22.5;
    width: 15.7rem;
  }
`

export const CarouselList = styled.ul<CarouselListProps>`
  position: relative;
  display: flex;
  align-items: flex-start;
  width: 100%;
  gap: 5rem;
  list-style: none;
  overflow: hidden;
  & > ${CarouselItem}:first-of-type {
    margin-left: calc(-${(props) => props.current * 189}rem);
  }
`
