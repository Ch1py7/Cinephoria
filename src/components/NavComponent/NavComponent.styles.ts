import { NavLink as SourceLink } from 'react-router-dom'
import styled from 'styled-components'

export const NavComponent = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  width: 100%;
  height: 8rem;
  padding: 2rem 6rem;
  background-color: #101010dd;
  font-family: 'Satoshi', sans-serif;
  @media (max-width: 414px) {
    padding: 2rem;
  }
`

export const Burger = styled.div`
  justify-self: start;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`

export const NavSections = styled.div`
  justify-self: end;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.8rem;
  @media (max-width: 920px) {
    justify-self: end;
    gap: 1rem;
  }
`

export const NavLink = styled(SourceLink)`
  width: fit-content;
  font-size: 1.6rem;
  font-weight: 700;
  color: #fff;
  line-height: 1;
  @media (max-width: 920px) {
    display: none;
  }
`

export const ProfileOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.8rem;
  cursor: pointer;
`

export const LogoImage = styled.img`
  justify-self: center;
  align-self: center;
  height: 2.4rem;
  @media (max-width: 920px) {
    height: 1.8rem;
  }
`

export const ProfileName = styled.p`
  font-size: 1.6rem;
  color: #fff;
  @media (max-width: 920px) {
    display: none;
  }
`

export const LetterBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.2rem;
  height: 4.2rem;
  border-radius: 50%;
  background: linear-gradient(to right, #8f00ff, #3183ff);
  @media (max-width: 920px) {
    width: 3.2rem;
    height: 3.2rem;
  }
`

export const Letter = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
  background: linear-gradient(to right, #1d0033, #0a1933);
  font-size: 1.6rem;
  font-weight: 700;
  color: #dfdfdf;
  @media (max-width: 920px) {
    width: 2.8rem;
    height: 2.8rem;
  }
`
