import styled from 'styled-components'
import { Icon } from '@iconify/react'

export const SearchPage = styled.div`
  padding: 10rem 6rem;
  @media (max-width: 920px) {
    padding: 10rem 4rem;
  }
`

export const SearchInput = styled.input`
  width: 100%;
  height: 7rem;
  font-size: 2rem;
  background-color: #1a1a1a90;
  border: none;
  border-radius: 0.5rem;
  color: #fbfbfb;
  padding-left: 6rem;
  text-overflow: ellipsis;
`

export const SearchIcon = styled(Icon)`
  position: absolute;
  top: 3.5rem;
  left: 3rem;
  font-size: 2.4rem;
  color: #fbfbfb;
  transform: translate(-50%, -50%);
  cursor: pointer;
`

export const MoviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
`

export const MovieCard = styled.div`
  margin: 2rem;
`

export const MovieImage = styled.img`
  width: 100%;
`
