import styled from 'styled-components'

interface MoviePageProps {
  fontSize: string
}

export const MoviePage = styled.section`
  min-height: 100vh;
  padding: 0 8rem;
  @media(max-width: 920px) {
    padding: 0 2rem;
  }
`

export const MovieInformation = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 12rem;
  @media(max-width: 920px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const MovieImage = styled.img`
  justify-self: center;
  max-width: 100%;
  border-radius: 1rem;
`

export const MovieTitle = styled.h1`
  font-size: 3rem;
  color: #e1e1e1;
`

export const MovieDescription = styled.p<MoviePageProps>`
  display: flex;
  font-size: ${(props) => `${props.fontSize}`};
  color: #e1e1e1;
`

export const MovieSubTitle = styled.h2<MoviePageProps>`
  font-size: ${(props) => `${props.fontSize}`};
  color: #e1e1e1;
`

export const GenreDecoration = styled.p<MoviePageProps>`
  color: #e1e1e1;
  font-size: ${(props) => `${props.fontSize}`};
`
