import styled from 'styled-components'
import { NavLink as sourceLink } from 'react-router-dom'
import { Icon as sourceIcon } from '@iconify/react'


interface BurgerOptionsProps {
  isOpen: string
}

export const BurgerOptions = styled.div`
  display: flex;
  flex-direction: column;
  width: 36rem;
  height: 100%;
  padding: 3rem 6rem;
  gap: 2rem;
  background-color: #0f0f0f;
  @media (max-width: 414px) {
    width: 100%;
    padding: 3rem 2rem;
  }
`

export const Blur = styled.div<BurgerOptionsProps>`
  position: absolute;
  display: ${(props) => `${props.isOpen}`};
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: #16161650;
  transform: translateX(36rem);
  backdrop-filter: blur(1px);
  @media (max-width: 414px) {
    display: none;
  }
`

export const Icon = styled(sourceIcon)`
  font-size: 2.4rem;
  color: #e4e0e6;
  cursor: pointer;
  transition: scale 0.075s ease-in-out;
  &:hover {
    color: #ffffff;
    font-weight: bold;
    scale: 110%;
  }
`

export const Link = styled(sourceLink)`
  font-size: 2.4rem;
  color: #b7b7b7;
  &:hover {
    font-weight: bold;
    color: #ffffff;
  }
`

export const Socials = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  margin-top: 4rem;
`
