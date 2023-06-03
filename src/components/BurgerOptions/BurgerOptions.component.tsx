import { FC, ReactElement } from 'react'
import * as S from './BurgerOptions.styles'
import { Icon } from '@iconify/react'

interface BurgerOptionsProps {
  isMenuOpen: boolean
  onClickBurger: () => void
}

export const BurgerOptions: FC<BurgerOptionsProps> = ({ isMenuOpen, onClickBurger}): ReactElement => {
  const IconStyles = {
    fontSize: '2.4rem',
    color: '#e4e0e6',
    cursor: 'pointer'
  }
  
  return (
    <>
      <S.BurgerOptions className={isMenuOpen ? 'showMenu' : 'noShowMenu'}>
        <S.Blur onClick={onClickBurger} isOpen={isMenuOpen ? 'block' : 'none'}/>
        <Icon onClick={onClickBurger} icon='radix-icons:cross-2' style={IconStyles} />
        <ol style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
          <li>
            <S.Link to='/'>Home</S.Link>
          </li>
          <li>
            <S.Link to='/movies'>Movies</S.Link>
          </li>
          <li>
            <S.Link to='/search'>Search</S.Link>
          </li>
          <li>
            <S.Link to='/originals'>Originals</S.Link>
          </li>
          <li>
            <S.Link to='/trending'>Trending Now</S.Link>
          </li>
          <li>
            <S.Link to='/genres'>Genres</S.Link>
          </li>
        </ol>
      </S.BurgerOptions>
    </>
  )
}
