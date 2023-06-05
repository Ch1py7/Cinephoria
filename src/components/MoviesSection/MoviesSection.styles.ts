import styled from 'styled-components'

export const SectionName = styled.h2`
  font-size: 2.8rem;
  color: #d5d5d5;
`

export const MovieName = styled.h3`
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 2.4rem;
  color: #d5d5d5;
`

export const MovieContainer = styled.div`
  display: flex;
  gap: 3rem;
`

export const MovieImage = styled.img`
  height: 100%;
  filter: opacity(0.6);
  transition: filter 0.2s linear;
  &:hover {
    filter: opacity(1);
  }
`

export const Movie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  height: calc(24rem - 7px);
  border: 2px solid transparent;
  border-radius: 4px;
  transition: border 0.2s linear;
  &:hover {
    border: 2px solid #753eef;
  }
`
