import styled from 'styled-components'
import { NavLink as SourceLink } from 'react-router-dom'

interface BurgerOptionsProps {
  isOpen: string
}

export const BurgerOptions = styled.div`
  display: flex;
  flex-direction: column;
  width: 36rem;
  height: 100%;
  padding: 3rem 4rem;
  gap: 2rem;
  background-color: #0f0f0f;
  @media (max-width: 370px) {
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
`

export const Link = styled(SourceLink)`
  font-size: 2.4rem;
  color: #b7b7b7;
  &:hover {
    color: #ffffff;
  }
`
