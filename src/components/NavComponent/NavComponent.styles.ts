import styled from 'styled-components'

export const NavComponent = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 8rem;
  padding: 2rem 4rem;
  font-family: 'Satoshi', sans-serif;
`

export const NavSections = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.8rem;
`

export const NavAnchor = styled.a`
  font-size: 1.6rem;
  font-weight: 700;
  color: #fff;
  line-height: 1;
`

export const LogoImage = styled.img`
  height: 2.4rem;
`

export const LetterBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.2rem;
  height: 4.2rem;
  border-radius: 50%;
  background: linear-gradient(to right, #8f00ff, #3183ff);
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
  color: #dfdfdf
`