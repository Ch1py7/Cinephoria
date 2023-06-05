import styled from 'styled-components'

interface SeriePageProps {
  fontSize: string
}

export const SeriePage = styled.section`
  min-height: 100vh;
  padding: 0 8rem;
  @media(max-width: 920px) {
    padding: 0 2rem;
  }
`

export const SerieInformation = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 12rem;
  @media(max-width: 920px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const SerieImage = styled.img`
  justify-self: center;
  max-width: 100%;
  border-radius: 1rem;
`

export const SerieTitle = styled.h1`
  font-size: 3rem;
  color: #e1e1e1;
`

export const SerieDescription = styled.p<SeriePageProps>`
  display: flex;
  align-items: center;
  font-size: ${(props) => `${props.fontSize}`};
  color: #e1e1e1;
`

export const SerieSubTitle = styled.h2<SeriePageProps>`
  font-size: ${(props) => `${props.fontSize}`};
  color: #e1e1e1;
`

export const GenreDecoration = styled.p<SeriePageProps>`
  color: #e1e1e1;
  font-size: ${(props) => `${props.fontSize}`};
`

export const Recommendation = styled.div`
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

export const RecommendationImage = styled.img`
  height: 100%;
  filter: opacity(0.6);
  transition: filter 0.2s linear;
  &:hover {
    filter: opacity(1);
  }
`

export const RecommendationName = styled.h3`
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 2.4rem;
  color: #d5d5d5;
`
