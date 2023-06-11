import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const ProfileOptions = styled.div`
  width: 16rem;
  background-color: #1f1f1f;
  border-radius: 1rem;
`

export const PofileList = styled.ol`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 2rem;
`

export const Link = styled(NavLink)`
  font-size: 1.8rem;
  color: #eeeeee;
  text-align: start;
`
